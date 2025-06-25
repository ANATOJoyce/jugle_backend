import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Address } from './address.entity';
import { CreditLine } from './credit-line.entity';
import { LineItem } from './line-item.entity';
import { ShippingMethod } from './shipping-method.entity';

export type CartDocument = Cart & Document;

@Schema({
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
})
export class Cart {
  @Prop({ required: true, unique: true })
  id: string; // Préfixe "cart" géré dans le middleware

  @Prop()
  region_id: string;

  @Prop()
  customer_id: string;

  @Prop()
  sales_channel_id: string;

  @Prop()
  email: string;

  @Prop({ required: true })
  currency_code: string;

  @Prop({ type: Object })
  metadata: Record<string, any>;

  @Prop()
  completed_at: Date;

  @Prop({ type: Types.ObjectId, ref: 'Address' })
  shipping_address: Address;

  @Prop({ type: Types.ObjectId, ref: 'Address' })
  billing_address: Address;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'LineItem' }] })
  items: LineItem[];

  @Prop({ type: [{ type: Types.ObjectId, ref: 'CreditLine' }] })
  credit_lines: CreditLine[];

  @Prop({ type: [{ type: Types.ObjectId, ref: 'ShippingMethod' }] })
  shipping_methods: ShippingMethod[];

  @Prop()
  deleted_at: Date;
}

export const CartSchema = SchemaFactory.createForClass(Cart);

// Middleware pour générer l'ID avec préfixe
CartSchema.pre('save', function(next) {
  if (!this.id) {
    this.id = `cart_${Math.random().toString(36).substring(2, 11)}`;
  }
  next();
});

// Middleware pour la suppression en cascade
CartSchema.pre('deleteOne', { document: true, query: false }, async function(next) {
  const cart = this as CartDocument;
  
  // Suppression des éléments liés
  await this.model('LineItem').deleteMany({ _id: { $in: cart.items } });
  await this.model('ShippingMethod').deleteMany({ _id: { $in: cart.shipping_methods } });
  await this.model('CreditLine').deleteMany({ _id: { $in: cart.credit_lines } });
  
  // Suppression des adresses
  if (cart.shipping_address) {
    await this.model('Address').deleteOne({ _id: cart.shipping_address });
  }
  if (cart.billing_address) {
    await this.model('Address').deleteOne({ _id: cart.billing_address });
  }
  
  next();
});

// Indexes
CartSchema.index(
  { region_id: 1 },
  { 
    name: 'IDX_cart_region_id',
    partialFilterExpression: { 
      deleted_at: { $exists: false },
      region_id: { $exists: true }
    }
  }
);

CartSchema.index(
  { customer_id: 1 },
  { 
    name: 'IDX_cart_customer_id',
    partialFilterExpression: { 
      deleted_at: { $exists: false },
      customer_id: { $exists: true }
    }
  }
);

CartSchema.index(
  { sales_channel_id: 1 },
  { 
    name: 'IDX_cart_sales_channel_id',
    partialFilterExpression: { 
      deleted_at: { $exists: false },
      sales_channel_id: { $exists: true }
    }
  }
);

CartSchema.index(
  { currency_code: 1 },
  { 
    name: 'IDX_cart_curency_code',
    partialFilterExpression: { deleted_at: { $exists: false } }
  }
);

CartSchema.index(
  { shipping_address: 1 },
  { 
    name: 'IDX_cart_shipping_address_id',
    partialFilterExpression: { 
      deleted_at: { $exists: false },
      shipping_address: { $exists: true }
    }
  }
);

CartSchema.index(
  { billing_address: 1 },
  { 
    name: 'IDX_cart_billing_address_id',
    partialFilterExpression: { 
      deleted_at: { $exists: false },
      billing_address: { $exists: true }
    }
  }
);