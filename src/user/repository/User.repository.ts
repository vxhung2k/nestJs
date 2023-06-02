import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { UserDTO } from '../dto/UserDTO';
import { UserEntity } from './User.entities';

// @Injectable()
export class UserRepository {
  constructor(private readonly userModel: Model<UserEntity>) {}
  async create(userDto: UserDTO): Promise<UserEntity> {
    const newUser = new this.userModel(userDto);
    return newUser.save();
  }
}
