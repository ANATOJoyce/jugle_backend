import { Controller, Post, Get, Patch, Delete, Body, Param } from '@nestjs/common';
import { StockLocationService } from './stock-location.service';
import { CreateStockLocationDto } from './dto/create-stock-location.dto';
import { UpdateStockLocationDto } from './dto/update-stock-location.dto';
import { Role } from 'src/auth/role.enum';
import { Roles } from 'src/auth/roles.decorator';

@Controller('stock-locations')
export class StockLocationController {
  constructor(private readonly stockLocationService: StockLocationService) {}

  @Post()
  @Roles(Role.ADMIN,Role.VENDOR)
  create(@Body() dto: CreateStockLocationDto) {
    return this.stockLocationService.create(dto);
  }

  @Get()
  @Roles(Role.ADMIN, Role.VENDOR)
  findAll() {
    return this.stockLocationService.findAll();
  }

  @Get(':id')
  @Roles(Role.ADMIN, Role.VENDOR)
  findOne(@Param('id') id: string) {
    return this.stockLocationService.findOne(id);
  }

  @Patch(':id')
  @Roles(Role.ADMIN, Role.VENDOR)
  update(@Param('id') id: string, @Body() dto: UpdateStockLocationDto) {
    return this.stockLocationService.update(id, dto);
  }

  @Delete(':id')
  @Roles(Role.ADMIN, Role.VENDOR)
  remove(@Param('id') id: string) {
    return this.stockLocationService.remove(id);
  }
}
