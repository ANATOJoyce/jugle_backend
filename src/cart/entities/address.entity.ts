import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Customer } from '../../customer/entities/customer.entity';

export type AddressDocument = Address & Document;

@Schema({ 
  timestamps: true,
  collection: 'cart_address' // Pour correspondre à tableName "cart_address"
})
export class Address {
  @Prop({ required: true, unique: true })
  id: string; // On garde l'ID comme string avec préfixe à générer dans le service

  @Prop({ type: Types.ObjectId, ref: 'Customer' })
  customer: Customer;

  @Prop()
  company: string;

  @Prop()
  first_name: string;

  @Prop()
  last_name: string;

  @Prop()
  address_1: string;

  @Prop()
  address_2: string;

  @Prop()
  city: string;

  @Prop()
  country_code: string;

  @Prop()
  province: string;

  @Prop()
  postal_code: string;

  @Prop()
  phone: string;

  @Prop({ type: Object })
  metadata: Record<string, any>;
}

export const AddressSchema = SchemaFactory.createForClass(Address);

// Optionnel: Middleware pour le préfixe d'ID si nécessaire
AddressSchema.pre('save', function(next) {
  if (!this.id) {
    // Génère un ID avec préfixe "caaddr" comme dans Medusa
    this.id = `caaddr_${Math.random().toString(36).substr(2, 9)}`;
  }
  next();
});