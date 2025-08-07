import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { InventoryItem } from './entities/inventory-item.entity';
import { InventoryLevel } from './entities/inventory-level.entity';
import { Inventory } from './entities/inventory.entity';
import { ReservationItem } from './entities/reservation-item.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ReserveStockDto } from './dto/reserve-stock.dto';

@Injectable()
export class InventoryService {

    constructor(
    @InjectModel(InventoryItem.name) private readonly inventoryItemModel: Model<InventoryItem>,
    @InjectModel(InventoryLevel.name) private readonly inventoryLevelModel: Model<InventoryLevel>,
    @InjectModel(Inventory.name) private readonly inventoryModel: Model<Inventory>,
    @InjectModel(ReservationItem.name) private readonly reservationItemModel: Model<ReservationItem>,
  ) {}

 async create(createInventoryDto: CreateInventoryDto): Promise<Inventory> {
    const created = new this.inventoryModel(createInventoryDto);
    return created.save();
  }

  async findAll(): Promise<Inventory[]> {
    return this.inventoryModel.find().populate('product').populate('location').exec();
  }

  async findOne(sku: string): Promise<Inventory> {
    const inventory = await this.inventoryModel
      .findOne({ sku })
      .populate('product')
      .populate('location')
      .exec();

    if (!inventory) {
      throw new NotFoundException(`Inventory with SKU ${sku} not found`);
    }

    return inventory;
  }


  async update(sku: string, updateInventoryDto: UpdateInventoryDto): Promise<Inventory> {
    const updated = await this.inventoryModel
      .findOneAndUpdate({ sku }, updateInventoryDto, { new: true })
      .exec();

    if (!updated) {
      throw new NotFoundException(`Inventory with SKU ${sku} not found`);
    }

    return updated;
  }

  // src/inventory/inventory.service.ts
async findBySku(sku: string): Promise<Inventory | null> {
  return this.inventoryModel.findOne({ sku }).exec();
}



  async reserveStock(reserveStockDto: ReserveStockDto): Promise<Inventory> {
    const { sku, quantity } = reserveStockDto;
    
    const item = await this.inventoryModel.findOne({ sku }).exec();
    if (!item) {
      throw new Error('Inventory item not found');
    }

    if (item.stock_quantity < quantity) {
      throw new Error('Insufficient stock');
    }

    item.stock_quantity -= quantity;
    return item.save();
  }

  async checkLowStock(threshold: number): Promise<Inventory[]> {
    return this.inventoryModel.find({ 
      stock_quantity: { $lt: threshold } 
    }).populate('product').exec();
  }
}
