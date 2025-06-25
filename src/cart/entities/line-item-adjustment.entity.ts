import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { LineItem } from './line-item.entity';

export type LineItemAdjustmentDocument = LineItemAdjustment & Document;

@Schema({
  timestamps: true,
  collection: 'cart_line_item_adjustment' // Matching original tableName
})
export class LineItemAdjustment {
  @Prop({ required: true, unique: true })
  id: string; // Will be prefixed with "caliadj"

  @Prop()
  description: string;

  @Prop()
  code: string;

  @Prop({ type: Number, required: true, min: 0 }) // Enforces amount >= 0
  amount: number; // bigNumber() becomes Number

  @Prop()
  provider_id: string;

  @Prop()
  promotion_id: string;

  @Prop({ type: Object })
  metadata: Record<string, any>;

  @Prop({ type: Types.ObjectId, ref: 'LineItem', required: true })
  item: LineItem;

  @Prop()
  deleted_at: Date;
}

export const LineItemAdjustmentSchema = SchemaFactory.createForClass(LineItemAdjustment);

// Indexes
LineItemAdjustmentSchema.index(
  { promotion_id: 1 },
  {
    name: 'IDX_line_item_adjustment_promotion_id',
    partialFilterExpression: {
      deleted_at: { $exists: false },
      promotion_id: { $exists: true }
    }
  }
);

LineItemAdjustmentSchema.index(
  { item: 1 },
  {
    name: 'IDX_adjustment_item_id',
    partialFilterExpression: { deleted_at: { $exists: false } }
  }
);

// Middleware for ID generation
LineItemAdjustmentSchema.pre('save', function(next) {
  if (!this.id) {
    this.id = `caliadj_${Math.random().toString(36).substring(2, 11)}`;
  }
  next();
});

// Validation for amount >= 0
LineItemAdjustmentSchema.path('amount').validate(function(value: number) {
  return value >= 0;
}, 'Amount must be greater than or equal to 0');