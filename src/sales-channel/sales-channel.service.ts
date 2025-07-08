import { Injectable } from '@nestjs/common';
import { CreateSalesChannelDto } from './dto/create-sales-channel.dto';
import { UpdateSalesChannelDto } from './dto/update-sales-channel.dto';
import { SalesChannel } from './entities/sales-channel.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class SalesChannelService {

    constructor(
      @InjectModel(SalesChannel.name) private readonly salesModel: Model<SalesChannel>,
    ) {}
  
  create(createSalesChannelDto: CreateSalesChannelDto) {
    return 'This action adds a new salesChannel';
  }

  findAll() {
    return `This action returns all salesChannel`;
  }

  findOne(id: number) {
    return `This action returns a #${id} salesChannel`;
  }

  update(id: number, updateSalesChannelDto: UpdateSalesChannelDto) {
    return `This action updates a #${id} salesChannel`;
  }

  remove(id: number) {
    return `This action removes a #${id} salesChannel`;
  }
}
