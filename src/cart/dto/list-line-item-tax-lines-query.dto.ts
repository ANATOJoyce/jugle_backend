import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsOptional, IsString, IsInt, IsArray } from 'class-validator';

export class ListLineItemTaxLinesQueryDto {
  @ApiPropertyOptional({ description: 'Liste d\'ids CSV' })
  @IsOptional()
  @IsString()
  @Transform(({ value }) => value?.split(','))
  ids?: string[];

  @ApiPropertyOptional({ description: 'Relations à inclure, CSV' })
  @IsOptional()
  @IsString()
  @Transform(({ value }) => value?.split(','))
  relations?: string[];

  @ApiPropertyOptional({ description: 'Nombre de résultats à sauter' })
  @IsOptional()
  @IsInt()
  @Transform(({ value }) => parseInt(value, 10))
  skip?: number;

  @ApiPropertyOptional({ description: 'Nombre de résultats à prendre' })
  @IsOptional()
  @IsInt()
  @Transform(({ value }) => parseInt(value, 10))
  take?: number;
}
