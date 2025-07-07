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
      delete ret.password; // Optionnel : pour ne jamais exposer le mot de passe en JSON
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

  @Prop({ required: true })
  password: string;  // <-- ajout obligatoire !
  
  @Prop({ required: false, index: true })
  phone?: string;

  @Prop({ required: false, index: true })
  role?: string;


  @Prop({ type: Date, default: null })
  deleted_at?: Date;

}

export const UserSchema = SchemaFactory.createForClass(User);
