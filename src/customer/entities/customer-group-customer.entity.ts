import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Customer } from './customer.entity';
import { CustomerGroup } from './customer-group.entity';

export type CustomerGroupCustomerDocument = CustomerGroupCustomer & Document;

@Schema({
  timestamps: true,  // Ajoute created_at et updated_at
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
})
export class CustomerGroupCustomer {
  @Prop({ required: true, unique: true })
  id: string; // Préfixe "cusgc" généré automatiquement

  @Prop()
  created_by: string;

  @Prop({ type: Object })
  metadata: Record<string, any>;

  @Prop({ 
    type: Types.ObjectId, 
    ref: 'Customer',
    required: true 
  })
  customer: Customer;

  @Prop({ 
    type: Types.ObjectId, 
    ref: 'CustomerGroup',
    required: true 
  })
  customer_group: CustomerGroup;

  @Prop()
  deleted_at: Date;
}

export const CustomerGroupCustomerSchema = SchemaFactory.createForClass(CustomerGroupCustomer);

// Middleware pour générer l'ID avec préfixe
CustomerGroupCustomerSchema.pre('save', function(next) {
  if (!this.id) {
    this.id = `cusgc_${Math.random().toString(36).substring(2, 11)}`;
  }
  next();
});

// Index composé pour éviter les doublons
CustomerGroupCustomerSchema.index(
  { customer: 1, customer_group: 1 },
  { unique: true }
);

// Index pour les requêtes inverses
CustomerGroupCustomerSchema.index({ customer: 1 });
CustomerGroupCustomerSchema.index({ customer_group: 1 });