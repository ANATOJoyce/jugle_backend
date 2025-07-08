import { Injectable } from '@nestjs/common';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { InventoryItem } from './entities/inventory-item.entity';
import { InventoryLevel } from './entities/inventory-level.entity';
import { Inventory } from './entities/inventory.entity';
import { ReservationItem } from './entities/reservation-item.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class InventoryService {

    constructor(
    @InjectModel(InventoryItem.name) private readonly inventoryItemModel: Model<InventoryItem>,
    @InjectModel(InventoryLevel.name) private readonly inventoryLevelModel: Model<InventoryLevel>,
    @InjectModel(Inventory.name) private readonly inventoryModel: Model<Inventory>,
    @InjectModel(ReservationItem.name) private readonly reservationItemModel: Model<ReservationItem>,
  ) {}

  create(createInventoryDto: CreateInventoryDto) {
    return 'This action adds a new inventory';
  }

  findAll() {
    return `This action returns all inventory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} inventory`;
  }

  update(id: number, updateInventoryDto: UpdateInventoryDto) {
    return `This action updates a #${id} inventory`;
  }

  remove(id: number) {
    return `This action removes a #${id} inventory`;
  }
}
