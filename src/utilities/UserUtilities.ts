import {
  IsNumber,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
  ValidationOptions,
  registerDecorator,
} from 'class-validator';
import { isNumber } from 'lodash';

export class Range {
  @IsNumber()
  from: number;

  @IsNumber()
  to: number;
}

@ValidatorConstraint({ name: 'CheckRangeValue', async: false })
export class CheckRangeValueContraint implements ValidatorConstraintInterface {
  validate(value: any): boolean | Promise<boolean> {
    if (!isNumber(value.from) || !isNumber(value.to)) {
      return false;
    }
    return value.form < value.to;
  }
  defaultMessage(): string {
    return 'The "from" value must be less than the "to" value';
  }
}

export function CheckRangeValue(validationOption?: ValidationOptions) {
  return function (object: Record<string, any>, propertyName: string) {
    registerDecorator({
      name: 'CheckRangeValue',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOption,
      validator: CheckRangeValueContraint,
    });
  };
}

@ValidatorConstraint({ name: 'CheckPassword', async: false })
export class CheckValidationPasswordContraint
  implements ValidatorConstraintInterface
{
  validate(value: any): boolean | Promise<boolean> {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(.{8,})$/;
    if (!passwordRegex.test(value)) {
      return false;
    }
    return true;
  }
  defaultMessage(): string {
    return 'the password not valid format!';
  }
}
export function CheckPassword(validationOption?: ValidationOptions) {
  return function (object: Record<string, any>, propertyName: string) {
    registerDecorator({
      name: 'CheckPassword',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOption,
      validator: CheckValidationPasswordContraint,
    });
  };
}
