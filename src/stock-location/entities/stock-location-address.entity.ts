import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { StockLocation } from './stock-location.entity';

@Schema({
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (doc, ret) => {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
      return ret;
    }
  },
  collection: 'stock_location_addresses',
})
export class StockLocationAddress extends Document {
  @Prop({ required: true, trim: true })
  address_1: string;

  @Prop({ trim: true })
  address_2?: string;

  @Prop({ trim: true })
  company?: string;

  @Prop({ trim: true })
  city?: string;

  @Prop({ required: true, trim: true })
  country_code: string;

  @Prop({ trim: true })
  phone?: string;

  @Prop({ trim: true })
  province?: string;

  @Prop({ trim: true })
  postal_code?: string;

  @Prop({ type: Object })
  metadata?: Record<string, unknown>;

  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: 'StockLocation',
  })
  stock_location?: StockLocation;
}

export const StockLocationAddressSchema = SchemaFactory.createForClass(StockLocationAddress);

// Cascading delete implementation
StockLocationAddressSchema.pre('deleteOne', { document: true, query: false }, async function(next) {
  try {
    await this.model('StockLocation').deleteOne({ address: this._id });
    next();
  } catch (err) {
    next(err);
  }
});