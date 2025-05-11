import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
interface ApiResponse<T> {
    success: boolean;
    data: T;
}
export declare class SuccessResponseInterceptor<T> implements NestInterceptor<T, ApiResponse<T>> {
    private reflector;
    constructor(reflector: Reflector);
    intercept(context: ExecutionContext, next: CallHandler): Observable<ApiResponse<T>>;
}
export {};
