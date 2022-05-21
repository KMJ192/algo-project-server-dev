import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'mysql',
        host: '172.26.0.2', // mysql docker ip
        // host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'TEST_DB',
        entities: [],
        synchronize: true,
      }),
  },
];
