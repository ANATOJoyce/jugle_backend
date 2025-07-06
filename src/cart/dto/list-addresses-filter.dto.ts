import { IsOptional, IsString, IsArray } from 'class-validator';

export class ListAddressesFilterDTO {
  @IsOptional()
  @IsString({ each: true })
  id?: string[] | string;

  // Ajoute d’autres filtres ici si nécessaire
}
