import { Prop } from '@nestjs/mongoose';
export class AddressPart {
  @Prop()
  _id: string;
  @Prop()
  name: string;
}
