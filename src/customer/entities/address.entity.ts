import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Customer } from './customer.entity';

export type CustomerAddressDocument = CustomerAddress & Document;

@Schema({
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
})
export class CustomerAddress {
  @Prop({ required: true, unique: true })
  id: string; // Préfixe "cuaddr" généré automatiquement

  @Prop({ type: String, index: true })
  address_name: string;

  @Prop({ default: false })
  is_default_shipping: boolean;

  @Prop({ default: false })
  is_default_billing: boolean;

  @Prop({ type: String, index: true })
  company: string;

  @Prop({ type: String, index: true })
  first_name: string;

  @Prop({ type: String, index: true })
  last_name: string;

  @Prop({ type: String, index: true })
  address_1: string;

  @Prop({ type: String, index: true })
  address_2: string;

  @Prop({ type: String, index: true })
  city: string;

  @Prop({ type: String })
  country_code: string;

  @Prop({ type: String, index: true })
  province: string;

  @Prop({ type: String, index: true })
  postal_code: string;

  @Prop({ type: String })
  phone: string;

  @Prop({ type: Object })
  metadata: Record<string, any>;

  @Prop({ type: Types.ObjectId, ref: 'Customer', required: true })
  customer: Customer;

  @Prop()
  deleted_at: Date;
}

export const CustomerAddressSchema = SchemaFactory.createForClass(CustomerAddress);

// Middleware pour générer l'ID avec préfixe
CustomerAddressSchema.pre('save', function(next) {
  if (!this.id) {
    this.id = `cuaddr_${Math.random().toString(36).substring(2, 11)}`;
  }
  next();
});

// Index uniques conditionnels
CustomerAddressSchema.index(
  { customer: 1 },
  { 
    unique: true,
    partialFilterExpression: { is_default_billing: true },
    name: 'IDX_customer_address_unique_customer_billing'
  }
);

CustomerAddressSchema.index(
  { customer: 1 },
  { 
    unique: true,
    partialFilterExpression: { is_default_shipping: true },
    name: 'IDX_customer_address_unique_customer_shipping'
  }
);

// Index pour les champs searchable
CustomerAddressSchema.index({ address_name: 1 });
CustomerAddressSchema.index({ company: 1 });
CustomerAddressSchema.index({ first_name: 1 });
CustomerAddressSchema.index({ last_name: 1 });
CustomerAddressSchema.index({ address_1: 1 });
CustomerAddressSchema.index({ city: 1 });
CustomerAddressSchema.index({ province: 1 });
CustomerAddressSchema.index({ postal_code: 1 });