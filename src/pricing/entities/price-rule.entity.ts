import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Price } from './pricing.entity';

export enum PricingRuleOperator {
  EQ = 'eq',         // Equal
  NE = 'ne',         // Not equal
  GT = 'gt',         // Greater than
  GTE = 'gte',       // Greater than or equal
  LT = 'lt',         // Less than
  LTE = 'lte',       // Less than or equal
  IN = 'in',         // In
  NOT_IN = 'not_in', // Not in
}

@Schema({ timestamps: true })
export class PriceRule extends Document {
  @Prop({ type: String, required: true })
  attribute: string;

  @Prop({ type: String, required: true })
  value: string;

  @Prop({
    type: String,
    enum: Object.values(PricingRuleOperator),
    default: PricingRuleOperator.EQ,
  })
  operator: PricingRuleOperator;

  @Prop({ type: Number, default: 0 })
  priority: number;

  @Prop({ type: Types.ObjectId, ref: 'Price', required: true })
  price: Price;

  @Prop({ type: Date })
  deleted_at: Date;
}

export const PriceRuleSchema = SchemaFactory.createForClass(PriceRule);

// Create indexes
PriceRuleSchema.index(
  { price: 1, attribute: 1, operator: 1 },
  { 
    unique: true,
    partialFilterExpression: { deleted_at: { $eq: null } },
    name: 'IDX_price_rule_price_id_attribute_operator'
  }
);

PriceRuleSchema.index(
  { attribute: 1 },
  { 
    partialFilterExpression: { deleted_at: { $eq: null } },
    name: 'IDX_price_rule_attribute'
  }
);

PriceRuleSchema.index(
  { attribute: 1, value: 1 },
  { 
    partialFilterExpression: { deleted_at: { $eq: null } },
    name: 'IDX_price_rule_attribute_value'
  }
);

PriceRuleSchema.index(
  { operator: 1, value: 1 },
  { 
    partialFilterExpression: { deleted_at: { $eq: null } },
    name: 'IDX_price_rule_operator_value'
  }
);

// Soft delete implementation
PriceRuleSchema.methods.softDelete = function() {
  this.deleted_at = new Date();
  return this.save();
};
/*
// Query helper for non-deleted documents
PriceRuleSchema.query.notDeleted = function() {
  return this.where({ deleted_at: null });
};*/