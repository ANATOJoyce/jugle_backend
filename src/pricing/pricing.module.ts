import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PricingService } from './pricing.service';
import { PriceList, PriceListSchema } from './entities/price-list.entity';
import { PriceListRule, PriceListRuleSchema } from './entities/price-list-rule.entity';
import { PricePreference, PricePreferenceSchema } from './entities/price-preference.entity';
import { PriceRule, PriceRuleSchema } from './entities/price-rule.entity';
import { PriceSet, PriceSetSchema } from './entities/price-set.entity';
import { MoneyAmount, MoneyAmountSchema } from './entities/money-amount.entity';
import { Customer, CustomerSchema } from 'src/customer/entities/customer.entity';
import { PricingController } from './pricing.controller';
import { Price, PriceSchema } from './entities/price.entity';
import { ProductVariant, ProductVariantSchema } from 'src/product/entities/product-variant.entity';
import { Currency, CurrencySchema } from 'src/currency/entities/currency.entity';


@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PriceList.name, schema: PriceListSchema },
      { name: PriceListRule.name, schema: PriceListRuleSchema },
      { name: PricePreference.name, schema: PricePreferenceSchema },
      { name: PriceRule.name, schema: PriceRuleSchema },
      { name: PriceSet.name, schema: PriceSetSchema },
      { name: Price.name, schema: PriceSchema }, 
      { name: Customer.name, schema: CustomerSchema }, 
      { name: MoneyAmount.name, schema: MoneyAmountSchema },
      { name: ProductVariant.name, schema: ProductVariantSchema },
      { name: Currency.name, schema: CurrencySchema },
      

    ]),
  ],
  controllers: [PricingController],
  providers: [PricingService],
  exports: [PricingService],
})
export class PricingModule {}