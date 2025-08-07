import { PartialType } from '@nestjs/mapped-types';
import { CreateFulfillmentAddressDto } from './create-fulfillment-address.dto';

export class UpdateFulfillmentAddressDto extends PartialType(CreateFulfillmentAddressDto) {}
