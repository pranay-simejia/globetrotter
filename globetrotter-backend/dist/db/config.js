"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConfig = void 0;
const fs_1 = require("fs");
const config_1 = require("@nestjs/config");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)({ path: `.env` });
exports.dbConfig = {
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
        ca: (0, fs_1.readFileSync)('ca.pem').toString(),
    },
    migrations: ['dist/db/migrations/*.js'],
};
exports.default = (0, config_1.registerAs)('db', () => exports.dbConfig);
//# sourceMappingURL=config.js.map