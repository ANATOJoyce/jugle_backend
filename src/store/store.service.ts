import { Injectable } from '@nestjs/common';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { Currency, CurrencyDocument } from 'src/currency/entities/currency.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Store } from './entities/store.entity';
import { Model } from 'mongoose';

@Injectable()
export class StoreService {

  constructor(
      @InjectModel(Currency.name) private readonly currencyModel: Model<CurrencyDocument>,
      @InjectModel(Store.name) private readonly storeModel: Model<Document>,
    ) {}

  create(createStoreDto: CreateStoreDto) {
    return 'This action adds a new store';
  }

  findAll() {
    return `This action returns all store`;
  }

  findOne(id: number) {
    return `This action returns a #${id} store`;
  }

  update(id: number, updateStoreDto: UpdateStoreDto) {

  
    return `This action updates a #${id} store`;
  }

  remove(id: number) {
    return `This action removes a #${id} store`;
  }
}
