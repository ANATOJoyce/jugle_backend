// dtos/type/update-product-type.dto.ts
import { IsOptional, IsString } from 'class-validator';

export class UpdateProductTypeDto {
  @IsOptional()
  @IsString()
  name?: string;
}
