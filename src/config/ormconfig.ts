import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';
import { Email } from '../email/entities/email.entity';

export const PostgresSqlConnection: TypeOrmModuleAsyncOptions = {
  useFactory: async (): Promise<TypeOrmModuleOptions> => {
    return {
      type: 'postgres',
      port: process.env.DB_PORT,
      host: process.env.DB_HOST,
      database: process.env.DB_DATABASE,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      entities: [Email],
      migrations: [__dirname + '**/migrations/**{.ts,.js}'],
      synchronize: true,
      migrationsRun: true,
    };
  },
};
