
import { IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { UpdateStockLocationAddressDto } from './update-stock-location-address.dto';

export class UpdateStockLocationDto {
  @IsOptional()
  name?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => UpdateStockLocationAddressDto)
  address?: UpdateStockLocationAddressDto;
}
