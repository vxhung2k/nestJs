import { Module } from '@nestjs/common';
import { UserRepository } from './User.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { UserEntity, UserSchema } from './User.entities';
@Module({
  providers: [UserRepository],
  exports: [UserRepository],
  // controllers: [],
  imports: [
    MongooseModule.forFeature(
      [
        {
          name: UserEntity.name,
          schema: UserSchema,
        },
      ],
      // DATABASE_CONNECTION_NAME
    ),
  ],
})
export class UserRepositoryModule {}
