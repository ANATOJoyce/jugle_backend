import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { SalesChannelService } from './sales-channel.service';
import { CreateSalesChannelDto } from './dto/create-sales-channel.dto';
import { UpdateSalesChannelDto } from './dto/update-sales-channel.dto';
import { Role } from 'src/auth/role.enum';
import { Roles } from 'src/auth/roles.decorator';

@Controller('sales-channel')
export class SalesChannelController {
  constructor(private readonly salesChannelService: SalesChannelService) {}

  @Get()
  findAll() {
    return this.salesChannelService.findAll();
  }

  @Get()
  async list() {
    return this.salesChannelService.findAll();
  }

  @Post()
  async create(@Body() dto: { name: string; description?: string }) {
    return this.salesChannelService.create(dto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: { name?: string; description?: string }) {
    return this.salesChannelService.update(id, dto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this.salesChannelService.delete(id);
    return { message: 'Deleted' };
  }

  @Patch(':id/toggle-disable')
  async toggleDisable(@Param('id') id: string, @Body('is_disabled') is_disabled: boolean) {
    return this.salesChannelService.toggleDisable(id, is_disabled);
  }
}
