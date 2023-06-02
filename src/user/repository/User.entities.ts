import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { GENDER_ENUM, LEVEL_ENUM } from '../constants/User.constants';
import { Types } from 'mongoose';

export const UserDatabaseName = 'user';
//@DatabaseEntity({ collection: CustomersDatabaseName, timestamps: true })
export class UserEntity {
  @Prop({ type: String, required: true })
  username: string;

  @Prop({ type: String, required: true })
  password: string;

  @Prop({ enum: GENDER_ENUM })
  gender: GENDER_ENUM;

  @Prop({ enum: LEVEL_ENUM })
  level: LEVEL_ENUM;

  @Prop()
  avatar: Types.ObjectId;

  @Prop()
  email: string;

  @Prop()
  phone: string[];

  //   @Prop()
  //   country: string;
}
export const UserSchema = SchemaFactory.createForClass(UserEntity);
