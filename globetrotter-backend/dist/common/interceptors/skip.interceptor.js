"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkipInterceptor = exports.SKIP_INTERCEPTOR_KEY = void 0;
const common_1 = require("@nestjs/common");
exports.SKIP_INTERCEPTOR_KEY = 'skip_interceptor';
const SkipInterceptor = () => (0, common_1.SetMetadata)(exports.SKIP_INTERCEPTOR_KEY, true);
exports.SkipInterceptor = SkipInterceptor;
//# sourceMappingURL=skip.interceptor.js.map