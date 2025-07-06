import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

// Utilisez une interface pour éviter les imports circulaires
export type ShippingMethodAdjustmentDocument = ShippingMethodAdjustment & Document;

@Schema({
  timestamps: true,
  collection: 'cart_shipping_method_adjustments', // Nom plus standard
  autoIndex: true // Pour les environnements de développement
})
export class ShippingMethodAdjustment {
  @Prop({
    type: String,
    required: true,
    unique: true,
    default: () => `casmadj_${uuidv4()}`
  })
  id: string;

  @Prop({ type: String })
  description?: string;

  @Prop({ type: String })
  code?: string;

  @Prop({ 
    type: Number,
    required: true,
    min: 0 // Validation supplémentaire
  })
  amount: number;

  @Prop({ type: String })
  provider_id?: string;

  @Prop({ type: Object })
  metadata?: Record<string, any>;

  @Prop({ type: String })
  promotion_id?: string;

  @Prop({ 
    type: Types.ObjectId, 
    ref: 'ShippingMethod', 
    required: true,
    index: true 
  })
  shipping_method: Types.ObjectId; // Utilisez ObjectId au lieu de l'entité

  @Prop({ type: Date, default: null })
  deleted_at?: Date | null;
}

export const ShippingMethodAdjustmentSchema = SchemaFactory.createForClass(ShippingMethodAdjustment);

// Index composé pour les requêtes fréquentes
ShippingMethodAdjustmentSchema.index(
  { 
    shipping_method: 1,
    deleted_at: 1 
  },
  { 
    name: 'IDX_shipping_method_active_adjustments',
    partialFilterExpression: { deleted_at: null } 
  }
);

// Index pour les promotions
ShippingMethodAdjustmentSchema.index(
  { 
    promotion_id: 1,
    deleted_at: 1 
  },
  {
    name: 'IDX_promotion_active_adjustments',
    partialFilterExpression: { 
      deleted_at: null,
      promotion_id: { $exists: true } 
    }
  }
);