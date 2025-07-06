import { Controller, Get, Post, Patch, Delete, Body, Param, Query } from '@nestjs/common';
import { RegionService } from './region.service';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { UpsertRegionDto } from './dto/upsert-region.dto';
import { ListRegionQueryDto } from './dto/list-region-query.dto';
import { ListCountryQueryDto } from './dto/list-country-query.dto';

@Controller('regions')
export class RegionController {
  constructor(private readonly regionService: RegionService) {}

  @Post()
  createRegion(@Body() dto: CreateRegionDto) {
    return this.regionService.createRegion(dto);
  }

  @Delete(':id')
  deleteRegion(@Param('id') id: string) {
    return this.regionService.deleteRegion(id);
  }

  @Patch(':id/soft-delete')
  softDeleteRegion(@Param('id') id: string) {
    return this.regionService.softDeleteRegion(id);
  }

  @Patch(':id/restore')
  restoreRegion(@Param('id') id: string) {
    return this.regionService.restoreRegion(id);
  }

  @Patch(':id')
  updateRegion(@Param('id') id: string, @Body() dto: UpdateRegionDto) {
    return this.regionService.updateRegion(id, dto);
  }

  @Post('upsert')
  upsertRegion(@Body() dto: UpsertRegionDto) {
    return this.regionService.upsertRegion(dto);
  }

  @Get()
  listRegions(@Query() query: ListRegionQueryDto) {
    return this.regionService.listRegions(query);
  }

  @Get('count')
  listAndCountRegions(@Query() query: ListRegionQueryDto) {
    return this.regionService.listAndCountRegions(query);
  }

  @Get(':id')
  retrieveRegion(@Param('id') id: string) {
    return this.regionService.retrieveRegion(id);
  }

  // Countries endpoints

  @Get('countries')
  listCountries(@Query() query: ListCountryQueryDto) {
    return this.regionService.listCountries(query);
  }

  @Get('countries/count')
  listAndCountCountries(@Query() query: ListCountryQueryDto) {
    return this.regionService.listAndCountCountries(query);
  }

  @Get('countries/:id')
  retrieveCountry(@Param('id') id: string) {
    return this.regionService.retrieveCountry(id);
  }
}
