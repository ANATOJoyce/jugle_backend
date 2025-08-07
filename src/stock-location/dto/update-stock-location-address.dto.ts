// update-stock-location-address.dto.ts
import { PartialType } from '@nestjs/swagger';
import { CreateStockLocationAddressDto } from './create-stock-location-address.dto';

export class UpdateStockLocationAddressDto extends PartialType(CreateStockLocationAddressDto) {}
