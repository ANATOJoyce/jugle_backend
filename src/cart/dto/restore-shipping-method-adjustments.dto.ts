import { IsArray, IsString } from 'class-validator';

export class RestoreShippingMethodAdjustmentsDto {
  @IsArray()
  @IsString({ each: true })
  ids: string[];
}