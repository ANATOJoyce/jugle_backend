import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Country } from '../../region/entities/country.entity';
import { Region } from '../../region/entities/region.entity';

export type StockLocationAddressDocument = HydratedDocument<StockLocationAddress>;

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
export class StockLocationAddress {
  @Prop({ required: true, trim: true })
  address_1: string;

  @Prop({ trim: true })
  address_2?: string;

  @Prop({ trim: true })
  company?: string;

  @Prop({ trim: true })
  city?: string;

  @Prop({ type: Types.ObjectId, ref: Country.name, required: true })
  country: Country;

  @Prop({ type: Types.ObjectId, ref: Region.name })
  region?: Region;

  @Prop({ trim: true })
  postal_code?: string;

  @Prop({ trim: true })
  phone?: string;

  @Prop({ type: Object, default: {} })
  metadata?: Record<string, unknown>;
}

export const StockLocationAddressSchema = SchemaFactory.createForClass(StockLocationAddress);
