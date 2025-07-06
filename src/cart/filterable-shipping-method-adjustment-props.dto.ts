import { IsOptional, IsString, IsArray } from 'class-validator';
import { Type, Transform } from 'class-transformer';

export class FilterableShippingMethodAdjustmentProps {
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @Transform(({ value }) => {
    // Permet de recevoir soit un string soit un array
    if (typeof value === 'string') {
      return value.split(',');
    }
    return value;
  })
  id?: string[];

  @IsOptional()
  @IsString()
  code?: string;

  @IsOptional()
  @IsString()
  provider_id?: string;

  @IsOptional()
  @IsString()
  shipping_method_id?: string;
}