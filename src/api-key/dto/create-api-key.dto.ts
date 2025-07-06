// src/api-key/dto/create-api-key.dto.ts

import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateApiKeyDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsEnum(['publishable', 'secret'])
  type: 'publishable' | 'secret';

  @IsString()
  @IsNotEmpty()
  created_by: string;
}
