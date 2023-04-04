import * as swagger from "swagger-express-ts";
import * as bodyParser from 'body-parser';
import "reflect-metadata";
import express from 'express'
import { NODE_ENV, PORT } from '@config';
import { Container } from 'inversify';
import { interfaces, InversifyExpressServer, TYPE } from 'inversify-express-utils';

import { TYPES } from './types'
import { UserService } from './services/users.service';
import { UserController } from './controllers/users.controller';
import { dbConnection } from "@database";
import { connect, set } from "mongoose";

class App {
  public app: express.Application;
  public env: string;
  public port: string | number;

  constructor() {
    this.env = NODE_ENV || 'dev'
    this.port = PORT || 3000;

    this.connectToDatabase();

    const container = this.InitializeContainer();
    let server = new InversifyExpressServer(container);
    server.setConfig((app: express.Application) => {

      this.initializeSwagger(app);
      //this.initializeMiddlewares(app);
    })

    server.setErrorConfig((app: any) => {
      app.use((err: Error, request: express.Request, response: express.Response, next: express.NextFunction) => {
        console.error(err.stack);
        response.status(500).send("Something broke!");
      });
    });

    this.app = server.build();
  }

  private connectToDatabase() {
    const url = dbConnection.url;

    if (this.env !== 'prod') {
      set('debug', true);
    }
    connect(dbConnection.url)
      .then(() => console.log(`Connected to mongodb with connection : ${url} !`));
  }

  public listen() {
    this.app.listen(this.port, () => { });
  }

  private InitializeContainer(): Container {
    let container = new Container();

    container.bind<interfaces.Controller>(TYPE.Controller)
      .to(UserController)
      .inSingletonScope()
      .whenTargetNamed(UserController.TARGET_NAME)

    container.bind<UserService>('UserService').to(UserService);

    return container;
  }

  private initializeMiddlewares(app: express.Application) {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  initializeSwagger(app: express.Application) {
    app.use('/api-docs/swagger', express.static('swagger'));
    app.use('/api-docs/swagger/assets', express.static('node_modules/swagger-ui-dist'));
    app.use(bodyParser.json());
    app.use(swagger.express({
      definition: {
        info: {
          title: "Plant Therapist",
          version: "1.0"
        },
        externalDocs: {
          url: "My url"
        }
        // Models can be defined here
      }
    }));
  }
}

export default App;