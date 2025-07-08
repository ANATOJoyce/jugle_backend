import { Injectable } from '@nestjs/common';
import { CreateFulfillmentDto } from './dto/create-fulfillment.dto';
import { UpdateFulfillmentDto } from './dto/update-fulfillment.dto';
import { Address } from 'src/cart/entities/address.entity';
import { FulfillmentItem } from './entities/fulfillment-item.entity';
import { FulfillmentLabel } from './entities/fulfillment-label.entity';
import { FulfillmentProvider } from './entities/fulfillment-provider.entity';
import { FulfillmentSet } from './entities/fulfillment-set.entity';
import { Fulfillment } from './entities/fulfillment.entity';
import { GeoZone } from './entities/geo-zone.entity';
import { ServiceZone } from './entities/service-zone.entity';
import { ShippingOption } from './entities/shipping-option.entity';
import { ShippingOptionRule } from './entities/shipping-option-rule.entity';
import { ShippingOptionType } from './entities/shipping-option-type.entity';
import { ShippingProfile } from './entities/shipping-profile.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FulfillmentAddress } from './entities/fulfillment-address.entity';

@Injectable()
export class FulfillmentService {
   constructor(
    @InjectModel(FulfillmentAddress.name) private readonly fulfillmentAddressModel: Model<FulfillmentAddress>,
    @InjectModel(FulfillmentItem.name) private readonly fulfillmentItemModel: Model<FulfillmentItem>,
    @InjectModel(FulfillmentLabel.name) private readonly fulfillmentLabelModel: Model<FulfillmentLabel>,
    @InjectModel(FulfillmentProvider.name) private readonly fulfillmentProviderModel: Model<FulfillmentProvider>,
    @InjectModel(FulfillmentSet.name) private readonly fulfillmentSetModel: Model<FulfillmentSet>,
    @InjectModel(GeoZone.name) private readonly geoZoneModel: Model<GeoZone>,
    @InjectModel(ServiceZone.name) private readonly serviceZoneModel: Model<ServiceZone>,
    @InjectModel(ShippingOption.name) private readonly shippingOptionModel: Model<ShippingOption>,
    @InjectModel(Fulfillment.name) private readonly fulfillmentModel: Model<Fulfillment>,
    @InjectModel(ShippingOptionRule.name) private readonly shippingOptionRuleModel: Model<ShippingOptionRule>,
    @InjectModel(ShippingOptionType.name) private readonly shippingOptionTypeModel: Model<ShippingOptionType>,
    @InjectModel(ShippingProfile.name) private readonly shippingProfileModel: Model<ShippingProfile>,
) {}


  create(createFulfillmentDto: CreateFulfillmentDto) {
    return 'This action adds a new fulfillment';
  }

  findAll() {
    return `This action returns all fulfillment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fulfillment`;
  }

  update(id: number, updateFulfillmentDto: UpdateFulfillmentDto) {
    return `This action updates a #${id} fulfillment`;
  }

  remove(id: number) {
    return `This action removes a #${id} fulfillment`;
  }
}
