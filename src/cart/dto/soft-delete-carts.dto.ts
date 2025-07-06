import { IsArray, ArrayNotEmpty, IsString } from 'class-validator';

export class SoftDeleteCartsDto {
  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  ids: string[];
}
