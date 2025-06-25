import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { OrderAddress } from './address.entity';
import { OrderCreditLine } from './credit-line.entity';
import { OrderItem } from './order-item.entity';
import { OrderShipping } from './order-shipping-method.entity';
import { OrderSummary } from './order-summary.entity';
import { OrderTransaction } from './transaction.entity';
import { Return } from './return.entity';

export enum OrderStatus {
  PENDING = 'pending',
  COMPLETED = 'completed',
  ARCHIVED = 'archived',
  CANCELED = 'canceled',
  REQUIRES_ACTION = 'requires_action'
}

export type OrderDocument = Order & Document;

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
export class Order {
  @Prop({
    type: String,
    required: true,
    unique: true,
    default: () => `order_${new Types.ObjectId().toString()}`,
  })
  id: string;

  @Prop({ type: Number, unique: true })
  display_id: number;

  @Prop({ type: String, default: null, index: true })
  region_id: string | null;

  @Prop({ type: String, default: null, index: true })
  customer_id: string | null;

  @Prop({ type: Number, default: 1 })
  version: number;

  @Prop({ type: String, default: null, index: true })
  sales_channel_id: string | null;

  @Prop({
    type: String,
    enum: OrderStatus,
    default: OrderStatus.PENDING
  })
  status: OrderStatus;

  @Prop({ type: Boolean, default: false, index: true })
  is_draft_order: boolean;

  @Prop({ type: String, default: null, index: true })
  email: string | null;

  @Prop({ type: String, required: true, index: true })
  currency_code: string;

  @Prop({ type: Boolean, default: null })
  no_notification: boolean | null;

  @Prop({ type: Object, default: null })
  metadata: Record<string, any> | null;

  @Prop({ type: Date, default: null })
  canceled_at: Date | null;

  @Prop({ type: Types.ObjectId, ref: 'OrderAddress', default: null })
  shipping_address: Types.ObjectId | OrderAddress | null;

  @Prop({ type: Types.ObjectId, ref: 'OrderAddress', default: null })
  billing_address: Types.ObjectId | OrderAddress | null;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'OrderSummary' }], default: [] })
  summary: Types.ObjectId[];

  @Prop({ type: [{ type: Types.ObjectId, ref: 'OrderItem' }], default: [] })
  items: Types.ObjectId[];

  @Prop({ type: [{ type: Types.ObjectId, ref: 'OrderShipping' }], default: [] })
  shipping_methods: Types.ObjectId[];

  @Prop({ type: [{ type: Types.ObjectId, ref: 'OrderTransaction' }], default: [] })
  transactions: Types.ObjectId[];

  @Prop({ type: [{ type: Types.ObjectId, ref: 'OrderCreditLine' }], default: [] })
  credit_lines: Types.ObjectId[];

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Return' }], default: [] })
  returns: Types.ObjectId[];

  @Prop({ type: Date, default: null })
  deleted_at: Date | null;

  // Virtuals for populated relationships
  public shipping_address_details?: OrderAddress;
  public billing_address_details?: OrderAddress;
  public summary_details?: OrderSummary[];
  public items_details?: OrderItem[];
  public shipping_methods_details?: OrderShipping[];
  public transactions_details?: OrderTransaction[];
  public credit_lines_details?: OrderCreditLine[];
  public returns_details?: Return[];
}

export const OrderSchema = SchemaFactory.createForClass(Order);
/*
// Auto-increment display_id
OrderSchema.pre('save', async function(next) {
  if (this.isNew) {
    const lastOrder = await this.constructor.findOne().sort('-display_id');
    this.display_id = lastOrder ? lastOrder.display_id + 1 : 1;
  }
  next();
});*/

// Indexes
OrderSchema.index({ display_id: 1 }, { 
  name: "IDX_order_display_id",
  partialFilterExpression: { deleted_at: { $ne: null } }
});

OrderSchema.index({ region_id: 1 }, { 
  name: "IDX_order_region_id",
  partialFilterExpression: { deleted_at: { $ne: null } }
});

OrderSchema.index({ customer_id: 1 }, { 
  name: "IDX_order_customer_id",
  partialFilterExpression: { deleted_at: { $ne: null } }
});

OrderSchema.index({ sales_channel_id: 1 }, { 
  name: "IDX_order_sales_channel_id",
  partialFilterExpression: { deleted_at: { $ne: null } }
});

OrderSchema.index({ deleted_at: 1 }, { 
  name: "IDX_order_deleted_at",
  partialFilterExpression: { deleted_at: { $ne: null } }
});

OrderSchema.index({ currency_code: 1 }, { 
  name: "IDX_order_currency_code",
  partialFilterExpression: { deleted_at: { $ne: null } }
});

OrderSchema.index({ shipping_address: 1 }, { 
  name: "IDX_order_shipping_address_id",
  partialFilterExpression: { deleted_at: { $ne: null } }
});

OrderSchema.index({ billing_address: 1 }, { 
  name: "IDX_order_billing_address_id",
  partialFilterExpression: { deleted_at: { $ne: null } }
});

OrderSchema.index({ is_draft_order: 1 }, { 
  name: "IDX_order_is_draft_order",
  partialFilterExpression: { deleted_at: { $ne: null } }
});

// Virtuals for populated relationships
OrderSchema.virtual('shipping_address_details', {
  ref: 'OrderAddress',
  localField: 'shipping_address',
  foreignField: '_id',
  justOne: true
});

OrderSchema.virtual('billing_address_details', {
  ref: 'OrderAddress',
  localField: 'billing_address',
  foreignField: '_id',
  justOne: true
});

OrderSchema.virtual('summary_details', {
  ref: 'OrderSummary',
  localField: 'summary',
  foreignField: '_id'
});

OrderSchema.virtual('items_details', {
  ref: 'OrderItem',
  localField: 'items',
  foreignField: '_id'
});

OrderSchema.virtual('shipping_methods_details', {
  ref: 'OrderShipping',
  localField: 'shipping_methods',
  foreignField: '_id'
});

OrderSchema.virtual('transactions_details', {
  ref: 'OrderTransaction',
  localField: 'transactions',
  foreignField: '_id'
});

OrderSchema.virtual('credit_lines_details', {
  ref: 'OrderCreditLine',
  localField: 'credit_lines',
  foreignField: '_id'
});

OrderSchema.virtual('returns_details', {
  ref: 'Return',
  localField: 'returns',
  foreignField: '_id'
});

// Cascade delete middleware
OrderSchema.pre('findOneAndDelete', async function(next) {
  const order = await this.model.findOne(this.getFilter());
  
  if (order) {
    await Promise.all([
      this.model.db.model('OrderSummary').deleteMany({ order: order._id }),
      this.model.db.model('OrderItem').deleteMany({ order: order._id }),
      this.model.db.model('OrderShipping').deleteMany({ order: order._id }),
      this.model.db.model('OrderTransaction').deleteMany({ order: order._id })
    ]);
  }
  
  next();
});