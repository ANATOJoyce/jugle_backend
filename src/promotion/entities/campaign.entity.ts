import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { CampaignBudget } from './campaign-budget.entity';
import { Promotion } from './promotion.entity';

@Schema({
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
  collection: 'promotion_campaign',
})
export class Campaign extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  description?: string;

  @Prop({ required: true, unique: true })
  campaign_identifier: string;

  @Prop()
  starts_at?: Date;

  @Prop()
  ends_at?: Date;

  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: 'CampaignBudget',
  })
  budget?: CampaignBudget;

  @Prop({
    type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Promotion' }],
  })
  promotions?: Promotion[];
}

export const CampaignSchema = SchemaFactory.createForClass(Campaign);

// Add indexes
CampaignSchema.index({ campaign_identifier: 1 }, { unique: true });
CampaignSchema.index({ name: 'text', description: 'text' });

// Add cascading delete for budget
CampaignSchema.pre('deleteOne', { document: true, query: false }, async function (next) {
  if (this.budget) {
    await this.model('CampaignBudget').deleteOne({ _id: this.budget });
  }
  next();
});