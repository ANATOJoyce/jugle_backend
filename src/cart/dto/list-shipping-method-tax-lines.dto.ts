import { IsOptional, IsString, IsArray, IsNumber, IsMongoId } from 'class-validator';
import { Type } from 'class-transformer';

export class ListShippingMethodTaxLinesQueryDto {
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  ids?: string[];

  @IsOptional()
  @IsString()
  code?: string;

  @IsOptional()
  @IsString()
  provider_id?: string;

  @IsOptional()
  @IsMongoId()
  shipping_method_id?: string;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  skip?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  take?: number;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  relations?: string[];
}
