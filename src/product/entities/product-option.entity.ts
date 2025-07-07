import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Product } from './product.entity';
import { ProductOptionValue } from './product-option-value.entity';

@Schema({ timestamps: true })

export class ProductOption extends Document {
  @Prop({ required: true, index: true }) // searchable()
  title: string;

  @Prop({ type: Object })
  metadata: Record<string, any>; // nullable()

  @Prop({ type: Types.ObjectId, ref: 'Product', required: true })
  product: Product; // belongsTo(Product)

  @Prop({ type: [{ type: Types.ObjectId, ref: 'ProductOptionValue' }] })
  values: ProductOptionValue[]; // hasMany(ProductOptionValue)
}

export const ProductOptionSchema = SchemaFactory.createForClass(ProductOption);

// Compound index for product + title uniqueness (with soft delete support)
ProductOptionSchema.index(
  { product: 1, title: 1 },
  {
    name: "IDX_option_product_id_title_unique",
    unique: true,
    partialFilterExpression: { deletedAt: { $eq: null } },
  }
);

// Cascading delete for 'values' (Mongoose middleware)
ProductOptionSchema.pre('deleteOne', { document: true }, async function (next) {
  const optionId = this._id;
  await this.model('ProductOptionValue').deleteMany({ option: optionId });
  next();
});