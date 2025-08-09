import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ApiKeyDocument = ApiKey & Document;

@Schema({
  timestamps: true,
  collection: 'api_keys',
  toJSON: {
    virtuals: true,
    transform: (_, ret: { _id: any; __v?: number; [key: string]: any }) => {
      ret.id = ret._id.toString();
      delete ret._id;
      delete ret.__v;
      return ret;
    }

  },
})
export class ApiKey {
  @Prop({ required: true, unique: true, index: true })
  token: string;

  @Prop({ required: true })
  salt: string;

  @Prop({ required: true, index: true })
  redacted: string;

  @Prop({ required: true, index: true })
  title: string;

  @Prop({ required: true, enum: ['publishable', 'secret'] })
  type: 'publishable' | 'secret';

  @Prop({ type: Date, default: null })
  last_used_at?: Date;

  @Prop({ required: true })
  created_by: string;

  @Prop({ default: null })
  revoked_by?: string;

  @Prop({ type: Date, default: null })
  revoked_at?: Date;
}

export const ApiKeySchema = SchemaFactory.createForClass(ApiKey);

