import { UserDTO } from '../dto/UserDTO';
import { UserEntity } from '../repository/User.entities';

export interface IUserService {
  create(data: UserDTO): Promise<UserEntity>;
  //findOne(_id: string): Promise<UserEntity>;
}
