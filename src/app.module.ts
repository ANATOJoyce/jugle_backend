import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiKeyModule } from './api-key/api-key.module';
import { AuthModule } from './auth/auth.module';
import { CurrencyModule } from './currency/currency.module';
import { CustomerModule } from './customer/customer.module';
import { FulfillmentModule } from './fulfillment/fulfillment.module';
import { InventoryModule } from './inventory/inventory.module';
import { OrderModule } from './order/order.module';
import { PaymentModule } from './payment/payment.module';
import { PricingModule } from './pricing/pricing.module';
import { ProductModule } from './product/product.module';
import { PromotionModule } from './promotion/promotion.module';
import { RegionModule } from './region/region.module';
import { SalesChannelModule } from './sales-channel/sales-channel.module';
import { StockLocationModule } from './stock-location/stock-location.module';
import { StoreModule } from './store/store.module';
import { TaxModule } from './tax/tax.module';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './auth/roles.guards';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { PoliciesGuard } from './auth/policies.guard';
import { CaslModule } from './casl/casl.module';

@Module({
  imports: [
    ApiKeyModule,
    AuthModule, 
    CaslModule,
    //CartModule, 
    CurrencyModule, 
    CustomerModule, 
    FulfillmentModule, 
    InventoryModule, 
    OrderModule, 
    PaymentModule, 
    PricingModule, 
    ProductModule, 
    PromotionModule, 
    RegionModule, 
    SalesChannelModule, 
    StockLocationModule, 
    StoreModule, 
    TaxModule, 
    UserModule,
    ConfigModule.forRoot(
      {
   isGlobal: true,
    }
    ),
    MongooseModule.forRootAsync({
    useFactory: (configService: ConfigService) => ({
      uri: configService.get<string>('DB_URI'),
    }),
    inject: [ConfigService],
  }),
  ],
  controllers: [AppController],
  providers: [AppService,

    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },

    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },

      {
      provide: APP_GUARD,
      useClass: PoliciesGuard,
    },
  ],
  
})
export class AppModule {}
