// success-response.interceptor.ts

import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SKIP_INTERCEPTOR_KEY } from './skip.interceptor';
import { Reflector } from '@nestjs/core';

interface ApiResponse<T> {
  success: boolean;
  data: T;
}

@Injectable()
export class SuccessResponseInterceptor<T>
  implements NestInterceptor<T, ApiResponse<T>>
{
  constructor(private reflector: Reflector) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<ApiResponse<T>> {
    const handler = context.getHandler();
    const skipInterceptor = this.reflector.get<boolean>(
      SKIP_INTERCEPTOR_KEY,
      handler,
    );
    if (skipInterceptor) {
      return next.handle();
    }

    return next.handle().pipe(
      map((data) => ({
        success: true,
        count: Array.isArray(data) ? data.length : undefined,
        data,
      })),
    );
  }
}
