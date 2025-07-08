import { Module } from '@nestjs/common';
import { StockLocationService } from './stock-location.service';
import { StockLocationController } from './stock-location.controller';
import { StockLocation, StockLocationSchema } from './entities/stock-location.entity';
import { StockLocationAddress, StockLocationAddressSchema } from './entities/stock-location-address.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
        MongooseModule.forFeature([
          { name: StockLocation.name, schema: StockLocationSchema },
          { name: StockLocationAddress.name, schema: StockLocationAddressSchema }
        ])
      ],

  controllers: [StockLocationController],
  providers: [StockLocationService],
})
export class StockLocationModule {}
