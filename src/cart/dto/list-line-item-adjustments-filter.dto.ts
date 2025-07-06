import { IsOptional, IsString, IsArray } from 'class-validator';

export class ListLineItemAdjustmentsFilterDTO {
  @IsOptional()
  @IsString({ each: true })
  id?: string[] | string;

  // Ajoute d’autres filtres spécifiques si besoin
}
