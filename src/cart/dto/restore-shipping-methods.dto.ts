import { IsArray, IsOptional, IsString } from 'class-validator';

export class RestoreShippingMethodsDto {
  @IsArray()
  @IsString({ each: true })
  ids: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  returnLinkableKeys?: string[];
}
