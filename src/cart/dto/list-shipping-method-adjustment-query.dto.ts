import { IsNumber, IsOptional, IsString } from "class-validator";

export class ListShippingMethodAdjustmentQueryDto {
  @IsOptional()
  @IsString()
  ids?: string; // CSV dans la requête, sera split dans le contrôleur

  @IsOptional()
  @IsString()
  code?: string;

  @IsOptional()
  @IsString()
  provider_id?: string;

  @IsOptional()
  @IsString()
  shipping_method_id?: string;

  @IsOptional()
  @IsNumber()
  skip?: number;

  @IsOptional()
  @IsNumber()
  take?: number;

  @IsOptional()
  @IsString()
  relations?: string;
}
