declare const _default: () => {
    port: string | number;
    database: {
        host: string | undefined;
        port: string | number;
        username: string | undefined;
        password: string | undefined;
        database: string | undefined;
    };
    jwt: {
        secret: string | undefined;
        expiresIn: string | undefined;
    };
};
export default _default;
