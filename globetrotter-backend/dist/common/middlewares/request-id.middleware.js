"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const constants_1 = require("../constants");
function RequestIdMiddleware(request, response, next) {
    if (!request.headers[constants_1.REQUEST_ID_TOKEN_HEADER]) {
        request.headers[constants_1.REQUEST_ID_TOKEN_HEADER] = (0, uuid_1.v4)();
    }
    response.set(constants_1.REQUEST_ID_TOKEN_HEADER, request.headers[constants_1.REQUEST_ID_TOKEN_HEADER]);
    next();
}
exports.default = RequestIdMiddleware;
//# sourceMappingURL=request-id.middleware.js.map