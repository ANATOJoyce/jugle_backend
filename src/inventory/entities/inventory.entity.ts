import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Product } from '../../product/entities/product.entity';
import { StockLocation } from '../../stock-location/entities/stock-location.entity';

export type InventoryDocument = Inventory & Document;

@Schema({ timestamps: true })
export class Inventory {
  @Prop({ required: true, unique: true })
  sku: string;

  @Prop({ required: true })
  stock_quantity: number;

  @Prop({ type: Types.ObjectId, ref: 'Product', required: true })
  product: Product;

  @Prop({ type: Types.ObjectId, ref: 'StockLocation' })
  location: StockLocation;
}

export const InventorySchema = SchemaFactory.createForClass(Inventory);