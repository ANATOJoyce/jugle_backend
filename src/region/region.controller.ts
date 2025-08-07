import { Controller, Get, Post, Patch, Delete, Body, Param, Query, Put, UseGuards } from '@nestjs/common';
import { RegionService } from './region.service';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { UpsertRegionDto } from './dto/upsert-region.dto';
import { ListRegionQueryDto } from './dto/list-region-query.dto';
import { ListCountryQueryDto } from './dto/list-country-query.dto';
import { Roles } from 'src/auth/roles.decorator';
import { Role } from 'src/auth/role.enum';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { RolesGuard } from 'src/auth/roles.guards';
import { AuthGuard } from '@nestjs/passport';

@Controller('regions')
export class RegionController {
  constructor(private readonly regionService: RegionService) {}

  @Post()
  createRegion(@Body() dto: CreateRegionDto) {
    return this.regionService.createRegion(dto);
  }

  @Delete(':id')
  @Roles(Role.ADMIN)
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
  @Roles(Role.ADMIN, Role.VENDOR)
  upsertRegion(@Body() dto: UpsertRegionDto) {
    return this.regionService.upsertRegion(dto);
  }

  @Get()
  @Roles(Role.ADMIN, Role.CUSTOMER, Role.VENDOR)
  listRegions(@Query() query: ListRegionQueryDto) {
    return this.regionService.listRegions(query);
  }

  @Get('count')
  @Roles(Role.ADMIN, Role.CUSTOMER, Role.VENDOR)
  listAndCountRegions(@Query() query: ListRegionQueryDto) {
    return this.regionService.listAndCountRegions(query);
  }

  @Get(':id')
  @Roles(Role.ADMIN, Role.VENDOR)
  retrieveRegion(@Param('id') id: string) {
    return this.regionService.retrieveRegion(id);
  }

  // Countries endpoints



  @Get('/countries')
 @UseGuards(AuthGuard('jwt'), RolesGuard)
@Roles(Role.ADMIN) 
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



@Patch(':id/soft-delete')
async softDelete(@Param('id') id: string) {
  await this.regionService.softDeleteRegion(id);
  return { message: 'Soft deleted' };
}

@Patch(':id/restore')
async restore(@Param('id') id: string) {
  await this.regionService.restoreRegion(id);
  return { message: 'Restored' };
}



// country.controller.ts


@Post("create-country")
async createCountry(@Body() dto: CreateCountryDto) {
  return this.regionService.createCountry(dto);
}

@Put(':id')
async updateCountry(@Param('id') id: string, @Body() dto: UpdateCountryDto) {
  return this.regionService.updateCountry(id, dto);
}

@Delete(':id')
async deleteCountry(@Param('id') id: string) {
  await this.regionService.deleteCountry(id);
  return { message: 'Deleted' };
}

@Post()
async create(@Body() dto: CreateRegionDto) {
  return this.regionService.create(dto);
}

}
