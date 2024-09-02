import { Config } from '@/domain/config/config.interface';

export default (): Config => ({
  env: process.env.NODE_ENV as Config['env'],
  db: {
    name: process.env.DB_NAME,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: parseInt(process.env.DB_PORT, 10) || 5432,
    logger: process.env.DB_LOGGER === 'true',
    password: process.env.DB_PASSWORD,
    authSource: process.env.DB_AUTH_SOURCE || 'admin',
  },
  redis: {
    host: process.env.REDIS_HOST,
    db: parseInt(process.env.REDIS_DB, 10) || 0,
    port: parseInt(process.env.REDIS_PORT, 10) || 6379,
    password: process.env.REDIS_PASSWORD,
  },
});
