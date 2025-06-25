import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from '../../user/entities/user.entity';

export type ApiKeyDocument = ApiKey & Document;

@Schema({ timestamps: true })
export class ApiKey {
  @Prop({ required: true, unique: true })
  key: string; // UUID ou token crypté

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  user: User;

  @Prop({ default: true })
  is_active: boolean;

  @Prop()
  expires_at?: Date;
}

export const ApiKeySchema = SchemaFactory.createForClass(ApiKey);