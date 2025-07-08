import { Module } from '@nestjs/common';
import { TaxService } from './tax.service';
import { TaxController } from './tax.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TaxProvider, TaxProviderSchema } from './entities/tax-provider.entity';
import { TaxRate, TaxRateSchema } from './entities/tax-rate.entity';
import { TaxRateRule, TaxRateRuleSchema } from './entities/tax-rate-rule.entity';
import { TaxRegion, TaxRegionSchema } from './entities/tax-region.entity';
import { Tax, TaxSchema } from './entities/tax.entity';

@Module({

    imports: [
    MongooseModule.forFeature([
      { name: TaxProvider.name, schema: TaxProviderSchema },
      { name: TaxRateRule.name, schema: TaxRateRuleSchema },
      { name: TaxRate.name, schema: TaxRateSchema },
      { name: TaxRegion.name, schema: TaxRegionSchema },
      { name: Tax.name, schema: TaxSchema },
    ]),
  ],
      
  controllers: [TaxController],
  providers: [TaxService],
})
export class TaxModule {}
