import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { FulfillmentSet } from './fulfillment-set.entity';
import { GeoZone } from './geo-zone.entity';
import { ShippingOption } from './shipping-option.entity';

export type ServiceZoneDocument = ServiceZone & Document;

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
export class ServiceZone {
  @Prop({
    type: String,
    required: true,
    unique: true,
    default: () => `serzo_${new Types.ObjectId().toString()}`,
  })
  id: string;

  @Prop({ type: String, required: true })
  name: string;

  @Prop({ 
    type: Types.ObjectId, 
    ref: 'FulfillmentSet',
    required: true
  })
  fulfillment_set: Types.ObjectId | FulfillmentSet;

  @Prop({ type: [Types.ObjectId], ref: 'GeoZone', default: [] })
  geo_zones: Types.ObjectId[] | GeoZone[];

  @Prop({ type: [Types.ObjectId], ref: 'ShippingOption', default: [] })
  shipping_options: Types.ObjectId[] | ShippingOption[];

  @Prop({ type: Object, default: null })
  metadata: Record<string, unknown> | null;

  @Prop({ type: Date, default: null })
  deleted_at: Date | null;

  // Virtuals for populated relationships
  public fulfillment_set_details?: FulfillmentSet;
  public geo_zones_details?: GeoZone[];
  public shipping_options_details?: ShippingOption[];
}

export const ServiceZoneSchema = SchemaFactory.createForClass(ServiceZone);

// Unique index on name with soft delete condition
ServiceZoneSchema.index(
  { name: 1 },
  { 
    unique: true,
    partialFilterExpression: { deleted_at: { $eq: null } }
  }
);

// Virtuals for populated relationships
ServiceZoneSchema.virtual('fulfillment_set_details', {
  ref: 'FulfillmentSet',
  localField: 'fulfillment_set',
  foreignField: '_id',
  justOne: true
});

ServiceZoneSchema.virtual('geo_zones_details', {
  ref: 'GeoZone',
  localField: 'geo_zones',
  foreignField: '_id'
});

ServiceZoneSchema.virtual('shipping_options_details', {
  ref: 'ShippingOption',
  localField: 'shipping_options',
  foreignField: '_id'
});

// Middleware for cascading soft deletes
ServiceZoneSchema.pre('findOneAndDelete', async function(next) {
  const serviceZone = await this.model.findOne(this.getFilter());
  
  if (serviceZone) {
    // Soft delete related geo_zones and shipping_options
    await Promise.all([
      this.model.db.model('GeoZone').updateMany(
        { _id: { $in: serviceZone.geo_zones } },
        { $set: { deleted_at: new Date() } }
      ),
      this.model.db.model('ShippingOption').updateMany(
        { _id: { $in: serviceZone.shipping_options } },
        { $set: { deleted_at: new Date() } }
      )
    ]);

    // Remove from fulfillment_set's service_zones array
    await this.model.db.model('FulfillmentSet').updateOne(
      { _id: serviceZone.fulfillment_set },
      { $pull: { service_zones: serviceZone._id } }
    );
  }
  
  // Convert to soft delete
  this.set({ deleted_at: new Date() });
  this.model.findOneAndUpdate();
  next();
});

// Middleware to maintain inverse relationships
ServiceZoneSchema.post('save', async function(doc) {
  if (doc.isNew) {
    await Promise.all([
      // Add to fulfillment_set's service_zones array
      doc.model('FulfillmentSet').updateOne(
        { _id: doc.fulfillment_set },
        { $addToSet: { service_zones: doc._id } }
      ),
      // Update geo_zones with this service_zone reference
      doc.model('GeoZone').updateMany(
        { _id: { $in: doc.geo_zones } },
        { $set: { service_zone: doc._id } }
      ),
      // Update shipping_options with this service_zone reference
      doc.model('ShippingOption').updateMany(
        { _id: { $in: doc.shipping_options } },
        { $set: { service_zone: doc._id } }
      )
    ]);
  }
});