// create-stock-location-address.dto.ts
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateStockLocationAddressDto {
  @IsNotEmpty()
  @IsString()
  address_1: string;

  @IsOptional()
  @IsString()
  address_2?: string;

  @IsOptional()
  @IsString()
  company?: string;

  @IsOptional()
  @IsString()
  city?: string;

  @IsNotEmpty()
  @IsString()
  country_code: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsString()
  province?: string;

  @IsOptional()
  @IsString()
  postal_code?: string;

  @IsOptional()
  metadata?: Record<string, unknown>;
}
