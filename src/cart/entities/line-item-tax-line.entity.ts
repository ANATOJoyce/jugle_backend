import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { LineItem } from './line-item.entity';

export type LineItemTaxLineDocument = LineItemTaxLine & Document;

@Schema({
  timestamps: true,
  collection: 'cart_line_item_tax_line' // Matching original tableName
})
export class LineItemTaxLine {
  @Prop({ required: true, unique: true })
  id: string; // Will be prefixed with "calitxl"

  @Prop()
  description: string;

  @Prop({ required: true })
  code: string;

  @Prop({ type: Number, required: true })
  rate: number; // float() becomes Number

  @Prop()
  provider_id: string;

  @Prop({ type: Object })
  metadata: Record<string, any>;

  @Prop()
  tax_rate_id: string;

  @Prop({ type: Types.ObjectId, ref: 'LineItem', required: true })
  item: LineItem;

  @Prop()
  deleted_at: Date;
}

export const LineItemTaxLineSchema = SchemaFactory.createForClass(LineItemTaxLine);

// Indexes
LineItemTaxLineSchema.index(
  { tax_rate_id: 1 },
  {
    name: 'IDX_line_item_tax_line_tax_rate_id',
    partialFilterExpression: {
      deleted_at: { $exists: false },
      tax_rate_id: { $exists: true }
    }
  }
);

LineItemTaxLineSchema.index(
  { item: 1 },
  {
    name: 'IDX_tax_line_item_id',
    partialFilterExpression: { deleted_at: { $exists: false } }
  }
);

// Middleware for ID generation
LineItemTaxLineSchema.pre('save', function(next) {
  if (!this.id) {
    this.id = `calitxl_${Math.random().toString(36).substring(2, 11)}`;
  }
  next();
});