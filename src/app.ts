import express from 'express'
import { NODE_ENV, PORT } from '@config';
import { Routes } from '@interfaces/routes.interface';
import * as swagger from "swagger-express-ts";

class App {
  public app: express.Application;
  public env: string;
  public port: string | number;

  constructor(routes: Routes[]) {
    this.app = express();
    this.env = NODE_ENV || 'dev'
    this.port = PORT || 3000;

    this.initializeMiddlewares();
    this.initializeRoutes(routes);
    this.initializeSwagger();
    this.initializeErrorHandling();
  }

  public listen() {
    this.app.listen(this.port, () => { });
  }

  private initializeMiddlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private initializeRoutes(routes: Routes[]) {
    routes.forEach(route => {
      this.app.use('/', route.router);
    });
  }

  initializeSwagger() {
    this.app.use('/api-docs/swagger', express.static('swagger'));
    this.app.use('/api-docs/swagger/assets', express.static('node_modules/swagger-ui-dist'));
    const specs = swagger.express({
      definition: {
        info: {
          title: "Plant Therapist",
          version: "1.0"
        },
        externalDocs: {
          url: "swagger"
        }
        // Models can be defined here
      }
    })
    //this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
  }

  initializeErrorHandling() {
    //throw new Error('Method not implemented.');
  }
}

export default App;