import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreatePromotionDto } from './dto/create-promotion.dto';
import { UpdatePromotionDto } from './dto/update-promotion.dto';

import { ApplicationMethod } from './entities/application-method.entity';
import { CampaignBudget } from './entities/campaign-budget.entity';
import { Campaign } from './entities/campaign.entity';
import { PromotionRule } from './entities/promotion-rule.entity';
import { PromotionRuleValue } from './entities/promotion-rule-value.entity';
import { Promotion } from './entities/promotion.entity';

@Injectable()
export class PromotionService {

  constructor(
    @InjectModel(ApplicationMethod.name) private readonly applicationMethodModel: Model<ApplicationMethod>,
    @InjectModel(CampaignBudget.name) private readonly campaignBudgetModel: Model<CampaignBudget>,
    @InjectModel(Campaign.name) private readonly campaignModel: Model<Campaign>,
    @InjectModel(PromotionRule.name) private readonly promotionRuleModel: Model<PromotionRule>,
    @InjectModel(PromotionRuleValue.name) private readonly promotionRuleValueModel: Model<PromotionRuleValue>,
    @InjectModel(Promotion.name) private readonly promotionModel: Model<Promotion>,
  ) {}

  async create(createPromotionDto: CreatePromotionDto) {
    const createdPromotion = new this.promotionModel(createPromotionDto);
    return createdPromotion.save();
  }

  async findAll() {
    return this.promotionModel.find().exec();
  }

  async findOne(id: string) {
    return this.promotionModel.findById(id).exec();
  }

  async update(id: string, updatePromotionDto: UpdatePromotionDto) {
    return this.promotionModel.findByIdAndUpdate(id, updatePromotionDto, { new: true }).exec();
  }

  async remove(id: string) {
    return this.promotionModel.findByIdAndDelete(id).exec();
  }
}
