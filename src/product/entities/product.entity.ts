import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { ProductVariant } from './product-variant.entity';
import { ProductType } from './product-type.entity';
import { ProductTag } from './product-tag.entity';
import { ProductOption } from './product-option.entity';
import { ProductImage } from './product-image.entity';
import { ProductCollection } from './product-collection.entity';
import { ProductCategory } from './product-category.entity';

export enum ProductStatus {
  DRAFT = 'draft',
  PROPOSED = 'proposed',
  PUBLISHED = 'published',
  REJECTED = 'rejected',
}

@Schema({ timestamps: true })
export class Product extends Document {
  @Prop({ type: String, required: true, index: true })
  title: string;

  @Prop({ type: String, required: true, unique: true })
  handle: string;

  @Prop({ type: String })
  subtitle: string;

  @Prop({ type: String })
  description: string;

  @Prop({ type: Boolean, default: false })
  is_giftcard: boolean;

  @Prop({
    type: String,
    enum: Object.values(ProductStatus),
    default: ProductStatus.DRAFT,
  })
  status: ProductStatus;

  @Prop({ type: String })
  thumbnail: string;

  @Prop({ type: Number })
  weight: number;

  @Prop({ type: Number })
  length: number;

  @Prop({ type: Number })
  height: number;

  @Prop({ type: Number })
  width: number;

  @Prop({ type: String })
  origin_country: string;

  @Prop({ type: String })
  hs_code: string;

  @Prop({ type: String })
  mid_code: string;

  @Prop({ type: String })
  material: string;

  @Prop({ type: Boolean, default: true })
  discountable: boolean;

  @Prop({ type: String })
  external_id: string;

  @Prop({ type: Object })
  metadata: Record<string, any>;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'ProductVariant' }] })
  variants: ProductVariant[];

  @Prop({ type: Types.ObjectId, ref: 'ProductType' })
  type: ProductType;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'ProductTag' }] })
  tags: ProductTag[];

  @Prop({ type: [{ type: Types.ObjectId, ref: 'ProductOption' }] })
  options: ProductOption[];

  @Prop({ type: [{ type: Types.ObjectId, ref: 'ProductImage' }] })
  images: ProductImage[];

  @Prop({ type: Types.ObjectId, ref: 'ProductCollection' })
  Collection: ProductCollection;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'ProductCategory' }] })
  categories: ProductCategory[];

  @Prop({ type: Date })
  deleted_at: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);

// Implement cascading delete for related entities
ProductSchema.pre('deleteOne', { document: true, query: false }, async function(next) {
  const product = this;
  
  // Delete all related variants
  await product.model('ProductVariant').deleteMany({ product: product._id });
  
  // Delete all related options
  await product.model('ProductOption').deleteMany({ product: product._id });
  
  // Delete all related images
  await product.model('ProductImage').deleteMany({ product: product._id });
  
  next();
});

// Create indexes
ProductSchema.index(
  { handle: 1 },
  { 
    unique: true,
    partialFilterExpression: { deleted_at: { $eq: null } },
    name: 'IDX_product_handle_unique'
  }
);

ProductSchema.index(
  { type: 1 },
  { 
    partialFilterExpression: { deleted_at: { $eq: null } },
    name: 'IDX_product_type_id'
  }
);

ProductSchema.index(
  { collection: 1 },
  { 
    partialFilterExpression: { deleted_at: { $eq: null } },
    name: 'IDX_product_collection_id'
  }
);

// Text indexes for searchable fields
ProductSchema.index(
  { title: 'text', subtitle: 'text', description: 'text' },
  { 
    name: 'IDX_product_searchable_fields',
    weights: { title: 3, subtitle: 2, description: 1 }
  }
);

// Soft delete implementation
ProductSchema.methods.softDelete = function() {
  this.deleted_at = new Date();
  return this.save();
};
/*
// Query helper for non-deleted documents
ProductSchema.query.notDeleted = function() {
  return this.where({ deleted_at: null });
};
*/