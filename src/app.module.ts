import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user/controllers/User.Controller';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://vxhung2k:123456aA@cluster0.b0nqggo.mongodb.net/my-database?retryWrites=true&w=majority',
    ),
    UserModule,
  ],
  controllers: [UserController],
  // providers: [],
  // exports: [],
})
export class AppModule {}
