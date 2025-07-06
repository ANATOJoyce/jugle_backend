import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';
import { Order } from './order.entity';
import { Return } from './return.entity';
import { OrderExchange } from './exchange.entity';
import { OrderClaim } from './claim.entity';
import { CreateOrderTransactionDto } from '../dto/create-order-transaction.dto';

@Schema({ collection: 'order_transactions', timestamps: true })
export class OrderTransaction extends Document {
  @Prop({ type: Number, default: 1 })
  version: number;

  @Prop({ type: Number, required: true })
  amount: number;

  @Prop({ type: String, required: true })
  currency_code: string;

  @Prop({ type: String, default: null })
  reference: string | null;

  @Prop({ type: String, default: null })
  reference_id: string | null;

  @Prop({ 
    type: SchemaTypes.ObjectId, 
    ref: 'Order',
    required: true 
  })
  order: Order | Types.ObjectId;

  @Prop({ 
    type: SchemaTypes.ObjectId, 
    ref: 'Return',
    default: null 
  })
  return: Return | Types.ObjectId | null;

  @Prop({ 
    type: SchemaTypes.ObjectId, 
    ref: 'OrderExchange',
    default: null 
  })
  exchange: OrderExchange | Types.ObjectId | null;

  @Prop({ 
    type: SchemaTypes.ObjectId, 
    ref: 'OrderClaim',
    default: null 
  })
  claim: OrderClaim | Types.ObjectId | null;

  @Prop({ type: Date, default: null })
  deleted_at: Date | null;


 // ✅ Factory pour normaliser DTO ➜ Document
  static createFromDto(dto: Partial<OrderTransaction>): Partial<OrderTransaction> {
    const toNull = <T>(val: T | undefined): T | null => val === undefined ? null : val;

    const toObjectIdOrNull = (val: any): Types.ObjectId | null => {
      if (val === undefined || val === null) return null;
      return new Types.ObjectId(val);
    };

    return {
      ...dto,
      reference: toNull(dto.reference),
      reference_id: toNull(dto.reference_id),
      return: toObjectIdOrNull(dto.return),
      exchange: toObjectIdOrNull(dto.exchange),
      claim: toObjectIdOrNull(dto.claim),
    };

  }




}
export const OrderTransactionSchema = SchemaFactory.createForClass(OrderTransaction);
