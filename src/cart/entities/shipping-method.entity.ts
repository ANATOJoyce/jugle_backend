import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Cart } from './cart.entity';
import { ShippingMethodTaxLine } from './shipping-method-tax-line.entity';
import { ShippingMethodAdjustment } from './shipping-method-adjustment.entity';

export type ShippingMethodDocument = ShippingMethod & Document;

@Schema({
  timestamps: true,
  collection: 'cart_shipping_method' // Correspond à tableName original
})
export class ShippingMethod {
  @Prop({ required: true, unique: true })
  id: string; // Préfixe "casm" géré dans le middleware

  @Prop({ required: true })
  name: string;

  @Prop({ type: Object })
  description: Record<string, any>;

  @Prop({ type: Number, required: true, min: 0 }) // Validation pour amount >= 0
  amount: number;

  @Prop({ default: false })
  is_tax_inclusive: boolean;

  @Prop()
  shipping_option_id: string;

  @Prop({ type: Object })
  data: Record<string, any>;

  @Prop({ type: Object })
  metadata: Record<string, any>;

  @Prop({ type: Types.ObjectId, ref: 'Cart', required: true })
  cart: Cart;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'ShippingMethodTaxLine' }] })
  tax_lines: ShippingMethodTaxLine[];

  @Prop({ type: [{ type: Types.ObjectId, ref: 'ShippingMethodAdjustment' }] })
  adjustments: ShippingMethodAdjustment[];

  @Prop()
  deleted_at: Date;
}

export const ShippingMethodSchema = SchemaFactory.createForClass(ShippingMethod);

// Indexes
ShippingMethodSchema.index(
  { cart: 1 },
  {
    name: 'IDX_shipping_method_cart_id',
    partialFilterExpression: { deleted_at: { $exists: false } }
  }
);

ShippingMethodSchema.index(
  { shipping_option_id: 1 },
  {
    name: 'IDX_shipping_method_option_id',
    partialFilterExpression: {
      deleted_at: { $exists: false },
      shipping_option_id: { $exists: true }
    }
  }
);

// Middleware pour générer l'ID avec préfixe
ShippingMethodSchema.pre('save', function(next) {
  if (!this.id) {
    this.id = `casm_${Math.random().toString(36).substr(2, 9)}`;
  }
  next();
});

// Validation personnalisée pour amount >= 0
ShippingMethodSchema.path('amount').validate(function(value: number) {
  return value >= 0;
}, 'Amount must be greater than or equal to 0');