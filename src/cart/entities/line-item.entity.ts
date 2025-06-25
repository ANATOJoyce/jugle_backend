import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Cart } from './cart.entity';
import { LineItemAdjustment } from './line-item-adjustment.entity';
import { LineItemTaxLine } from './line-item-tax-line.entity';

export type LineItemDocument = LineItem & Document;

@Schema({
  timestamps: true,
  collection: 'cart_line_item' // Matching original tableName
})
export class LineItem {
  @Prop({ required: true, unique: true })
  id: string; // Will be prefixed with "cali"

  @Prop({ required: true })
  title: string;

  @Prop()
  subtitle: string;

  @Prop()
  thumbnail: string;

  @Prop({ required: true })
  quantity: number;

  @Prop()
  variant_id: string;

  @Prop()
  product_id: string;

  @Prop()
  product_title: string;

  @Prop()
  product_description: string;

  @Prop()
  product_subtitle: string;

  @Prop()
  product_type: string;

  @Prop()
  product_type_id: string;

  @Prop()
  product_collection: string;

  @Prop()
  product_handle: string;

  @Prop()
  variant_sku: string;

  @Prop()
  variant_barcode: string;

  @Prop()
  variant_title: string;

  @Prop({ type: Object })
  variant_option_values: Record<string, any>;

  @Prop({ default: true })
  requires_shipping: boolean;

  @Prop({ default: true })
  is_discountable: boolean;

  @Prop({ default: false })
  is_giftcard: boolean;

  @Prop({ default: false })
  is_tax_inclusive: boolean;

  @Prop({ default: false })
  is_custom_price: boolean;

  @Prop({ type: Number })
  compare_at_unit_price: number;

  @Prop({ type: Number, required: true })
  unit_price: number;

  @Prop({ type: Object })
  metadata: Record<string, any>;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'LineItemAdjustment' }] })
  adjustments: LineItemAdjustment[];

  @Prop({ type: [{ type: Types.ObjectId, ref: 'LineItemTaxLine' }] })
  tax_lines: LineItemTaxLine[];

  @Prop({ type: Types.ObjectId, ref: 'Cart', required: true })
  cart: Cart;

  @Prop()
  deleted_at: Date;
}

export const LineItemSchema = SchemaFactory.createForClass(LineItem);

// Indexes
LineItemSchema.index(
  { cart: 1 },
  {
    name: 'IDX_line_item_cart_id',
    partialFilterExpression: { deleted_at: { $exists: false } }
  }
);

LineItemSchema.index(
  { variant_id: 1 },
  {
    name: 'IDX_line_item_variant_id',
    partialFilterExpression: {
      deleted_at: { $exists: false },
      variant_id: { $exists: true }
    }
  }
);

LineItemSchema.index(
  { product_id: 1 },
  {
    name: 'IDX_line_item_product_id',
    partialFilterExpression: {
      deleted_at: { $exists: false },
      product_id: { $exists: true }
    }
  }
);

LineItemSchema.index(
  { product_type_id: 1 },
  {
    name: 'IDX_line_item_product_type_id',
    partialFilterExpression: {
      deleted_at: { $exists: false },
      product_type_id: { $exists: true }
    }
  }
);

// Middleware for ID generation and cascade delete
LineItemSchema.pre('save', function(next) {
  if (!this.id) {
    this.id = `cali_${Math.random().toString(36).substring(2, 11)}`;
  }
  next();
});

LineItemSchema.pre('deleteOne', { document: true, query: false }, async function(next) {
  const lineItem = this as LineItemDocument;
  
  // Cascade delete adjustments and tax lines
  await this.model('LineItemAdjustment').deleteMany({ _id: { $in: lineItem.adjustments } });
  await this.model('LineItemTaxLine').deleteMany({ _id: { $in: lineItem.tax_lines } });
  
  next();
});