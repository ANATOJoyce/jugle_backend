import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({
  timestamps: true,
  collection: 'orders',
  toJSON: {
    virtuals: true,
    transform: (_, ret) => {
      ret.id = ret._id.toString();
      delete ret._id;
      delete ret.__v;
      return ret;
    },
  },
})
export class Order extends Document {
  @Prop({ required: true, unique: true })
  declare id: string; // ex: "order_01GBVGVSAF8VZFKQ9C0KFHXWYZ"

 @Prop({ type: Number, unique: true })
 display_id?: number | null;


  @Prop({ required: true })
  status: string;

  @Prop({ required: true })
  currency_code: string;

  @Prop({ type: Object, default: {} })
  metadata?: Record<string, unknown>;

  @Prop({ type: Types.ObjectId, ref: 'OrderAddress', default: null })
  shipping_address?: Types.ObjectId | null;

  @Prop({ type: Types.ObjectId, ref: 'OrderAddress', default: null })
  billing_address?: Types.ObjectId | null;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'OrderSummary' }], default: [] })
  summaries?: Types.ObjectId[]; // ou OrderSummary[]

  @Prop({ type: [{ type: Types.ObjectId, ref: 'OrderItem' }], default: [] })
  items?: Types.ObjectId[]; // ou OrderItem[]

  @Prop({ type: [{ type: Types.ObjectId, ref: 'OrderShippingMethod' }], default: [] })
  shipping_methods?: Types.ObjectId[]; // ou OrderShippingMethod[]

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Payment' }], default: [] })
  payments?: Types.ObjectId[]; // ou Payment[]

  @Prop()
  deleted_at?: Date;
}
export type OrderDocument = Order & Document;


export const OrderSchema = SchemaFactory.createForClass(Order);

