import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Customer, CustomerSchema } from './entities/customer.entity';
import { CustomerAddress, CustomerAddressSchema } from './entities/address.entity';
import { CustomerGroup, CustomerGroupSchema } from './entities/customer-group.entity';
import { CustomerGroupCustomer, CustomerGroupCustomerSchema } from './entities/customer-group-customer.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Customer.name, schema: CustomerSchema },
      { name: CustomerAddress.name, schema: CustomerAddressSchema },
      { name: CustomerGroup.name, schema: CustomerGroupSchema },
      { name: CustomerGroupCustomer.name, schema: CustomerGroupCustomerSchema },
    ]),
  ],
  controllers: [CustomerController],
  providers: [CustomerService],
  exports: [CustomerService], //  utiliser CustomerService ailleurs
})
export class CustomerModule {}