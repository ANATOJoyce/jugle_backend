import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class PricePreference extends Document {
  @Prop({ type: String, required: true })
  attribute: string;

  @Prop({ type: String })
  value: string;

  @Prop({ type: Boolean, default: false })
  is_tax_inclusive: boolean;

  @Prop({ type: Date })
  deleted_at: Date;
}

export const PricePreferenceSchema = SchemaFactory.createForClass(PricePreference);

// Create compound index for attribute and value (unique when not deleted)
PricePreferenceSchema.index(
  { attribute: 1, value: 1 }, 
  { 
    unique: true, 
    partialFilterExpression: { deleted_at: { $eq: null } },
    name: 'IDX_price_preference_attribute_value'
  }
);

// Soft delete implementation
PricePreferenceSchema.methods.softDelete = function() {
  this.deleted_at = new Date();
  return this.save();
};
/*
// Query helper for non-deleted documents
PricePreferenceSchema.query.notDeleted = function() {
  return this.where({ deleted_at: null });
};*/