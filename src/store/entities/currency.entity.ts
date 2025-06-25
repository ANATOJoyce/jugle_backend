import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Store } from './store.entity';

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
  collection: 'store_currencies',
})
export class StoreCurrency extends Document {
  @Prop({ required: true, index: true })
  currency_code: string;

  @Prop({ default: false })
  is_default: boolean;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Store', default: null })
  store?: MongooseSchema.Types.ObjectId; // Nullable reference
}

export const StoreCurrencySchema = SchemaFactory.createForClass(StoreCurrency);
