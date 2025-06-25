// return-item.entity.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { OrderLineItem } from './line-item.entity';
import { Return } from './return.entity';
import { ReturnReason } from './return-reason.entity';

export type ReturnItemDocument = ReturnItem & Document;

@Schema({
  timestamps: true,
  collection: 'return_items',
  toJSON: {
    virtuals: true,
    transform: (doc, ret) => {
      ret.id = `retitem_${doc._id.toString()}`;
      delete ret._id;
      delete ret.__v;
      return ret;
    },
  },
})
export class ReturnItem {
  @Prop({ type: String, required: true }) // bigNumber as string
  quantity: string;

  @Prop({ type: String, default: '0' }) // bigNumber as string
  received_quantity: string;

  @Prop({ type: String, default: '0' }) // bigNumber as string
  damaged_quantity: string;

  @Prop({ type: String })
  note?: string;

  @Prop({ type: Object })
  metadata?: Record<string, unknown>;

  @Prop({
    type: Types.ObjectId,
    ref: 'ReturnReason',
  })
  reason?: Types.ObjectId | ReturnReason;

  @Prop({
    type: Types.ObjectId,
    ref: 'Return',
    required: true,
  })
  return: Types.ObjectId | Return;

  @Prop({
    type: Types.ObjectId,
    ref: 'OrderLineItem',
    required: true,
  })
  item: Types.ObjectId | OrderLineItem;

  @Prop({ type: Date })
  deleted_at?: Date;
}

export const ReturnItemSchema = SchemaFactory.createForClass(ReturnItem);

// Create indexes
ReturnItemSchema.index(
  { return_id: 1 },
  {
    name: 'IDX_return_item_return_id',
    partialFilterExpression: { deleted_at: { $exists: true } },
  }
);

ReturnItemSchema.index(
  { reason_id: 1 },
  {
    name: 'IDX_return_item_reason_id',
    partialFilterExpression: { deleted_at: { $exists: true } },
  }
);

ReturnItemSchema.index(
  { item_id: 1 },
  {
    name: 'IDX_return_item_item_id',
    partialFilterExpression: { deleted_at: { $exists: true } },
  }
);

ReturnItemSchema.index(
  { deleted_at: 1 },
  {
    name: 'IDX_return_item_deleted_at',
    partialFilterExpression: { deleted_at: { $exists: true } },
  }
);
/*

// Relationship management hooks
ReturnItemSchema.post('save', async function(doc: ReturnItemDocument) {
  const updatePromises = [];

  // Update Return's items array
  if (doc.return) {
    await doc.populate('return');
    const returnDoc = doc.return as Return;
    if (Array.isArray(returnDoc.items)) {
      if (!returnDoc.items.includes(doc._id)) {
        updatePromises.push(
          this.model('Return').updateOne(
            { _id: doc.return._id },
            { $addToSet: { items: doc._id } }
          )
        );
      }
    }
  }

  // Update ReturnReason's return_items array if reason exists
  if (doc.reason) {
    await doc.populate('reason');
    const reason = doc.reason as ReturnReason;
    if (Array.isArray(reason.return_items)) {
      if (!reason.return_items.includes(doc._id)) {
        updatePromises.push(
          this.model('ReturnReason').updateOne(
            { _id: doc.reason._id },
            { $addToSet: { return_items: doc._id } }
          )
        );
      }
    }
  }

  // Update OrderLineItem's return_items array
  if (doc.item) {
    await doc.populate('item');
    const item = doc.item as OrderLineItem;
    if (Array.isArray(item.return_items)) {
      if (!item.return_items.includes(doc._id)) {
        updatePromises.push(
          this.model('OrderLineItem').updateOne(
            { _id: doc.item._id },
            { $addToSet: { return_items: doc._id } }
          )
        );
      }
    }
  }

  await Promise.all(updatePromises);
});

ReturnItemSchema.pre('deleteOne', async function() {
  const doc = await this.model.findOne(this.getFilter());
  if (doc) {
    const updatePromises = [];

    // Remove from Return's items array
    if (doc.return) {
      updatePromises.push(
        this.model('Return').updateOne(
          { _id: doc.return },
          { $pull: { items: doc._id } }
        )
      );
    }

    // Remove from ReturnReason's return_items array
    if (doc.reason) {
      updatePromises.push(
        this.model('ReturnReason').updateOne(
          { _id: doc.reason },
          { $pull: { return_items: doc._id } }
        )
      );
    }

    // Remove from OrderLineItem's return_items array
    if (doc.item) {
      updatePromises.push(
        this.model('OrderLineItem').updateOne(
          { _id: doc.item },
          { $pull: { return_items: doc._id } }
        )
      );
    }

    await Promise.all(updatePromises);
  }
});

// Soft delete prevention
ReturnItemSchema.pre('findOneAndDelete', async function() {
  const doc = await this.model.findOne(this.getFilter());
  if (doc) {
    doc.deleted_at = new Date();
    await doc.save();
    throw new Error('Use soft delete instead of hard delete');
  }
});*/