import { Module } from '@nestjs/common';
import { RegionService } from './region.service';
import { RegionController } from './region.controller';
import { Region, RegionSchema } from './entities/region.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { Country, CountrySchema } from './entities/country.entity';

@Module({
  imports: [
      MongooseModule.forFeature([
        { name: Region.name, schema: RegionSchema },
        { name: Country.name, schema: CountrySchema },
      ]),
    ],
  controllers: [RegionController],
  providers: [RegionService],
})
export class RegionModule {}
