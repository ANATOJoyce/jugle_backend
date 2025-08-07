import { Injectable } from '@nestjs/common';
import { CreateSalesChannelDto } from './dto/create-sales-channel.dto';
import { UpdateSalesChannelDto } from './dto/update-sales-channel.dto';
import { SalesChannel, SalesChannelDocument } from './entities/sales-channel.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class SalesChannelService {

    constructor(
      @InjectModel(SalesChannel.name) private readonly salesModel: Model<SalesChannelDocument>,
    ) {}
  async findAll() {
    return this.salesModel.find().exec();
  }

  async create(dto: { name: string; description?: string }) {
    return this.salesModel.create(dto);
  }

  async update(id: string, dto: Partial<{ name: string; description: string }>) {
    return this.salesModel.findByIdAndUpdate(id, dto, { new: true });
  }

  async delete(id: string) {
    await this.salesModel.findByIdAndDelete(id);
  }

  async toggleDisable(id: string, is_disabled: boolean) {
    return this.salesModel.findByIdAndUpdate(id, { is_disabled }, { new: true });
  }
}
