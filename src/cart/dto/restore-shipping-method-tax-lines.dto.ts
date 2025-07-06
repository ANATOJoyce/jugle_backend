import { IsArray, IsString, ArrayNotEmpty, IsOptional } from 'class-validator';

export class RestoreShippingMethodTaxLinesDto {
  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  ids: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  returnLinkableKeys?: string[];
}
