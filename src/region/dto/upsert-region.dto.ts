import { IsOptional, IsString, IsBoolean } from 'class-validator';

export class UpsertRegionDto {
  @IsOptional()
  id?: string; // si présent => update, sinon create

  @IsString()
  name: string;

  @IsString()
  currency_code: string;

  @IsBoolean()
  @IsOptional()
  automatic_taxes?: boolean;

  @IsOptional()
  metadata?: Record<string, any>;
}