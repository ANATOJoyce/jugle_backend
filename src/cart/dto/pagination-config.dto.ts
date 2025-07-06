import { IsOptional, IsNumber } from 'class-validator';

export class PaginationConfigDTO {
  @IsOptional()
  @IsNumber()
  skip?: number;

  @IsOptional()
  @IsNumber()
  take?: number;
}
