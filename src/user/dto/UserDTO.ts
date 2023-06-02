import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDateString,
  IsEnum,
  IsNumber,
  IsNotEmpty,
  IsOptional,
  ValidateNested,
  IsArray,
  ArrayMaxSize,
  ArrayMinSize,
  Matches,
  IsEmail,
  IsString,
} from 'class-validator';
import {
  CheckPassword,
  CheckRangeValue,
  Range,
} from 'src/utilities/UserUtilities';
import { GENDER_ENUM, LEVEL_ENUM } from '../constants/User.constants';
import { AddressPart } from 'src/entities/Address.entity';
import { Types } from 'mongoose';

export class UserDTO {
  @ApiProperty({
    description: 'username example',
    required: true,
    examples: ['nv2101'],
  })
  @IsNotEmpty()
  username: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @CheckPassword()
  password: string;

  @ApiProperty({ enum: GENDER_ENUM })
  @IsEnum({ GENDER_ENUM })
  @IsOptional()
  gender: GENDER_ENUM;

  @ApiProperty()
  avatar: Types.ObjectId;

  @ApiProperty({ enum: LEVEL_ENUM })
  @IsOptional()
  @IsEnum({ LEVEL_ENUM })
  level: LEVEL_ENUM;

  @ApiProperty({})
  @IsEmail()
  @IsOptional()
  email: string;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  @IsArray()
  @Matches(/^(0)(3[2-9]|5[2689]|7[0|6-9]|8[1-9]|9[0-9])[0-9]{7}$/, {
    each: true,
  })
  @ArrayMaxSize(5)
  @ArrayMinSize(1)
  phone: string[];

  //   @ApiProperty()
  //   @IsOptional()
  //   @ValidateNested()
  //   @Type(() => Range)
  //   @CheckRangeValue()
  //   @IsNumber()
  //   price: Range;

  //   @ApiProperty({})
  //   @IsNotEmpty()
  //   country: AddressPart;

  //   @ApiProperty({})
  //   @IsNotEmpty()
  //   province: AddressPart;

  //   @ApiProperty({})
  //   @IsNotEmpty()
  //   district: AddressPart;

  //   @ApiProperty({})
  //   @IsOptional()
  //   ward: AddressPart;

  //   @ApiProperty({})
  //   @IsOptional()
  //   street: AddressPart;

  //   @ApiProperty({})
  //   @IsString()
  //   @IsOptional()
  //   houseNumber: string;

  //   @ApiProperty()
  //   @IsDateString()
  //   dateOfBirth: string;
}
