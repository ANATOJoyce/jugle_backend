import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { LineItemTaxLineDto } from "./line-item-tax-line.dto";
import { CartDTO } from "./cart.dto";

export class CartLineItemDTO {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty({ required: false })
  subtitle?: string;

  @ApiProperty({ required: false })
  thumbnail?: string;

  @ApiProperty()
  quantity: number;

  @ApiProperty({ required: false })
  variant_id?: string;

  @ApiProperty({ required: false })
  product_id?: string;

  @ApiProperty()
  unit_price: number;

  @ApiProperty({ required: false })
  metadata?: Record<string, any>;

  @ApiProperty({ type: () => [LineItemTaxLineDto], required: false })
  @Type(() => LineItemTaxLineDto)
  tax_lines?: LineItemTaxLineDto[];

  @ApiProperty({ type: () => CartDTO, required: false })
  @Type(() => CartDTO)
  cart?: CartDTO;
}
