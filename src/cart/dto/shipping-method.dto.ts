import { IsString, IsNumber, IsOptional, IsMongoId } from 'class-validator';
import { ShippingMethod } from '../entities/shipping-method.entity';

export class CreateShippingMethodTaxLineDTO {
  @IsString()
  code: string;

  @IsNumber()
  rate: number;

  @IsMongoId()
  shipping_method_id: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  provider_id?: string;
}

export type ShippingMethodDocument = ShippingMethod & Document;

export class ShippingMethodTaxLineResponseDTO {
  id: string;
  code: string;
  rate: number;
  shipping_method: {
    id: string;
    name: string;
  };
}