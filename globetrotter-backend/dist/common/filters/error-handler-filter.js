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
var ErrorHandler_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const logger_1 = require("../logger");
let ErrorHandler = ErrorHandler_1 = class ErrorHandler {
    logger;
    constructor(logger) {
        this.logger = logger;
        this.logger.setContext(ErrorHandler_1.name);
    }
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        let status = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        let errorMessage = 'Internal Server Error';
        if (exception instanceof typeorm_1.QueryFailedError) {
            status = common_1.HttpStatus.BAD_REQUEST;
            errorMessage = exception.message || 'TypeORM Query Failed Error';
        }
        else if (exception.response && exception.response.statusCode) {
            status = exception.response.statusCode;
            errorMessage = exception.response.message || null;
        }
        const errorResponse = {
            code: status,
            timestamp: new Date().toISOString(),
            path: request.url,
            method: request.method,
            message: errorMessage,
        };
        if (status === common_1.HttpStatus.INTERNAL_SERVER_ERROR) {
            console.error(exception);
        }
        this.logger.error(errorResponse);
        response.status(status).json(errorResponse);
    }
};
exports.ErrorHandler = ErrorHandler;
exports.ErrorHandler = ErrorHandler = ErrorHandler_1 = __decorate([
    (0, common_1.Catch)(),
    __metadata("design:paramtypes", [logger_1.LoggerService])
], ErrorHandler);
//# sourceMappingURL=error-handler-filter.js.map