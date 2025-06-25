import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { ShippingMethod } from './shipping-method.entity';

export type ShippingMethodTaxLineDocument = ShippingMethodTaxLine & Document;

@Schema({
  timestamps: true,
  collection: 'cart_shipping_method_tax_line' // Conservation du nom de table original
})
export class ShippingMethodTaxLine {
  @Prop({ required: true, unique: true })
  id: string; // Préfixe "casmtxl" généré automatiquement

  @Prop()
  description: string;

  @Prop({ required: true })
  code: string;

  @Prop({ type: Number, required: true })
  rate: number; // float() devient Number

  @Prop()
  provider_id: string;

  @Prop()
  tax_rate_id: string;

  @Prop({ type: Object })
  metadata: Record<string, any>;

  @Prop({ type: Types.ObjectId, ref: 'ShippingMethod', required: true })
  shipping_method: ShippingMethod;

  @Prop()
  deleted_at: Date;
}

export const ShippingMethodTaxLineSchema = SchemaFactory.createForClass(ShippingMethodTaxLine);

// Indexes
ShippingMethodTaxLineSchema.index(
  { shipping_method: 1 },
  {
    name: 'IDX_tax_line_shipping_method_id',
    partialFilterExpression: { deleted_at: { $exists: false } }
  }
);

ShippingMethodTaxLineSchema.index(
  { tax_rate_id: 1 },
  {
    name: 'IDX_shipping_method_tax_line_tax_rate_id',
    partialFilterExpression: {
      deleted_at: { $exists: false },
      tax_rate_id: { $exists: true }
    }
  }
);

// Middleware pour générer l'ID avec préfixe
ShippingMethodTaxLineSchema.pre('save', function(next) {
  if (!this.id) {
    this.id = `casmtxl_${Math.random().toString(36).substring(2, 11)}`;
  }
  next();
});