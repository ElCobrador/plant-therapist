import { DB_USERNAME, DB_PASSWORD, DB_HOST, DB_PORT, DB_DATABASE } from '@config/index';
import { ConnectOptions } from 'mongoose';

export const dbConnection = {
  url: `mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`,
  options: {
    poolSize: 10,
    authSource: "admin",
    user: DB_USERNAME,
    pass: DB_PASSWORD,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  } as ConnectOptions,
};
