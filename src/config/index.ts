import { config } from 'dotenv';
config({ path: `.env.${process.env.NODE_ENV || 'dev'}.local` });

export const { NODE_ENV, PORT } = process.env;
export const { DB_HOST, DB_PORT, DB_DATABASE } = process.env;