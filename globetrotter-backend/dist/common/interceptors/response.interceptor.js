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
exports.SuccessResponseInterceptor = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
const skip_interceptor_1 = require("./skip.interceptor");
const core_1 = require("@nestjs/core");
let SuccessResponseInterceptor = class SuccessResponseInterceptor {
    reflector;
    constructor(reflector) {
        this.reflector = reflector;
    }
    intercept(context, next) {
        const handler = context.getHandler();
        const skipInterceptor = this.reflector.get(skip_interceptor_1.SKIP_INTERCEPTOR_KEY, handler);
        if (skipInterceptor) {
            return next.handle();
        }
        return next.handle().pipe((0, operators_1.map)((data) => ({
            success: true,
            count: Array.isArray(data) ? data.length : undefined,
            data,
        })));
    }
};
exports.SuccessResponseInterceptor = SuccessResponseInterceptor;
exports.SuccessResponseInterceptor = SuccessResponseInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector])
], SuccessResponseInterceptor);
//# sourceMappingURL=response.interceptor.js.map