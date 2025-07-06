import { IsArray, IsString, ArrayNotEmpty } from 'class-validator';

export class RestoreLineItemAdjustmentsDto {
  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  ids: string[];
}
