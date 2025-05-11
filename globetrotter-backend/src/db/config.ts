import { readFileSync } from 'fs';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { registerAs } from '@nestjs/config';
import { config as dotenvConfig } from 'dotenv';

dotenvConfig({ path: `.env` });

export const dbConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: `${process.env.PG_HOST}`,
  username: `${process.env.PG_USER}`,
  password: `${process.env.PG_PASSWORD}`,
  port: parseInt(`${process.env.PG_PORT}`),
  database: `${process.env.PG_DATABASE}`,
  entities: [__dirname + '/../**/*.entity.{ts,js}'],
  extra: {
    trustServerCertificate: true,
    Encrypt: true,
    IntegratedSecurity: false,
  },
  ssl: {
    rejectUnauthorized: true,
    requestCert: true,
    ca: readFileSync('ca.pem').toString(),
  },
  migrations: ['dist/db/migrations/*.js'],
};

export default registerAs('db', () => dbConfig);
