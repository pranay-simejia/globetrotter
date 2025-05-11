"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerService = void 0;
const common_1 = require("@nestjs/common");
const winston_1 = require("winston");
let LoggerService = class LoggerService {
    context;
    winstonLogger;
    setContext(context) {
        this.context = context;
    }
    constructor() {
        this.winstonLogger = (0, winston_1.createLogger)({
            transports: [new winston_1.transports.Console()],
        });
    }
    log(message, context) {
        return this.winstonLogger.info(message, {
            context: context || this.context,
        });
    }
    error(message, trace, context) {
        return this.winstonLogger.error(message, {
            trace,
            context: context || this.context,
        });
    }
    warn(message, context) {
        return this.winstonLogger.warn(message, {
            context: context || this.context,
        });
    }
    debug(message, context) {
        return this.winstonLogger.debug(message, {
            context: context || this.context,
        });
    }
    verbose(message, context) {
        return this.winstonLogger.verbose(message, {
            context: context || this.context,
        });
    }
};
exports.LoggerService = LoggerService;
exports.LoggerService = LoggerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], LoggerService);
//# sourceMappingURL=logger.service.js.map