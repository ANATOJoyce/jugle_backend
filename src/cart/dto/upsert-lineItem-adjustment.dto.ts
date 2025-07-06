import { IsOptional, IsString, IsNumber, Min } from 'class-validator';

export class UpsertLineItemAdjustmentDTO {
  @IsOptional()
  @IsString()
  id?: string; // optionnel pour création

  @IsString()
  item_id: string; // id de la line item

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  code?: string;

  @IsNumber()
  @Min(0)
  amount: number;

  @IsOptional()
  @IsString()
  provider_id?: string;

  @IsOptional()
  @IsString()
  promotion_id?: string;

  @IsOptional()
  metadata?: Record<string, any>;
}
