"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbSource = void 0;
const typeorm_1 = require("typeorm");
Object.defineProperty(exports, "DbSource", { enumerable: true, get: function () { return typeorm_1.DataSource; } });
const config_1 = require("./config");
exports.default = new typeorm_1.DataSource(config_1.dbConfig);
//# sourceMappingURL=datasource.js.map