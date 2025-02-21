export interface Config {
  env: 'local' | 'dev' | 'prod';
  db: {
    host: string;
    port: number;
    name: string;
    user: string;
    password: string;
    logger: boolean;
    authSource: string;
  };
  redis: {
    host: string;
    port: number;
    password: string;
    db: number;
  };
}
