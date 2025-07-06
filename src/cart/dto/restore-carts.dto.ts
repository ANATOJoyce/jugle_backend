import { IsArray, IsOptional, IsString } from 'class-validator';

export class RestoreCartsDto {
  @IsArray()
  @IsString({ each: true })
  ids: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  returnLinkableKeys?: string[];
}
