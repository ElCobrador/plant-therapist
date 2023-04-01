import { config } from 'dotenv';
config({ path: `.env.${process.env.NODE_ENV || 'dev'}.local` });

export const { NODE_ENV, PORT } = process.env;
