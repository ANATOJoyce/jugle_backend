import { IsArray, IsString } from 'class-validator';

export class SoftDeleteAddressesDTO {
  @IsArray()
  @IsString({ each: true })
  ids: string[];
}