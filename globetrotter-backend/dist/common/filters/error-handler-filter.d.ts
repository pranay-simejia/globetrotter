import { ExceptionFilter, ArgumentsHost } from '@nestjs/common';
import { LoggerService } from '../logger';
export declare class ErrorHandler implements ExceptionFilter {
    private logger;
    constructor(logger: LoggerService);
    catch(exception: any, host: ArgumentsHost): void;
}
