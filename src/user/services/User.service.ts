import { IUserService } from './../interfaces/UserService.interface';
import { BadRequestException, Injectable } from '@nestjs/common';
import { UserDTO } from '../dto/UserDTO';
import { UserEntity } from '../repository/User.entities';
import { UserRepository } from '../repository/User.repository';

@Injectable()
export class UserService implements IUserService {
  constructor(private readonly userRepository: UserRepository) {}
  async create(
    userDto: UserDTO,
    //options?: IDatabaseCreateOptions,
  ): Promise<UserEntity> {
    const { phone } = userDto;

    // const checkPhoneDuplicate = [...new Set(phone)];
    // if (checkPhoneDuplicate.length !== phone.length) {
    //   throw new BadRequestException({
    //     statusCode: 500,
    //     message: 'số ádasdasd',
    //   });
    // }

    // const phoneExist = await this.userRepository.findOne({
    //   phone: { $in: phone },
    //   career: career,
    // });

    // if (phoneExist) {
    //   throw new BadRequestException({
    //     statusCode: ENUM_ERROR_STATUS_CODE_ERROR.BAD_REQUEST,
    //     message: 'customers.error.checkListPhoneSystem',
    //   });
    // }

    // const address = addressParts.join(', ');
    return this.userRepository.create({
      ...userDto,
    });
  }
}
