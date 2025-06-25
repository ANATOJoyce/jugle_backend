import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { OrderLineItemAdjustment } from './line-item-adjustment.entity';
import { OrderLineItemTaxLine } from './line-item-tax-line.entity';

@Schema({
  timestamps: true,
  collection: 'order_line_items',
  autoIndex: true,
  toJSON: {
    transform: (doc, ret) => {
      ret.id = `ordli_${doc._id.toString()}`;
      delete ret._id;
      delete ret.__v;
      return ret;
    },
  }
})
export class OrderLineItem extends Document {
  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: String, default: null })
  subtitle: string | null;

  @Prop({ type: String, default: null })
  thumbnail: string | null;

  @Prop({ type: String, default: null, index: true })
  variant_id: string | null;

  @Prop({ type: String, default: null, index: true })
  product_id: string | null;

  @Prop({ type: String, default: null })
  product_title: string | null;

  @Prop({ type: String, default: null })
  product_description: string | null;

  @Prop({ type: String, default: null })
  product_subtitle: string | null;

  @Prop({ type: String, default: null })
  product_type: string | null;

  @Prop({ type: String, default: null, index: true })
  product_type_id: string | null;

  @Prop({ type: String, default: null })
  product_collection: string | null;

  @Prop({ type: String, default: null })
  product_handle: string | null;

  @Prop({ type: String, default: null })
  variant_sku: string | null;

  @Prop({ type: String, default: null })
  variant_barcode: string | null;

  @Prop({ type: String, default: null })
  variant_title: string | null;

  @Prop({ type: Object, default: null })
  variant_option_values: Record<string, any> | null;

  @Prop({ type: Boolean, default: true })
  requires_shipping: boolean;

  @Prop({ type: Boolean, default: false })
  is_giftcard: boolean;

  @Prop({ type: Boolean, default: true })
  is_discountable: boolean;

  @Prop({ type: Boolean, default: false })
  is_tax_inclusive: boolean;

  @Prop({ type: String, default: null })
  compare_at_unit_price: string | null;

  @Prop({ type: String, default: null })
  unit_price: string | null;

  @Prop({ type: Boolean, default: false })
  is_custom_price: boolean;

  @Prop({ type: Object, default: null })
  metadata: Record<string, any> | null;

  @Prop({ 
    type: [{ type: Types.ObjectId, ref: 'OrderLineItemTaxLine' }],
    default: [] 
  })
  tax_lines: Types.ObjectId[] | OrderLineItemTaxLine[];

  @Prop({ 
    type: [{ type: Types.ObjectId, ref: 'OrderLineItemAdjustment' }],
    default: [] 
  })
  adjustments: Types.ObjectId[] | OrderLineItemAdjustment[];

  @Prop({ type: Date, default: null })
  deleted_at: Date | null;
}

export const OrderLineItemSchema = SchemaFactory.createForClass(OrderLineItem);

// Configuration des index
OrderLineItemSchema.index(
  { deleted_at: 1 },
  { 
    name: 'IDX_order_line_item_deleted_at',
    partialFilterExpression: { deleted_at: { $ne: null } }
  }
);

OrderLineItemSchema.index(
  { product_id: 1 },
  { 
    name: 'IDX_order_line_item_product_id',
    partialFilterExpression: { deleted_at: { $ne: null } }
  }
);

OrderLineItemSchema.index(
  { product_type_id: 1 },
  { 
    name: 'IDX_line_item_product_type_id',
    partialFilterExpression: { 
      product_type_id: { $ne: null },
      deleted_at: { $ne: null } 
    }
  }
);

OrderLineItemSchema.index(
  { variant_id: 1 },
  { 
    name: 'IDX_order_line_item_variant_id',
    partialFilterExpression: { deleted_at: { $ne: null } }
  }
);
/*
// Middleware pour la suppression en cascade
OrderLineItemSchema.pre('deleteOne', async function() {
  const itemId = this.getFilter()._id;
  
  // Suppression des tax_lines liées
  await this.model('OrderLineItemTaxLine').deleteMany({ item: itemId });
  
  // Suppression des adjustments liés
  await this.model('OrderLineItemAdjustment').deleteMany({ item: itemId });
});

// Middleware pour gérer la relation inverse avec OrderLineItemTaxLine
OrderLineItemSchema.post('save', async function(doc) {
  // Mise à jour des tax_lines si nécessaire
  if (doc.tax_lines && doc.tax_lines.length > 0) {
    await this.model('OrderLineItemTaxLine').updateMany(
      { _id: { $in: doc.tax_lines } },
      { $set: { item: doc._id } }
    );
  }
});

// Middleware pour gérer la relation inverse avec OrderLineItemAdjustment
OrderLineItemSchema.post('save', async function(doc) {
  // Mise à jour des adjustments si nécessaire
  if (doc.adjustments && doc.adjustments.length > 0) {
    await this.model('OrderLineItemAdjustment').updateMany(
      { _id: { $in: doc.adjustments } },
      { $set: { item: doc._id } }
    );
  }
});*/