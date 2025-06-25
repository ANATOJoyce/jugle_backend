import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Customer } from './customer.entity';
import { CustomerGroupCustomer } from './customer-group-customer.entity';

export type CustomerGroupDocument = CustomerGroup & Document;

@Schema({
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
})
export class CustomerGroup {
  @Prop({ required: true, unique: true })
  id: string; // Préfixe "cusgroup" géré dans le middleware

  @Prop({ type: String, required: true, index: true })
  name: string;

  @Prop({ type: Object })
  metadata: Record<string, any>;

  @Prop()
  created_by: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'CustomerGroupCustomer' }] })
  customers: CustomerGroupCustomer[];

  @Prop()
  deleted_at: Date;
}

export const CustomerGroupSchema = SchemaFactory.createForClass(CustomerGroup);

// Middleware pour générer l'ID avec préfixe
CustomerGroupSchema.pre('save', function(next) {
  if (!this.id) {
    this.id = `cusgroup_${Math.random().toString(36).substring(2, 11)}`;
  }
  next();
});

// Middleware pour détacher les customers (via table pivot)
CustomerGroupSchema.pre('deleteOne', { document: true, query: false }, async function(next) {
  const group = this as CustomerGroupDocument;
  await this.model('CustomerGroupCustomer').deleteMany({ group: group._id });
  next();
});

// Index unique sur le nom (avec soft delete)
CustomerGroupSchema.index(
  { name: 1 },
  {
    unique: true,
    partialFilterExpression: { deleted_at: { $exists: false } }
  }
);