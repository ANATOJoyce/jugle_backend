// order-claim-item.entity.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { OrderClaim } from './claim.entity';
import { OrderLineItem } from './line-item.entity';
import { OrderClaimItemImage } from './claim-item-image.entity';

export enum ClaimReason {
  MISSING_ITEM = 'missing_item',
  WRONG_ITEM = 'wrong_item',
  PRODUCTION_FAILURE = 'production_failure',
  OTHER = 'other',
}

type OrderClaimItemDocument = OrderClaimItem & Document;

@Schema({
  timestamps: true,
  collection: 'order_claim_items',
  autoIndex: true,
  toJSON: {
    virtuals: true,
    transform: (doc, ret) => {
      ret.id = `claitem_${doc._id.toString()}`;
      delete ret._id;
      delete ret.__v;
      return ret;
    },
  },
  id: false, // Désactive le virtual getter 'id' par défaut
})
export class OrderClaimItem {
  @Prop({
    type: String,
    enum: ClaimReason,
    required: false,
  })
  reason?: ClaimReason;

  @Prop({
    type: Number,
    required: true,
  })
  quantity: number;

  @Prop({
    type: Boolean,
    default: false,
  })
  is_additional_item: boolean;

  @Prop({
    type: String,
    required: false,
  })
  note?: string;

  @Prop({
    type: Object,
    required: false,
  })
  metadata?: Record<string, any>;

  @Prop({
    type: Types.ObjectId,
    ref: 'OrderClaim',
    required: true,
    index: true,
  })
  claim: Types.ObjectId | OrderClaim;

  @Prop({
    type: Types.ObjectId,
    ref: 'OrderLineItem',
    required: true,
    index: true,
  })
  item: Types.ObjectId | OrderLineItem;

  @Prop({
    type: [{ type: Types.ObjectId, ref: 'OrderClaimItemImage' }],
    default: [],
  })
  images: Types.ObjectId[] | OrderClaimItemImage[];

  @Prop({
    type: Date,
    required: false,
    index: true,
  })
  deleted_at?: Date;

  // Déclaration explicite pour TypeScript
  _id: Types.ObjectId;
  id: string;
}

export const OrderClaimItemSchema = SchemaFactory.createForClass(OrderClaimItem);

// Configuration des virtuals et middleware pour le cascading delete
OrderClaimItemSchema.virtual('id').get(function (this: OrderClaimItemDocument) {
  return `claitem_${this._id.toString()}`;
});

// Middleware pour le cascading delete
OrderClaimItemSchema.pre('deleteOne', { document: true }, async function () {
  await this.model('OrderClaimItemImage').deleteMany({ claim_item: this._id });
});

// Configuration des index
OrderClaimItemSchema.index(
  { claim: 1 },
  {
    name: 'IDX_order_claim_item_claim_id',
    partialFilterExpression: { deleted_at: { $ne: null } },
  },
);

OrderClaimItemSchema.index(
  { item: 1 },
  {
    name: 'IDX_order_claim_item_item_id',
    partialFilterExpression: { deleted_at: { $ne: null } },
  },
);

OrderClaimItemSchema.index(
  { deleted_at: 1 },
  {
    name: 'IDX_order_claim_item_deleted_at',
    partialFilterExpression: { deleted_at: { $ne: null } },
  },
);