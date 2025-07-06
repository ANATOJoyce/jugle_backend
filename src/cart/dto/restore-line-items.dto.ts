import { IsArray, IsString, ArrayNotEmpty } from 'class-validator';

export class RestoreLineItemsDto {
  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  ids: string[];
}