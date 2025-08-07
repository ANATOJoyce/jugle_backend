import { PartialType } from '@nestjs/mapped-types';
import { AddCustomerToGroupDto } from './add-customer-to-group.dto';

export class UpdateCustomerGroupCustomerDto extends PartialType(AddCustomerToGroupDto) {}
