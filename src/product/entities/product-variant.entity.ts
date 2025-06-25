import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Product } from './product.entity';
import { ProductOptionValue } from './product-option-value.entity';

@Schema({ timestamps: true })
export class ProductVariant extends Document {
  @Prop({ required: true, index: true })
  title: string;

  @Prop({ index: true, unique: true, sparse: true })
  sku?: string;

  @Prop({ index: true, unique: true, sparse: true })
  barcode?: string;

  @Prop({ index: true, unique: true, sparse: true })
  ean?: string;

  @Prop({ index: true, unique: true, sparse: true })
  upc?: string;

  @Prop({ default: false })
  allow_backorder: boolean;

  @Prop({ default: true })
  manage_inventory: boolean;

  @Prop()
  hs_code?: string;

  @Prop()
  origin_country?: string;

  @Prop()
  mid_code?: string;

  @Prop()
  material?: string;

  @Prop()
  weight?: number;

  @Prop()
  length?: number;

  @Prop()
  height?: number;

  @Prop()
  width?: number;

  @Prop({ type: Object })
  metadata?: Record<string, any>;

  @Prop({ default: 0 })
  variant_rank?: number;

  @Prop({ type: Types.ObjectId, ref: 'Product', index: true })
  product?: Product;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'ProductOptionValue' }] })
  options: ProductOptionValue[];
}

export const ProductVariantSchema = SchemaFactory.createForClass(ProductVariant);

// Create indexes with partial filter for soft delete
ProductVariantSchema.index(
  { _id: 1, product: 1 },
  {
    name: "IDX_product_variant_id_product_id",
    partialFilterExpression: { deletedAt: { $eq: null } }
  }
);

ProductVariantSchema.index(
  { product: 1 },
  {
    name: "IDX_product_variant_product_id",
    partialFilterExpression: { deletedAt: { $eq: null } }
  }
);

// Unique indexes with sparse option for nullable fields
['sku', 'barcode', 'ean', 'upc'].forEach(field => {
  ProductVariantSchema.index(
    { [field]: 1 },
    {
      name: `IDX_product_variant_${field}_unique`,
      unique: true,
      partialFilterExpression: { 
        [field]: { $exists: true, $ne: null },
        deletedAt: { $eq: null }
      },
      sparse: true
    }
  );
});