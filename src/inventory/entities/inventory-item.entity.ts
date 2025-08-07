import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { InventoryLevel } from './inventory-level.entity';
import { ReservationItem } from './reservation-item.entity';

export type InventoryItemDocument = InventoryItem & Document;

@Schema({
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: function(doc, ret) {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
      return ret;
    }
  }
})
export class InventoryItem {
  @Prop({
    type: String,
    required: true,
    unique: true,
    default: () => `iitem_${new Types.ObjectId().toString()}`,
  })
  id: string;

  @Prop({ type: String, index: true, default: null })
  sku: string | null;

  @Prop({ type: String, default: null })
  origin_country: string | null;

  @Prop({ type: String, index: true, default: null })
  hs_code: string | null;

  @Prop({ type: String, index: true, default: null })
  mid_code: string | null;

  @Prop({ type: String, default: null })
  material: string | null;

  @Prop({ type: Number, default: null })
  weight: number | null;

  @Prop({ type: Number, default: null })
  length: number | null;

  @Prop({ type: Number, default: null })
  height: number | null;

  @Prop({ type: Number, default: null })
  width: number | null;

  @Prop({ type: Boolean, default: true })
  requires_shipping: boolean;

  @Prop({ type: String, index: true, default: null })
  description: string | null;

  @Prop({ type: String, index: true, default: null })
  title: string | null;

  @Prop({ type: String, default: null })
  thumbnail: string | null;

  @Prop({ type: Object, default: null })
  metadata: Record<string, any> | null;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'InventoryLevel' }], default: [] })
  location_levels: Types.ObjectId[];

  @Prop({ type: [{ type: Types.ObjectId, ref: 'ReservationItem' }], default: [] })
  reservation_items: Types.ObjectId[];

  @Prop({ type: Number, default: 0 })
  reserved_quantity: number;

  @Prop({ type: Number, default: 0 })
  stocked_quantity: number;

  @Prop({ type: Date, default: null })
  deleted_at: Date | null;

  // Virtuals
  public location_levels_details?: InventoryLevel[];
  public reservation_items_details?: ReservationItem[];
}

export const InventoryItemSchema = SchemaFactory.createForClass(InventoryItem);

