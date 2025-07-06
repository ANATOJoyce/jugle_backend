import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength, Matches } from 'class-validator';

export class CreateUserDto {
  @IsOptional()
  @IsString()
  userId?: string;

  @IsOptional()
  @IsString()
  first_name?: string;

  @IsOptional()
  @IsString()
  last_name?: string;

  @IsEmail({}, { message: 'Email invalide' })
  email: string;

  @IsNotEmpty({ message: 'Le mot de passe est requis' })
  @MinLength(6, { message: 'Le mot de passe doit contenir au moins 6 caractères' })
  password: string;

  @IsOptional()
  @IsString()
  avatar_url?: string;

  @IsOptional()
  metadata?: Record<string, unknown>;

  @IsOptional()
  @Matches(/^\+?[0-9]{7,15}$/, {
    message: 'Numéro de téléphone invalide',
  })
  phone?: string; // <-- Champ ajouté pour le numéro de téléphone
}
