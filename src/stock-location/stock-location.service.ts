import { Injectable } from '@nestjs/common';
import { CreateStockLocationDto } from './dto/create-stock-location.dto';
import { UpdateStockLocationDto } from './dto/update-stock-location.dto';
import { InjectModel } from '@nestjs/mongoose';
import { StockLocation } from './entities/stock-location.entity';
import { StockLocationAddress } from './entities/stock-location-address.entity';
import { Model } from 'mongoose';

@Injectable()
export class StockLocationService {

    constructor(
      @InjectModel(StockLocation.name) private readonly stockLocationModel: Model<StockLocation>,
      @InjectModel(StockLocationAddress.name) private readonly stockLocationAddressModel: Model<StockLocationAddress>,
    ) {}

  create(createStockLocationDto: CreateStockLocationDto) {
    return 'This action adds a new stockLocation';
  }

  findAll() {
    return `This action returns all stockLocation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} stockLocation`;
  }

  update(id: number, updateStockLocationDto: UpdateStockLocationDto) {
    return `This action updates a #${id} stockLocation`;
  }

  remove(id: number) {
    return `This action removes a #${id} stockLocation`;
  }
}
