import { IsOptional, IsString, IsArray } from 'class-validator';

export class ListCartsFilterDTO {
  @IsOptional()
  @IsString({ each: true })
  id?: string[] | string;

  // Ajoute d’autres critères (customer_id, status, etc.)
}
