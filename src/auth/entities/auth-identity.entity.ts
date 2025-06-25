import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { ProviderIdentity } from './provider-identity.entity';

export type AuthIdentityDocument = AuthIdentity & Document;

@Schema({ timestamps: true }) // Ajoute createdAt et updatedAt
export class AuthIdentity {
  @Prop({ required: true, unique: true })
  id: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'ProviderIdentity' }] })
  providerIdentities: ProviderIdentity[];
}

export const AuthIdentitySchema = SchemaFactory.createForClass(AuthIdentity);