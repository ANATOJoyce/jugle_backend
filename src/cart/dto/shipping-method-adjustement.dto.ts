import { IsString, IsNumber, IsOptional, IsObject, Min, IsNotEmpty } from 'class-validator';

export class CreateShippingMethodAdjustmentDTO {
  @IsString()
  @IsNotEmpty()
  shipping_method_id: string; // Pour référencer l’ID du shipping method

  @IsString()
  @IsNotEmpty()
  code: string;

  @IsNumber()
  @Min(0)
  amount: number;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  provider_id?: string;

  @IsOptional()
  @IsString()
  promotion_id?: string;

  @IsOptional()
  @IsObject()
  metadata?: Record<string, any>;
}
