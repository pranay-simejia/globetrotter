export default () => ({
  port: process.env.PORT || 3000,
  database: {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT || 5432,
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRATION,
  },
});
