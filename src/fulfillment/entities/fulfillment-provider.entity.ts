import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type FulfillmentProviderDocument = FulfillmentProvider & Document;

@Schema({
  timestamps: true, // Ajoute automatiquement createdAt et updatedAt
  toJSON: { 
    virtuals: true,
    transform: function(doc, ret) {
      delete ret._id;
      delete ret.__v;
      return ret;
    }
  }
})
export class FulfillmentProvider {
  @Prop({
    type: String,
    required: true,
    unique: true,
    default: () => `serpro_${new Types.ObjectId().toString()}`,
  })
  id: string;

  @Prop({
    type: Boolean,
    default: true,
  })
  is_enabled: boolean;
}

export const FulfillmentProviderSchema = SchemaFactory.createForClass(FulfillmentProvider);

// Middleware pour s'assurer que l'ID est généré avant la sauvegarde
FulfillmentProviderSchema.pre('save', function(next) {
  if (!this.id) {
    this.id = `serpro_${new Types.ObjectId().toString()}`;
  }
  next();
});