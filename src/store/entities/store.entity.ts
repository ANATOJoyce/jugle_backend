import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { StoreCurrency } from './currency.entity';

@Schema({
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (_, ret) => {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
      return ret;
    },
  },
  collection: 'stores',
})
export class Store extends Document {
  @Prop({ required: true, default: 'Medusa Store', index: true })
  name: string;

  @Prop({ type: String, default: null })
  default_sales_channel_id?: string;

  @Prop({ type: String, default: null })
  default_region_id?: string;

  @Prop({ type: String, default: null })
  default_location_id?: string;

  @Prop({ type: Object, default: null })
  metadata?: Record<string, unknown>;

  @Prop({
    type: [{ type: MongooseSchema.Types.ObjectId, ref: 'StoreCurrency' }],
    default: [],
  })
  supported_currencies?: MongooseSchema.Types.ObjectId[];
}

export const StoreSchema = SchemaFactory.createForClass(Store);

// Cascade delete for supported_currencies when store is deleted
StoreSchema.pre('findOneAndDelete', async function (next) {
  const doc = await this.model.findOne(this.getQuery());
  if (doc) {
    await doc.model('StoreCurrency').deleteMany({ store: doc._id });
  }
  next();
});
