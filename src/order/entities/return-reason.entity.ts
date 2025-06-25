// return-reason.entity.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type ReturnReasonDocument = ReturnReason & Document;

@Schema({
  timestamps: true,
  collection: 'return_reasons',
  toJSON: {
    virtuals: true,
    transform: (doc, ret) => {
      ret.id = `rr_${doc._id.toString()}`;
      delete ret._id;
      delete ret.__v;
      return ret;
    },
  },
})
export class ReturnReason {
  @Prop({ type: String, required: true, index: true, text: true })
  value: string;

  @Prop({ type: String, required: true, index: true, text: true })
  label: string;

  @Prop({ type: String })
  description?: string;

  @Prop({ type: Object })
  metadata?: Record<string, unknown>;

  @Prop({
    type: Types.ObjectId,
    ref: 'ReturnReason',
  })
  parent_return_reason?: Types.ObjectId | ReturnReason;

  @Prop({
    type: [{ type: Types.ObjectId, ref: 'ReturnReason' }],
    default: [],
  })
  return_reason_children: Types.ObjectId[] | ReturnReason[];

  @Prop({ type: Date })
  deleted_at?: Date;
}

export const ReturnReasonSchema = SchemaFactory.createForClass(ReturnReason);

// Create indexes
ReturnReasonSchema.index(
  { deleted_at: 1 },
  {
    name: 'IDX_return_reason_deleted_at',
    partialFilterExpression: { deleted_at: { $exists: true } },
  }
);

ReturnReasonSchema.index(
  { value: 1 },
  {
    name: 'IDX_return_reason_value',
    partialFilterExpression: { deleted_at: { $exists: true } },
  }
);

ReturnReasonSchema.index(
  { parent_return_reason_id: 1 },
  {
    name: 'IDX_return_reason_parent_return_reason_id',
    partialFilterExpression: { deleted_at: { $exists: true } },
  }
);
/*
// Text indexes for searchable fields
ReturnReasonSchema.index(
  { value: 'text', label: 'text' },
  {
    name: 'text_index',
    weights: { value: 2, label: 1 }, // Higher weight for value field
  }
);

// Relationship management hooks
ReturnReasonSchema.post('save', async function(doc: ReturnReasonDocument) {
  // Update parent's children array if parent exists
  if (doc.parent_return_reason) {
    await this.model('ReturnReason').updateOne(
      { _id: doc.parent_return_reason },
      { $addToSet: { return_reason_children: doc._id } }
    );
  }
});

ReturnReasonSchema.pre('deleteOne', async function() {
  const doc = await this.model.findOne(this.getFilter());
  if (doc) {
    // Remove from parent's children array
    if (doc.parent_return_reason) {
      await this.model('ReturnReason').updateOne(
        { _id: doc.parent_return_reason },
        { $pull: { return_reason_children: doc._id } }
      );
    }

    // Update all children to remove their parent reference
    if (doc.return_reason_children && doc.return_reason_children.length > 0) {
      await this.model('ReturnReason').updateMany(
        { _id: { $in: doc.return_reason_children } },
        { $unset: { parent_return_reason: 1 } }
      );
    }
  }
});

// Soft delete prevention
ReturnReasonSchema.pre('findOneAndDelete', async function() {
  const doc = await this.model.findOne(this.getFilter());
  if (doc) {
    doc.deleted_at = new Date();
    await doc.save();
    throw new Error('Use soft delete instead of hard delete');
  }
});
*/