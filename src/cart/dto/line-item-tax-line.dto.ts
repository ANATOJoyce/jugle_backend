import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import {  IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { LineItem } from "../entities/line-item.entity";

export class LineItemTaxLineDto {
  @ApiProperty({
    description: 'The unique identifier of the tax line (prefixed with "calitxl")',
    example: 'calitxl_123456',
  })
  @IsNotEmpty()
  @IsString()
  id: string;

  @ApiProperty({
    description: 'Description of the tax line',
    example: 'VAT 20%',
    required: false,
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({
    description: 'Code of the tax line',
    example: 'vat20',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  code: string;

  @ApiProperty({
    description: 'Tax rate (as decimal)',
    example: 0.2,
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  rate: number;

  @ApiProperty({
    description: 'Provider ID',
    example: 'tax_provider_123',
    required: false,
  })
  @IsOptional()
  @IsString()
  provider_id?: string;

  @ApiProperty({
    description: 'Metadata object',
    example: { key1: 'value1', key2: 'value2' },
    required: false,
  })
  @IsOptional()
  metadata?: Record<string, any>;

  @ApiProperty({
    description: 'Tax rate ID',
    example: 'tax_rate_123',
    required: false,
  })
  @IsOptional()
  @IsString()
  tax_rate_id?: string;

  @ApiProperty({
    description: 'ID of the associated line item',
    example: 'cali_123456',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  item: LineItem;

  @ApiProperty({
    description: 'Deletion date if soft-deleted',
    example: '2023-01-01T00:00:00.000Z',
    required: false,
  })
  @IsOptional()
  @Type(() => Date)
  deleted_at?: Date;

  @ApiProperty({ required: false })
  createAt?: Date;
}


