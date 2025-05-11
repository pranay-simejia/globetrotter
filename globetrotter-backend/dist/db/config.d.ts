import { TypeOrmModuleOptions } from '@nestjs/typeorm';
export declare const dbConfig: TypeOrmModuleOptions;
declare const _default: (() => {
    retryAttempts?: number;
    retryDelay?: number;
    toRetry?: (err: any) => boolean;
    autoLoadEntities?: boolean;
    keepConnectionAlive?: boolean;
    verboseRetryLog?: boolean;
    manualInitialization?: boolean;
} & Partial<import("typeorm/driver/postgres/PostgresConnectionOptions").PostgresConnectionOptions>) & import("@nestjs/config").ConfigFactoryKeyHost<{
    retryAttempts?: number;
    retryDelay?: number;
    toRetry?: (err: any) => boolean;
    autoLoadEntities?: boolean;
    keepConnectionAlive?: boolean;
    verboseRetryLog?: boolean;
    manualInitialization?: boolean;
} & Partial<import("typeorm/driver/postgres/PostgresConnectionOptions").PostgresConnectionOptions>>;
export default _default;
