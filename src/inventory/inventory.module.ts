import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InventoryService } from './inventory.service';
import { InventoryController } from './inventory.controller';

import { Inventory, InventorySchema } from './entities/inventory.entity';
import { InventoryItem, InventoryItemSchema } from './entities/inventory-item.entity';
import { InventoryLevel, InventoryLevelSchema } from './entities/inventory-level.entity';
import { ReservationItem, ReservationItemSchema } from './entities/reservation-item.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Inventory.name, schema: InventorySchema },
      { name: InventoryItem.name, schema: InventoryItemSchema },
      { name: InventoryLevel.name, schema: InventoryLevelSchema },
      { name: ReservationItem.name, schema: ReservationItemSchema },
    ]),
  ],
  controllers: [InventoryController],
  providers: [InventoryService],
  exports: [InventoryService],
})
export class InventoryModule {}
