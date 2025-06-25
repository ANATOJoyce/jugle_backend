import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { InventoryItem as InventoryItemType } from './inventory-item.entity';
export type InventoryLevelDocument = InventoryLevel & Document;

@Schema({
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (doc, ret) => {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
      return ret;
    }
  }
})
export class InventoryLevel {
  @Prop({
    type: String,
    required: true,
    unique: true,
    default: () => `ilev_${new Types.ObjectId()}`
  })
  id: string;

  @Prop({ 
    type: String, 
    required: true,
    index: true 
  })
  location_id: string;

  @Prop({ 
    type: Number, 
    default: 0,
    get: (v: number) => Math.round(v),
    set: (v: number) => Math.round(v)
  })
  stocked_quantity: number;

  @Prop({ 
    type: Number, 
    default: 0,
    get: (v: number) => Math.round(v),
    set: (v: number) => Math.round(v)
  })
  reserved_quantity: number;

  @Prop({ 
    type: Number, 
    default: 0,
    get: (v: number) => Math.round(v),
    set: (v: number) => Math.round(v)
  })
  incoming_quantity: number;

  @Prop({ type: Object, default: null })
  metadata?: Record<string, unknown>;

  @Prop({ 
    type: Types.ObjectId, 
    ref: 'InventoryItem',
    required: true,
    index: true
  })
  inventory_item: Types.ObjectId;

  @Prop({
    type: Number,
    default: 0,
    virtual: true,
    get: function() {
      return this.stocked_quantity - this.reserved_quantity;
    }
  })
  available_quantity: number;

  @Prop({ type: Date, default: null, select: false })
  deleted_at?: Date;
}

export const InventoryLevelSchema = SchemaFactory.createForClass(InventoryLevel);

// Compound unique index with soft delete filter
InventoryLevelSchema.index(
  { inventory_item: 1, location_id: 1 },
  {
    name: "IDX_inventory_level_location_id_inventory_item_id",
    unique: true,
    partialFilterExpression: { deleted_at: { $eq: null } }
  }
);

// Additional indexes
InventoryLevelSchema.index(
  { inventory_item: 1 },
  {
    name: "IDX_inventory_level_inventory_item_id",
    partialFilterExpression: { deleted_at: { $eq: null } }
  }
);

InventoryLevelSchema.index(
  { location_id: 1 },
  {
    name: "IDX_inventory_level_location_id",
    partialFilterExpression: { deleted_at: { $eq: null } }
  }
);

// Query middleware to exclude soft-deleted documents
InventoryLevelSchema.pre(/^find/, function(this: any, next) {
  if (this.getFilter().deleted_at === undefined) {
    this.where({ deleted_at: null });
  }
  next();
});