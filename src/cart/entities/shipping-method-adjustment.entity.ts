import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { ShippingMethod } from './shipping-method.entity';

export type ShippingMethodAdjustmentDocument = ShippingMethodAdjustment & Document;

@Schema({
  timestamps: true,
  collection: 'cart_shipping_method_adjustment' // Correspond au tableName original
})
export class ShippingMethodAdjustment {
  @Prop({ required: true, unique: true })
  id: string; // Préfixe "casmadj" sera généré automatiquement

  @Prop()
  description: string;

  @Prop()
  code: string;

  @Prop({ type: Number, required: true })
  amount: number; // bigNumber() devient Number

  @Prop()
  provider_id: string;

  @Prop({ type: Object })
  metadata: Record<string, any>;

  @Prop()
  promotion_id: string;

  @Prop({ type: Types.ObjectId, ref: 'ShippingMethod', required: true })
  shipping_method: ShippingMethod;

  @Prop()
  deleted_at: Date;
}

export const ShippingMethodAdjustmentSchema = SchemaFactory.createForClass(ShippingMethodAdjustment);

// Indexes
ShippingMethodAdjustmentSchema.index(
  { promotion_id: 1 },
  {
    name: 'IDX_shipping_method_adjustment_promotion_id',
    partialFilterExpression: {
      deleted_at: { $exists: false },
      promotion_id: { $exists: true }
    }
  }
);

ShippingMethodAdjustmentSchema.index(
  { shipping_method: 1 },
  {
    name: 'IDX_adjustment_shipping_method_id',
    partialFilterExpression: { deleted_at: { $exists: false } }
  }
);

// Middleware pour générer l'ID avec préfixe
ShippingMethodAdjustmentSchema.pre('save', function(next) {
  if (!this.id) {
    this.id = `casmadj_${Math.random().toString(36).substring(2, 11)}`;
  }
  next();
});