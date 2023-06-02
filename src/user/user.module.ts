import { Module } from '@nestjs/common';
import { UserService } from './services/User.service';
import { UserRepositoryModule } from './repository/User.repository.module';
@Module({
  imports: [UserRepositoryModule],
  exports: [UserService],
  providers: [UserService],
})
export class UserModule {}
