import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { 
  Fulfillment, 
  FulfillmentDocument 
} from './fulfillment.entity';
import { 
  FulfillmentProvider, 
  FulfillmentProviderDocument 
} from './fulfillment-provider.entity';
import { 
  ServiceZone, 
  ServiceZoneDocument 
} from './service-zone.entity';
import { 
  ShippingOptionRule, 
  ShippingOptionRuleDocument 
} from './shipping-option-rule.entity';
import { 
  ShippingOptionType, 
  ShippingOptionTypeDocument 
} from './shipping-option-type.entity';
import { 
  ShippingProfile, 
  ShippingProfileDocument 
} from './shipping-profile.entity';

export enum ShippingOptionPriceType {
  FLAT = 'flat',
  CALCULATED = 'calculated'
}

export type ShippingOptionDocument = ShippingOption & Document;

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
export class ShippingOption {
  @Prop({
    type: String,
    required: true,
    unique: true,
    default: () => `so_${new Types.ObjectId().toString()}`,
  })
  id: string;

  @Prop({ type: String, required: true })
  name: string;

  @Prop({
    type: String,
    enum: ShippingOptionPriceType,
    default: ShippingOptionPriceType.FLAT
  })
  price_type: ShippingOptionPriceType;

  @Prop({ type: Object, default: null })
  data: Record<string, any> | null;

  @Prop({ type: Object, default: null })
  metadata: Record<string, any> | null;

  @Prop({ 
    type: Types.ObjectId, 
    ref: 'ServiceZone',
    required: true
  })
  service_zone: Types.ObjectId | ServiceZone;

  @Prop({ 
    type: Types.ObjectId, 
    ref: 'ShippingProfile',
    default: null
  })
  shipping_profile: Types.ObjectId | ShippingProfile | null;

  @Prop({ 
    type: Types.ObjectId, 
    ref: 'FulfillmentProvider',
    default: null
  })
  provider: Types.ObjectId | FulfillmentProvider | null;

  @Prop({ 
    type: Types.ObjectId, 
    ref: 'ShippingOptionType',
    default: null
  })
  type: Types.ObjectId | ShippingOptionType | null;

  @Prop({ type: [Types.ObjectId], ref: 'ShippingOptionRule', default: [] })
  rules: Types.ObjectId[] | ShippingOptionRule[];

  @Prop({ type: [Types.ObjectId], ref: 'Fulfillment', default: [] })
  fulfillments: Types.ObjectId[] | Fulfillment[];

  // Virtuals for populated relationships
  public service_zone_details?: ServiceZone;
  public shipping_profile_details?: ShippingProfile | null;
  public provider_details?: FulfillmentProvider | null;
  public type_details?: ShippingOptionType | null;
  public rules_details?: ShippingOptionRule[];
  public fulfillments_details?: Fulfillment[];
}

export const ShippingOptionSchema = SchemaFactory.createForClass(ShippingOption);

// Virtuals for population
ShippingOptionSchema.virtual('service_zone_details', {
  ref: 'ServiceZone',
  localField: 'service_zone',
  foreignField: '_id',
  justOne: true
});

ShippingOptionSchema.virtual('shipping_profile_details', {
  ref: 'ShippingProfile',
  localField: 'shipping_profile',
  foreignField: '_id',
  justOne: true
});

ShippingOptionSchema.virtual('provider_details', {
  ref: 'FulfillmentProvider',
  localField: 'provider',
  foreignField: '_id',
  justOne: true
});

ShippingOptionSchema.virtual('type_details', {
  ref: 'ShippingOptionType',
  localField: 'type',
  foreignField: '_id',
  justOne: true
});

ShippingOptionSchema.virtual('rules_details', {
  ref: 'ShippingOptionRule',
  localField: 'rules',
  foreignField: '_id'
});

ShippingOptionSchema.virtual('fulfillments_details', {
  ref: 'Fulfillment',
  localField: 'fulfillments',
  foreignField: '_id'
});

// Cascade delete middleware
ShippingOptionSchema.pre('findOneAndDelete', async function(next) {
  const shippingOption = await this.model.findOne(this.getFilter());
  
  if (shippingOption) {
    await Promise.all([
      // Delete related rules
      this.model.db.model('ShippingOptionRule').deleteMany(
        { shipping_option: shippingOption._id }
      ),
      // Delete related type
      this.model.db.model('ShippingOptionType').deleteOne(
        { _id: shippingOption.type }
      )
    ]);
  }
  
  next();
});