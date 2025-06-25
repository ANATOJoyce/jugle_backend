import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { InventoryItem } from './inventory-item.entity';

export type ReservationItemDocument = ReservationItem & Document;

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
export class ReservationItem {
  @Prop({
    type: String,
    required: true,
    unique: true,
    default: () => `resitem_${new Types.ObjectId().toString()}`,
  })
  id: string;

  @Prop({ type: String, default: null, index: true })
  line_item_id: string | null;

  @Prop({ type: Boolean, default: false })
  allow_backorder: boolean;

  @Prop({ type: String, required: true, index: true })
  location_id: string;

  @Prop({ 
    type: Number, 
    required: true,
    get: (v: number) => Math.round(v),
    set: (v: number) => Math.round(v)
  })
  quantity: number;

  @Prop({ type: Object, required: true })
  raw_quantity: Record<string, any>;

  @Prop({ type: String, default: null })
  external_id: string | null;

  @Prop({ type: String, default: null, index: true })
  description: string | null;

  @Prop({ type: String, default: null })
  created_by: string | null;

  @Prop({ type: Object, default: null })
  metadata: Record<string, any> | null;

  @Prop({ 
    type: Types.ObjectId, 
    ref: 'InventoryItem',
    required: true,
    index: true
  })
  inventory_item: Types.ObjectId | InventoryItem;

  @Prop({ type: Date, default: null })
  deleted_at: Date | null;

  // Virtual for populated inventory item
  public inventory_item_details?: InventoryItem;
}

export const ReservationItemSchema = SchemaFactory.createForClass(ReservationItem);

// Indexes
ReservationItemSchema.index(
  { line_item_id: 1 },
  { 
    name: "IDX_reservation_item_line_item_id",
    partialFilterExpression: { deleted_at: { $eq: null } }
  }
);

ReservationItemSchema.index(
  { location_id: 1 },
  { 
    name: "IDX_reservation_item_location_id",
    partialFilterExpression: { deleted_at: { $eq: null } }
  }
);

ReservationItemSchema.index(
  { inventory_item: 1 },
  { 
    name: "IDX_reservation_item_inventory_item_id",
    partialFilterExpression: { deleted_at: { $eq: null } }
  }
);

// Additional index for searchable field
ReservationItemSchema.index({ description: 1 });

// Virtual for populated inventory item
ReservationItemSchema.virtual('inventory_item_details', {
  ref: 'InventoryItem',
  localField: 'inventory_item',
  foreignField: '_id',
  justOne: true
});

// Query middleware to exclude soft-deleted documents by default
ReservationItemSchema.pre(/^find/, function(this: any, next) {
  if (this.getFilter().deleted_at == null) {
    this.where({ deleted_at: null });
  }
  next();
});