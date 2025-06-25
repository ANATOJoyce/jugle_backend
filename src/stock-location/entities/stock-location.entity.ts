import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { StockLocationAddress } from './stock-location-address.entity';

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
export class StockLocation extends Document {
  @Prop({
    required: true,
    trim: true,
    index: true
  })
  name: string;

  @Prop({ type: Object })
  metadata?: Record<string, unknown>;

  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: 'StockLocationAddress',
  })
  address?: StockLocationAddress;
}

export const StockLocationSchema = SchemaFactory.createForClass(StockLocation);

// Add text index for searchable name field
StockLocationSchema.index({ name: 'text' });

// Add population hook for address
StockLocationSchema.pre('findOne', function() {
  this.populate('address');
});

StockLocationSchema.pre('find', function() {
  this.populate('address');
});