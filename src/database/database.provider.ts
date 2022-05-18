import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'mysql',
        host: 'localhost',
        port: 3307,
        username: 'root',
        password: 'root',
        database: 'TEST_DB',
        synchronize: true,
      }),
  },
];
