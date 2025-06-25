import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Region } from './region.entity';

@Schema({
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
  collection: 'region_country',
})
export class Country extends Document {
  @Prop({
    type: String,
    required: true,
    unique: true,
    index: true,
  })
  iso_2: string;

  @Prop({ required: true })
  iso_3: string;

  @Prop({ required: true })
  num_code: string;

  @Prop({ required: true, index: true })
  name: string;

  @Prop({ required: true })
  display_name: string;

  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: 'Region',
    index: true,
  })
  region?: Region;

  @Prop({ type: Object })
  metadata?: Record<string, unknown>;
}

export const CountrySchema = SchemaFactory.createForClass(Country);

// Create compound index for region_id and iso_2
CountrySchema.index({ region: 1, iso_2: 1 }, { unique: true });

// Add text indexes for searchable fields
CountrySchema.index({ name: 'text' });
CountrySchema.index({ iso_2: 'text' });