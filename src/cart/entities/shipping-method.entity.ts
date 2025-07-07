import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { BaseShippingMethod } from '../types';

@Schema({
  timestamps: true,
  collection: 'cart_shipping_method',
  toObject: { virtuals: true },
  toJSON: { virtuals: true }
})

export class ShippingMethod {
  @Prop({
    required: true,
    unique: true,
    default: () => `casm_${new Types.ObjectId().toHexString()}`
  })
  _id: Types.ObjectId;

  @Prop({ required: true })
  name: string;

  @Prop({ type: Object })
  description: Record<string, any>;

  @Prop({ type: Number, required: true, min: 0 })
  amount: number;

  @Prop({ default: false })
  is_tax_inclusive: boolean;

  @Prop()
  shipping_option_id: string;

  @Prop({ type: Object })
  metadata: Record<string, any>;

  @Prop({ type: Types.ObjectId, ref: 'Cart', required: true })
  cart: Types.ObjectId;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'ShippingMethodTaxLine' }] })
  tax_lines: Types.ObjectId[];

  @Prop()
  deleted_at: Date;

  
}

export type ShippingMethodDocument = ShippingMethod & Document;


export const ShippingMethodSchema = SchemaFactory.createForClass(ShippingMethod);

// Indexes
ShippingMethodSchema.index(
  { cart: 1 },
  { name: 'cart_index', partialFilterExpression: { deleted_at: { $exists: false } } }
);

// Middleware pour validation supplémentaire
ShippingMethodSchema.pre('save', function(next) {
  if (this.amount < 0) {
    throw new Error('Amount cannot be negative');
  }
  next();
});