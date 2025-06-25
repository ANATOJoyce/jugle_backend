import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { ServiceZone } from './service-zone.entity';

export enum GeoZoneType {
  COUNTRY = 'country',
  PROVINCE = 'province',
  CITY = 'city',
  ZIP = 'zip'
}

export type GeoZoneDocument = GeoZone & Document;

@Schema({
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: function(doc, ret) {
      delete ret._id;
      delete ret.__v;
      return ret;
    }
  }
})
export class GeoZone {
  @Prop({
    type: String,
    required: true,
    unique: true,
    default: () => `fgz_${new Types.ObjectId().toString()}`,
  })
  id: string;

  @Prop({
    type: String,
    enum: GeoZoneType,
    default: GeoZoneType.COUNTRY
  })
  type: GeoZoneType;

  @Prop({ type: String, required: true })
  country_code: string;

  @Prop({ type: String, default: null })
  province_code: string | null;

  @Prop({ type: String, default: null })
  city: string | null;

  @Prop({ type: Object, default: null })
  postal_expression: Record<string, unknown> | null;

  @Prop({ 
    type: Types.ObjectId, 
    ref: 'ServiceZone',
    required: true
  })
  service_zone: Types.ObjectId | ServiceZone;

  @Prop({ type: Object, default: null })
  metadata: Record<string, unknown> | null;

  @Prop({ type: Date, default: null })
  deleted_at: Date | null;

  // Virtual for populated service zone
  public service_zone_details?: ServiceZone;
}

export const GeoZoneSchema = SchemaFactory.createForClass(GeoZone);

// Indexes with partial filter for soft delete
GeoZoneSchema.index(
  { country_code: 1 },
  { partialFilterExpression: { deleted_at: { $eq: null } }}
);

GeoZoneSchema.index(
  { province_code: 1 },
  { partialFilterExpression: { deleted_at: { $eq: null } }}
);

GeoZoneSchema.index(
  { city: 1 },
  { partialFilterExpression: { deleted_at: { $eq: null } }}
);

// Virtual for populated service zone
GeoZoneSchema.virtual('service_zone_details', {
  ref: 'ServiceZone',
  localField: 'service_zone',
  foreignField: '_id',
  justOne: true
});

// Middleware to ensure inverse relationship is maintained
GeoZoneSchema.post('save', async function(doc) {
  await this.model('ServiceZone').updateOne(
    { _id: doc.service_zone },
    { $addToSet: { geo_zones: doc._id } }
  );
});

/*/ Middleware for soft delete
GeoZoneSchema.pre('findOneAndDelete', async function(next) {
  const geoZone = await this.model.findOne(this.getFilter());
  
  if (geoZone) {
    // Remove from service_zone's geo_zones array
    await this.model('ServiceZone').updateOne(
      { _id: geoZone.service_zone },
      { $pull: { geo_zones: geoZone._id } }
    );
  }
  
  // Convert to soft delete
  this.set({ deleted_at: new Date() });
  this.model.findOneAndUpdate();
  next();
});*/