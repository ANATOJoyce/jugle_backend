import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { CustomerAddress } from './address.entity';
import { CustomerGroup } from './customer-group.entity';
import { CustomerGroupCustomer } from './customer-group-customer.entity';

export type CustomerDocument = Customer & Document;

@Schema({
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
})
export class Customer {
  @Prop({ required: true, unique: true })
  id: string; // Auto-generated with "cus" prefix

  @Prop({ type: String, index: true })
  company_name: string;

  @Prop({ type: String, index: true })
  first_name: string;

  @Prop({ type: String, index: true })
  last_name: string;

  @Prop({ 
    type: String, 
    index: true,
    sparse: true // Allows multiple nulls for unique index
  })
  email: string;

  @Prop({ type: String, index: true })
  phone: string;

  @Prop({ default: false })
  has_account: boolean;

  @Prop({ type: Object })
  metadata: Record<string, any>;

  @Prop()
  created_by: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'CustomerGroupCustomer' }] })
    customers: CustomerGroupCustomer[];

  // Many-to-Many through pivot table
  @Prop({ 
    type: [{ 
      type: Types.ObjectId, 
      ref: 'CustomerGroupCustomer' 
    }],
    default: []
  })
  groups: CustomerGroupCustomer[];

  // One-to-Many relationship
  @Prop({ 
    type: [{ 
      type: Types.ObjectId, 
      ref: 'CustomerAddress' 
    }],
    default: []
  })
  addresses: CustomerAddress[];

  @Prop()
  deleted_at: Date;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);

// ID Generation Hook
CustomerSchema.pre('save', function(next) {
  if (!this.id) {
    this.id = `cus_${Math.random().toString(36).substring(2, 11)}`;
  }
  next();
});

// Cascade Operations
CustomerSchema.pre('deleteOne', { document: true, query: false }, async function(next) {
  const customer = this as CustomerDocument;
  
  // Delete addresses (cascade)
  await this.model('CustomerAddress').deleteMany({ _id: { $in: customer.addresses } });
  
  // Detach groups (through pivot table)
  await this.model('CustomerGroupCustomer').deleteMany({ customer: customer._id });
  
  next();
});

// Compound Index for Email+Account
CustomerSchema.index(
  { email: 1, has_account: 1 }, 
  { 
    unique: true,
    partialFilterExpression: { 
      deleted_at: { $exists: false },
      email: { $exists: true }
    }
  }
);

// Additional indexes for searchable fields
CustomerSchema.index({ company_name: 1 });
CustomerSchema.index({ first_name: 1 });
CustomerSchema.index({ last_name: 1 });
CustomerSchema.index({ phone: 1 });