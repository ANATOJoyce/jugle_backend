// create-stock-location.dto.ts
import { IsString, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateStockLocationAddressDto } from './create-stock-location-address.dto';

export class CreateStockLocationDto {
  @IsString()
  name: string;

  @IsOptional()
  metadata?: Record<string, unknown>;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateStockLocationAddressDto)
  address?: CreateStockLocationAddressDto;
}
