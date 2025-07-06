import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateLineItemTaxLineDto {
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
    required: false,
  })
  @IsOptional()
  @IsString()
  code?: string;

  @ApiProperty({
    description: 'Tax rate (as decimal)',
    example: 0.2,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  rate?: number;

  // ... include other fields as needed for update
}