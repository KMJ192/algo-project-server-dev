import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
// import { mongo_db_url } from './key';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/mongodb-container')],
})
export class MongodbModule {}
