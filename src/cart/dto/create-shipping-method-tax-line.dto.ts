import { IsOptional, IsString, IsNumber, IsObject } from 'class-validator';

export class CreateShippingMethodTaxLineDTO {
  @IsOptional()
  @IsString()
  id?: string; // facultatif pour updates

  @IsOptional()
  @IsString()
  description?: string;

  @IsString()
  code: string;

  @IsNumber()
  rate: number;

  @IsOptional()
  @IsString()
  provider_id?: string;

  @IsOptional()
  @IsString()
  tax_rate_id?: string;

  @IsOptional()
  @IsObject()
  metadata?: Record<string, any>;

  @IsString()
  shipping_method_id: string; // correspond à Types.ObjectId en string

  @IsOptional()
  deleted_at?: Date;
}
