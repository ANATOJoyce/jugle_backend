import { IsOptional, IsArray, IsNumber, IsString } from 'class-validator';

export class FindConfigDTO {
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  relations?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  select?: string[];

  @IsOptional()
  @IsNumber()
  skip?: number;

  @IsOptional()
  @IsNumber()
  take?: number;

  @IsOptional()
  order?: Record<string, 'ASC' | 'DESC'>;
}
