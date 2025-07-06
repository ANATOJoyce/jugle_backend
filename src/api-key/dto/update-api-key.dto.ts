import { IsOptional, IsString } from 'class-validator';

export class UpdateApiKeyDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  revoked_by?: string;
}
