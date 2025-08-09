import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { TaxRateRule } from './tax-rate-rule.entity';
import { TaxRegion } from './tax-region.entity';

@Schema({
  timestamps: true,
  collection: 'tax_rates',
  toJSON: {
    virtuals: true,
    transform: (_, ret: { _id: any; __v?: number; [key: string]: any }) => {
      ret.id = ret._id.toString();
      delete ret._id;
      delete ret.__v;
      return ret;
    }

  },
})
export class TaxRate extends Document {
  @Prop({ type: Number, default: null })
  rate?: number;

  @Prop({ required: true, index: true })
  code: string;

  @Prop({ required: true, index: true })
  name: string;

  @Prop({ default: false })
  is_default: boolean;

  @Prop({ default: false })
  is_combinable: boolean;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'TaxRegion' })
  tax_region: MongooseSchema.Types.ObjectId;

  @Prop({
    type: [{ type: MongooseSchema.Types.ObjectId, ref: 'TaxRateRule' }],
    default: [],
  })
  rules: MongooseSchema.Types.ObjectId[];

  @Prop({ type: Object, default: null })
  metadata?: Record<string, unknown>;

  @Prop({ type: String, default: null })
  created_by?: string;

  @Prop({ type: Date, default: null })
  deleted_at?: Date;
}

export const TaxRateSchema = SchemaFactory.createForClass(TaxRate);

// ✅ Indexes
TaxRateSchema.index(
  { tax_region: 1 },
  {
    name: 'IDX_tax_rate_tax_region_id',
    partialFilterExpression: { deleted_at: { $eq: null } },
  }
);

TaxRateSchema.index(
  { tax_region: 1 },
  {
    name: 'IDX_single_default_region',
    unique: true,
    partialFilterExpression: {
      is_default: true,
      deleted_at: { $eq: null },
    },
  }
);

// ✅ Cascade delete: remove related TaxRateRules
TaxRateSchema.pre('findOneAndDelete', async function (next) {
  const doc = await this.model.findOne(this.getQuery());
  if (doc) {
    await doc.model('TaxRateRule').deleteMany({ tax_rate: doc._id });
  }
  next();
});
