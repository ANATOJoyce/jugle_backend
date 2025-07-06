// dtos/tag/create-product-tag.dto.ts
import { IsString } from 'class-validator';

export class CreateProductTagDto {
  @IsString()
  name: string;
}
