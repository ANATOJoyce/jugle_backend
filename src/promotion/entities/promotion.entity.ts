import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Product } from '../../product/entities/product.entity';

export type PromotionDocument = Promotion & Document;

@Schema({ timestamps: true })
export class Promotion {
  @Prop({ required: true, unique: true })
  code: string;

  @Prop({ required: true })
  discount_type: string; // 'percentage' | 'fixed'

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Product' }], default: [] })
  products: Product[];
}

export const PromotionSchema = SchemaFactory.createForClass(Promotion);