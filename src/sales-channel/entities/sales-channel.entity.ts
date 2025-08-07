import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
  collection: 'sales_channels',
})
export class SalesChannel extends Document {
  @Prop({ required: true, index: true })
  name: string;

  @Prop({ index: true })
  description?: string;

  @Prop({ default: false })
  is_disabled: boolean;

  @Prop({ type: Object })
  metadata?: Record<string, unknown>;
}
export type SalesChannelDocument = SalesChannel & Document;
export const SalesChannelSchema = SchemaFactory.createForClass(SalesChannel)