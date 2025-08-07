// stock-location.entity.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, Schema as MongooseSchema, Types } from 'mongoose';
import { StockLocationAddress } from './stock-location-address.entity';

export type StockLocationDocument = HydratedDocument<StockLocation>;
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
  collection: 'stock_locations',
})
export class StockLocation {
  @Prop({ required: true, trim: true, index: true })
  name: string;

  @Prop({ type: Object, default: {} })
  metadata?: Record<string, unknown>;

  @Prop({ type: Types.ObjectId, ref: 'StockLocationAddress' })
  address?: Types.ObjectId; //  Pas Schema.Types.ObjectId
}

export const StockLocationSchema = SchemaFactory.createForClass(StockLocation);
