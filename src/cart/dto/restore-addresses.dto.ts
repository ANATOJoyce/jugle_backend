import { IsArray, IsString, ArrayNotEmpty } from 'class-validator';

export class RestoreAddressesDTO {
  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  ids: string[];
}
