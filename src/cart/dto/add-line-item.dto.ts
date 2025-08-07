// src/cart/dto/add-line-item.dto.ts
import { IsString, IsNumber, IsOptional } from 'class-validator';

export class AddLineItemDto {
  @IsString()
  cart_id: string;

  @IsString()
  variant_id: string;

  @IsNumber()
  quantity: number;

  @IsOptional()
  metadata?: Record<string, any>;
}
