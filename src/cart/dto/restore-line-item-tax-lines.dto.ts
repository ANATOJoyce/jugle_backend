import { IsArray, IsString, ArrayNotEmpty } from 'class-validator';

export class RestoreLineItemTaxLinesDto {
  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  ids: string[];
}
