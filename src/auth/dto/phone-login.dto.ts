import { IsPhoneNumber, IsNotEmpty } from 'class-validator';

export class PhoneLoginDto {
  @IsPhoneNumber('ZZ' as any, { // 'ZZ' pour validation internationale
    message: 'Le numéro doit être au format international (ex: +33612345678)'
  })
  @IsNotEmpty()
  phone: string;
}