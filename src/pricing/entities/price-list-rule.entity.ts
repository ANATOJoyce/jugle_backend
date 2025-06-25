import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { PriceList } from './price-list.entity';

export type PriceListRuleDocument = PriceListRule & Document;

@Schema({ timestamps: true })
export class PriceListRule {
  @Prop({ type: String, required: true, index: true }) // attribute
  attribute: string;

  @Prop({ type: Object, default: null }) // value (JSON)
  value?: any | null;

  @Prop({ 
    type: MongooseSchema.Types.ObjectId, 
    ref: 'PriceList', 
    required: true,
    index: true 
  }) // belongsTo PriceList
  price_list: PriceList;

  @Prop({ type: Date, default: null }) // Soft delete
  deleted_at?: Date | null;
}

export const PriceListRuleSchema = SchemaFactory.createForClass(PriceListRule);

// Indexes with partial filter for soft delete
PriceListRuleSchema.index(
  { price_list: 1 }, 
  { 
    name: 'IDX_price_list_rule_price_list_id',
    partialFilterExpression: { deleted_at: null } 
  }
);

PriceListRuleSchema.index(
  { attribute: 1 },
  {
    name: 'IDX_price_list_rule_attribute',
    partialFilterExpression: { deleted_at: null }
  }
);

// Soft delete method
PriceListRuleSchema.methods.softDelete = function() {
  this.deleted_at = new Date();
  return this.save();
};
/*

// Query helpers for filtering out deleted records
PriceListRuleSchema.query.notDeleted = function() {
  return this.where({ deleted_at: null });
};*/