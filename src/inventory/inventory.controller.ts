import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { ReserveStockDto } from './dto/reserve-stock.dto';

@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

 @Post()
  create(@Body() createInventoryDto: CreateInventoryDto) {
    return this.inventoryService.create(createInventoryDto);
  }

  @Get()
  findAll() {
    return this.inventoryService.findAll();
  }

  @Get(':sku')
  findOne(@Param('sku') sku: string) {
    return this.inventoryService.findOne(sku);
  }

  @Put(':sku')
  update(@Param('sku') sku: string, @Body() updateInventoryDto: UpdateInventoryDto) {
    return this.inventoryService.update(sku, updateInventoryDto);
  }

  @Post('reserve')
  reserveStock(@Body() reserveStockDto: ReserveStockDto) {
    return this.inventoryService.reserveStock(reserveStockDto);
  }

  @Get('alerts/low-stock/:threshold')
  checkLowStock(@Param('threshold') threshold: number) {
    return this.inventoryService.checkLowStock(Number(threshold));
  }
}
