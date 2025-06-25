import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { OrderClaimItem } from './claim-item.entity';

type OrderClaimItemImageDocument = HydratedDocument<OrderClaimItemImage>;

@Schema({
  timestamps: true,
  collection: 'order_claim_item_images',
  autoIndex: true,
  toJSON: {
    virtuals: true,
    transform: (doc, ret) => {
      ret.id = `climg_${doc._id.toString()}`;
      delete ret._id;
      delete ret.__v;
      return ret;
    }
  },
  id: false // Désactive le virtual getter 'id' par défaut de Mongoose
})
export class OrderClaimItemImage {
  @Prop({
    type: Types.ObjectId,
    ref: 'OrderClaimItem',
    required: true,
    index: true
  })
  claim_item: Types.ObjectId;

  @Prop({ type: String, required: true })
  url: string;

  @Prop({ type: Object, required: false })
  metadata?: Record<string, any>;

  @Prop({ type: Date, required: false, index: true })
  deleted_at?: Date;

  // Déclaration explicite pour TypeScript
  _id: Types.ObjectId;
  id: string;
}

export const OrderClaimItemImageSchema = SchemaFactory.createForClass(OrderClaimItemImage);

// Déclaration propre du virtual 'id'
OrderClaimItemImageSchema.virtual('id').get(function(this: OrderClaimItemImageDocument) {
  return `climg_${this._id.toString()}`;
});

// Configuration des index
OrderClaimItemImageSchema.index(
  { deleted_at: 1 },
  {
    name: 'IDX_order_claim_item_image_deleted_at',
    partialFilterExpression: { deleted_at: { $ne: null } }
  }
);

OrderClaimItemImageSchema.index(
  { claim_item: 1 },
  {
    name: 'IDX_order_claim_item_image_claim_item_id',
    partialFilterExpression: { deleted_at: { $ne: null } }
  }
);

export type { OrderClaimItemImageDocument };