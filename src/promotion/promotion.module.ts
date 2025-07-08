import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { PromotionService } from './promotion.service';
import { PromotionController } from './promotion.controller';

import { ApplicationMethod, ApplicationMethodSchema } from './entities/application-method.entity';
import { CampaignBudget, CampaignBudgetSchema } from './entities/campaign-budget.entity';
import { Campaign, CampaignSchema } from './entities/campaign.entity';
import { PromotionRule, PromotionRuleSchema } from './entities/promotion-rule.entity';
import { PromotionRuleValue, PromotionRuleValueSchema } from './entities/promotion-rule-value.entity';
import { Promotion, PromotionSchema } from './entities/promotion.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ApplicationMethod.name, schema: ApplicationMethodSchema },
      { name: CampaignBudget.name, schema: CampaignBudgetSchema },
      { name: Campaign.name, schema: CampaignSchema },
      { name: PromotionRule.name, schema: PromotionRuleSchema },
      { name: PromotionRuleValue.name, schema: PromotionRuleValueSchema },
      { name: Promotion.name, schema: PromotionSchema },
    ]),
  ],
  controllers: [PromotionController],
  providers: [PromotionService],
})
export class PromotionModule {}
