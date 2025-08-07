import { IsString, IsNumber, IsOptional, IsMongoId } from 'class-validator';

export class CreateInventoryDto {
  @IsString()
  readonly sku: string;

  @IsNumber()
  readonly stock_quantity: number;

  @IsMongoId()
  readonly product_id: string;

  @IsOptional()
  @IsMongoId()
  readonly location_id?: string;
}