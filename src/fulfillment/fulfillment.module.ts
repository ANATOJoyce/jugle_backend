import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FulfillmentService } from './fulfillment.service';
import { FulfillmentController } from './fulfillment.controller';

import { FulfillmentItem, FulfillmentItemSchema } from './entities/fulfillment-item.entity';
import { FulfillmentLabel, FulfillmentLabelSchema } from './entities/fulfillment-label.entity';
import { FulfillmentProvider, FulfillmentProviderSchema } from './entities/fulfillment-provider.entity';
import { FulfillmentSet, FulfillmentSetSchema } from './entities/fulfillment-set.entity';
import { Fulfillment, FulfillmentSchema } from './entities/fulfillment.entity';

import { GeoZone, GeoZoneSchema } from './entities/geo-zone.entity';
import { ServiceZone, ServiceZoneSchema } from './entities/service-zone.entity';
import { ShippingOption, ShippingOptionSchema } from './entities/shipping-option.entity';
import { ShippingOptionRule, ShippingOptionRuleSchema } from './entities/shipping-option-rule.entity';
import { ShippingOptionType, ShippingOptionTypeSchema } from './entities/shipping-option-type.entity';
import { ShippingProfile, ShippingProfileSchema } from './entities/shipping-profile.entity';
import { FulfillmentAddress, FulfillmentAddressSchema } from './entities/fulfillment-address.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: FulfillmentAddress.name, schema: FulfillmentAddressSchema },
      { name: FulfillmentItem.name, schema: FulfillmentItemSchema },
      { name: FulfillmentLabel.name, schema: FulfillmentLabelSchema },
      { name: FulfillmentProvider.name, schema: FulfillmentProviderSchema },
      { name: FulfillmentSet.name, schema: FulfillmentSetSchema },
      { name: Fulfillment.name, schema: FulfillmentSchema },
      { name: GeoZone.name, schema: GeoZoneSchema },
      { name: ServiceZone.name, schema: ServiceZoneSchema },
      { name: ShippingOption.name, schema: ShippingOptionSchema },
      { name: ShippingOptionRule.name, schema: ShippingOptionRuleSchema },
      { name: ShippingOptionType.name, schema: ShippingOptionTypeSchema },
      { name: ShippingProfile.name, schema: ShippingProfileSchema },
    ]),
  ],
  controllers: [FulfillmentController],
  providers: [FulfillmentService],
  exports: [FulfillmentService],
})
export class FulfillmentModule {}
