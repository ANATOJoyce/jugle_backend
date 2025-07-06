import { ApiProperty } from '@nestjs/swagger';

export class LineItemDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty({ required: false })
  subtitle?: string;

  @ApiProperty()
  quantity: number;

  @ApiProperty()
  unit_price: number;
}
