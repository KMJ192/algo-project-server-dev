import { Module } from '@nestjs/common';

import { MongodbModule } from './mongodb/mongodb.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TestModule } from './test/test.module';

@Module({
  imports: [MongodbModule, UserModule, TestModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
