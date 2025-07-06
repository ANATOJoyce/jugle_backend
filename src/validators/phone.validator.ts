import { registerDecorator, ValidationOptions } from 'class-validator';
import { parsePhoneNumber } from 'libphonenumber-js';

export function IsValidPhone(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isValidPhone',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any) {
          try {
            const phoneNumber = parsePhoneNumber(value);
            return phoneNumber.isValid();
          } catch (e) {
            return false;
          }
        },
        defaultMessage() {
          return 'Numéro de téléphone invalide';
        }
      }
    });
  };
}