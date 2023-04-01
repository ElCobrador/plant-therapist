import express from 'express'
import { NODE_ENV, PORT } from '@config';
import { Routes } from '@interfaces/routes.interface';

class App {
  public app: express.Application;
  public env: string;
  public port: string | number;

  constructor(routes: Routes[]) {
    this.app = express();
    this.env = NODE_ENV || 'dev'
    this.port = PORT || 3000;
  }
}