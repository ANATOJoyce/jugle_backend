import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { ServiceZone } from './service-zone.entity';

export type FulfillmentSetDocument = FulfillmentSet & Document;

@Schema({
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  toJSON: {
    virtuals: true,
    transform: function(doc, ret) {
      delete ret._id;
      delete ret.__v;
      return ret;
    }
  }
})
export class FulfillmentSet {
  @Prop({
    type: String,
    required: true,
    unique: true,
    default: () => `fuset_${new Types.ObjectId().toString()}`,
  })
  id: string;

  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: true })
  type: string;

  @Prop({ type: [Types.ObjectId], ref: 'ServiceZone', default: [] })
  service_zones: Types.ObjectId[] | ServiceZone[];

  @Prop({ type: Object, default: null })
  metadata: Record<string, any> | null;

  // Virtual pour la population
  public service_zones_details?: ServiceZone[];

  // Champ pour soft delete
  @Prop({ type: Date, default: null })
  deleted_at: Date | null;
}

export const FulfillmentSetSchema = SchemaFactory.createForClass(FulfillmentSet);

// Index unique sur name où deleted_at est null
FulfillmentSetSchema.index(
  { name: 1 },
  { 
    unique: true,
    partialFilterExpression: { deleted_at: { $eq: null } }
  }
);

// Virtual pour la population des service_zones
FulfillmentSetSchema.virtual('service_zones_details', {
  ref: 'ServiceZone',
  localField: 'service_zones',
  foreignField: '_id',
});

// Middleware pour cascades delete (soft delete)
FulfillmentSetSchema.pre('findOneAndDelete', async function(next) {
  const fulfillmentSet = await this.model.findOne(this.getFilter());
  
  if (fulfillmentSet) {
    // Soft delete des service_zones associés
    await this.model.db.model('ServiceZone').updateMany(
      { _id: { $in: fulfillmentSet.service_zones } },
      { $set: { deleted_at: new Date() } }
    );
  }
  
  // Convertit le delete en soft delete
  this.set({ deleted_at: new Date() });
  this.model.findOneAndUpdate();
  next();
});