import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { ShippingOption } from './shipping-option.entity';

export enum RuleOperator {
  IN = 'in',
  EQ = 'eq',
  NE = 'ne',
  GT = 'gt',
  GTE = 'gte',
  LT = 'lt',
  LTE = 'lte',
  NIN = 'nin'
}

export type ShippingOptionRuleDocument = ShippingOptionRule & Document;

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
export class ShippingOptionRule {
  @Prop({
    type: String,
    required: true,
    unique: true,
    default: () => `sorul_${new Types.ObjectId().toString()}`,
  })
  id: string;

  @Prop({ type: String, required: true })
  attribute: string;

  @Prop({
    type: String,
    enum: RuleOperator,
    required: true
  })
  operator: RuleOperator;

  @Prop({ type: Object, default: null })
  value: any | null;

  @Prop({ 
    type: Types.ObjectId, 
    ref: 'ShippingOption',
    required: true
  })
  shipping_option: Types.ObjectId | ShippingOption;

  // Virtual for populated shipping option
  public shipping_option_details?: ShippingOption;
}

export const ShippingOptionRuleSchema = SchemaFactory.createForClass(ShippingOptionRule);

// Virtual for populated shipping option
ShippingOptionRuleSchema.virtual('shipping_option_details', {
  ref: 'ShippingOption',
  localField: 'shipping_option',
  foreignField: '_id',
  justOne: true
});

// Middleware to maintain inverse relationship
ShippingOptionRuleSchema.post('save', async function(doc) {
  await this.model('ShippingOption').updateOne(
    { _id: doc.shipping_option },
    { $addToSet: { rules: doc._id } }
  );
});

/*/ Middleware for cascading delete
ShippingOptionRuleSchema.pre('findOneAndDelete', async function(next) {
  const rule = await this.model.findOne(this.getFilter());
  
  if (rule) {
    // Remove from shipping_option's rules array
    await this.model('ShippingOption').updateOne(
      { _id: rule.shipping_option },
      { $pull: { rules: rule._id } }
    );
  }
  
  next();
});*/