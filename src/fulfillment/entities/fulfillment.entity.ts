import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { FulfillmentAddress } from './address.entity';
import { FulfillmentItem } from './fulfillment-item.entity';
import { FulfillmentLabel } from './fulfillment-label.entity';
import { FulfillmentProvider } from './fulfillment-provider.entity';
import { ShippingOption } from './shipping-option.entity';

export type FulfillmentDocument = Fulfillment & Document;

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
export class Fulfillment {
  @Prop({
    type: String,
    required: true,
    unique: true,
    default: () => `ful_${new Types.ObjectId().toString()}`,
  })
  id: string;

  @Prop({ type: String, required: true })
  location_id: string;

  @Prop({ type: Date, default: null })
  packed_at: Date | null;

  @Prop({ type: Date, default: null })
  shipped_at: Date | null;

  @Prop({ type: String, default: null })
  marked_shipped_by: string | null;

  @Prop({ type: String, default: null })
  created_by: string | null;

  @Prop({ type: Date, default: null })
  delivered_at: Date | null;

  @Prop({ type: Date, default: null })
  canceled_at: Date | null;

  @Prop({ type: Object, default: null })
  data: Record<string, any> | null;

  @Prop({ type: Boolean, default: true })
  requires_shipping: boolean;

  @Prop({ type: [Types.ObjectId], ref: 'FulfillmentItem', default: [] })
  items: Types.ObjectId[] | FulfillmentItem[];

  @Prop({ type: [Types.ObjectId], ref: 'FulfillmentLabel', default: [] })
  labels: Types.ObjectId[] | FulfillmentLabel[];

  @Prop({ type: Types.ObjectId, ref: 'FulfillmentProvider', default: null })
  provider: Types.ObjectId | FulfillmentProvider | null;

  @Prop({ type: Types.ObjectId, ref: 'ShippingOption', default: null })
  shipping_option: Types.ObjectId | ShippingOption | null;

  @Prop({ type: Types.ObjectId, ref: 'FulfillmentAddress', default: null })
  delivery_address: Types.ObjectId | FulfillmentAddress | null;

  @Prop({ type: Object, default: null })
  metadata: Record<string, any> | null;

  @Prop({ type: Date, default: null })
  deleted_at: Date | null;

  // Virtuals pour la population
  public items_details?: FulfillmentItem[];
  public labels_details?: FulfillmentLabel[];
  public provider_details?: FulfillmentProvider;
  public shipping_option_details?: ShippingOption;
  public delivery_address_details?: FulfillmentAddress;
}

export const FulfillmentSchema = SchemaFactory.createForClass(Fulfillment);

// Index sur location_id avec condition deleted_at IS NULL
FulfillmentSchema.index(
  { location_id: 1 },
  { 
    partialFilterExpression: { deleted_at: { $eq: null } }
  }
);

// Virtuals pour la population
FulfillmentSchema.virtual('items_details', {
  ref: 'FulfillmentItem',
  localField: 'items',
  foreignField: '_id'
});

FulfillmentSchema.virtual('labels_details', {
  ref: 'FulfillmentLabel',
  localField: 'labels',
  foreignField: '_id'
});

FulfillmentSchema.virtual('provider_details', {
  ref: 'FulfillmentProvider',
  localField: 'provider',
  foreignField: '_id',
  justOne: true
});

FulfillmentSchema.virtual('shipping_option_details', {
  ref: 'ShippingOption',
  localField: 'shipping_option',
  foreignField: '_id',
  justOne: true
});

FulfillmentSchema.virtual('delivery_address_details', {
  ref: 'FulfillmentAddress',
  localField: 'delivery_address',
  foreignField: '_id',
  justOne: true
});

// Middleware pour cascades delete (soft delete)
FulfillmentSchema.pre('findOneAndDelete', async function(next) {
  const fulfillment = await this.model.findOne(this.getFilter());
  
  if (fulfillment) {
    // Soft delete des relations
    await Promise.all([
      this.model.db.model('FulfillmentItem').updateMany(
        { _id: { $in: fulfillment.items } },
        { $set: { deleted_at: new Date() } }
      ),
      this.model.db.model('FulfillmentLabel').updateMany(
        { _id: { $in: fulfillment.labels } },
        { $set: { deleted_at: new Date() } }
      ),
      this.model.db.model('FulfillmentAddress').updateOne(
        { _id: fulfillment.delivery_address },
        { $set: { deleted_at: new Date() } }
      )
    ]);
  }
  
  // Convertit le delete en soft delete
  this.set({ deleted_at: new Date() });
  this.model.findOneAndUpdate();
  next();
});