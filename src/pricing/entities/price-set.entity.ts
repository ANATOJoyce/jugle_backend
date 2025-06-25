import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Price } from './pricing.entity';

@Schema({ timestamps: true })
export class PriceSet extends Document {
  @Prop({ type: [{ type: Types.ObjectId, ref: 'Price' }] })
  prices: Price[];
}

export const PriceSetSchema = SchemaFactory.createForClass(PriceSet);

// Implement cascading delete for prices
PriceSetSchema.pre('deleteOne', { document: true, query: false }, async function(next) {
  const priceSet = this;
  
  // Delete all related prices
  await priceSet.model('Price').deleteMany({ price_set: priceSet._id });
  
  next();
});