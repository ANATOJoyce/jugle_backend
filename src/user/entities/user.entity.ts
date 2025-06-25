import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
  collection: 'users',
  toJSON: {
    virtuals: true,
    transform: (_, ret) => {
      ret.id = ret._id.toString();
      delete ret._id;
      delete ret.__v;
      return ret;
    },
  },
})
export class User extends Document {
 
  @Prop({ unique: true, sparse: true }) 
  userId?: string;

  @Prop({ required: false, index: true })
  first_name?: string;

  @Prop({ required: false, index: true })
  last_name?: string;

  @Prop({ required: true, unique: true, index: true })
  email: string;

  @Prop({ required: false })
  avatar_url?: string;

  @Prop({ type: Object, default: null })
  metadata?: Record<string, unknown>;

  @Prop({ type: Date, default: null })
  deleted_at?: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.index(
  { email: 1 },
  {
    unique: true,
    partialFilterExpression: { deleted_at: { $eq: null } },
  },
);
