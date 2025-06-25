import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { TaxProvider } from './tax-provider.entity';
import { TaxRate } from './tax-rate.entity';

@Schema({
  timestamps: true,
  collection: 'tax_regions',
  toJSON: {
    virtuals: true,
    transform: (_, ret) => {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
      return ret;
    },
  },
})
export class TaxRegion extends Document {
  @Prop({ required: true, index: true })
  country_code: string;

  @Prop({ type: String, default: null, index: true })
  province_code?: string;

  @Prop({ type: Object, default: null })
  metadata?: Record<string, unknown>;

  @Prop({ type: String, default: null })
  created_by?: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'TaxProvider', default: null })
  provider?: MongooseSchema.Types.ObjectId;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'TaxRegion', default: null })
  parent?: MongooseSchema.Types.ObjectId;

  @Prop({
    type: [{ type: MongooseSchema.Types.ObjectId, ref: 'TaxRegion' }],
    default: [],
  })
  children?: MongooseSchema.Types.ObjectId[];

  @Prop({
    type: [{ type: MongooseSchema.Types.ObjectId, ref: 'TaxRate' }],
    default: [],
  })
  tax_rates?: MongooseSchema.Types.ObjectId[];

  @Prop({ type: Date, default: null })
  deleted_at?: Date;
}

export const TaxRegionSchema = SchemaFactory.createForClass(TaxRegion);

//  Indexes
TaxRegionSchema.index(
  { country_code: 1, province_code: 1 },
  {
    name: 'IDX_tax_region_unique_country_province',
    unique: true,
    partialFilterExpression: { deleted_at: { $eq: null } },
  }
);

TaxRegionSchema.index(
  { country_code: 1 },
  {
    name: 'IDX_tax_region_unique_country_nullable_province',
    unique: true,
    partialFilterExpression: {
      province_code: null,
      deleted_at: { $eq: null },
    },
  }
);

//  Cascade delete: children + tax_rates
TaxRegionSchema.pre('findOneAndDelete', async function (next) {
  const doc = await this.model.findOne(this.getQuery());
  if (doc) {
    await doc.model('TaxRegion').deleteMany({ parent: doc._id });
    await doc.model('TaxRate').deleteMany({ tax_region: doc._id });
  }
  next();
});
