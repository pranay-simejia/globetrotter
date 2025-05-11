import { LoggerService as NestLogger } from '@nestjs/common';
import { Logger } from 'winston';
export declare class LoggerService implements NestLogger {
    private context?;
    private winstonLogger;
    setContext(context: string): void;
    constructor();
    log(message: any, context?: string): Logger;
    error(message: any, trace?: string, context?: string): any;
    warn(message: any, context?: string): any;
    debug(message: any, context?: string): any;
    verbose(message: any, context?: string): any;
}
