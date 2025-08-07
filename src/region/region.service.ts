import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Connection, ClientSession } from 'mongoose';
import { Region, RegionDocument } from './entities/region.entity';
import { Country, CountryDocument } from './entities/country.entity';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { UpsertRegionDto } from './dto/upsert-region.dto';
import { ListRegionQueryDto } from './dto/list-region-query.dto';
import { ListCountryQueryDto } from './dto/list-country-query.dto';
import { InjectConnection } from '@nestjs/mongoose';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';

@Injectable()
export class RegionService {
  constructor(
    @InjectModel(Region.name) private readonly regionModel: Model<RegionDocument>,
    @InjectModel(Country.name) private readonly countryModel: Model<CountryDocument>,
    @InjectConnection() private readonly connection: Connection,
  ) {}

  async createRegion(createDto: CreateRegionDto): Promise<RegionDocument> {
    return new this.regionModel(createDto).save();
  }

  async deleteRegion(id: string): Promise<void> {
    const res = await this.regionModel.findByIdAndDelete(id);
    if (!res) throw new NotFoundException(`Region with id ${id} not found`);
  }

  async softDeleteRegion(id: string): Promise<void> {
    const region = await this.regionModel.findById(id);
    if (!region) throw new NotFoundException(`Region with id ${id} not found`);
    region.metadata = { ...region.metadata, deleted: true };
    await region.save();
  }

  async restoreRegion(id: string): Promise<void> {
    const region = await this.regionModel.findById(id);
    if (!region) throw new NotFoundException(`Region with id ${id} not found`);
    region.metadata = { ...region.metadata, deleted: false };
    await region.save();
  }

  async updateRegion(id: string, updateDto: UpdateRegionDto): Promise<RegionDocument> {
    const region = await this.regionModel.findByIdAndUpdate(id, updateDto, { new: true });
    if (!region) throw new NotFoundException(`Region with id ${id} not found`);
    return region;
  }

 /**
   * Upsert: Met à jour ou crée une région.
   */
  async upsertRegion(regionDto: UpsertRegionDto): Promise<RegionDocument> {
    const session: ClientSession = await this.connection.startSession();
    session.startTransaction();

    try {
      let region: RegionDocument;

      if (regionDto.id) {
        const found = await this.regionModel.findById(regionDto.id).session(session);
        if (!found) {
          throw new NotFoundException(`Region with id ${regionDto.id} not found`);
        }
        region = found;

        // Met à jour les champs autorisés
        region.name = regionDto.name;
        region.currency_code = regionDto.currency_code;
        region.automatic_taxes = regionDto.automatic_taxes ?? region.automatic_taxes;
        region.metadata = regionDto.metadata ?? region.metadata;

        await region.save({ session });
      } else {
        region = new this.regionModel(regionDto);
        await region.save({ session });
      }

      await session.commitTransaction();
      return region;

    } catch (err) {
      await session.abortTransaction();
      throw err;

    } finally {
      session.endSession();
    }
  }


  async listRegions(query?: ListRegionQueryDto): Promise<RegionDocument[]> {
    const filter: any = {};
    if (query?.name) filter.name = { $regex: query.name, $options: 'i' };
    if (query?.currency_code) filter.currency_code = query.currency_code.toUpperCase();
    return this.regionModel.find(filter).exec();
  }

  async listAndCountRegions(query?: ListRegionQueryDto): Promise<{ regions: RegionDocument[], count: number }> {
    const filter: any = {};
    if (query?.name) filter.name = { $regex: query.name, $options: 'i' };
    if (query?.currency_code) filter.currency_code = query.currency_code.toUpperCase();

    const [regions, count] = await Promise.all([
      this.regionModel.find(filter).exec(),
      this.regionModel.countDocuments(filter),
    ]);
    return { regions, count };
  }

  async retrieveRegion(id: string): Promise<RegionDocument> {
    const region = await this.regionModel.findById(id);
    if (!region) throw new NotFoundException(`Region with id ${id} not found`);
    return region;
  }

  async listCountries(query?: ListCountryQueryDto): Promise<CountryDocument[]> {
    const filter: any = {};
    if (query?.name) filter.name = { $regex: query.name, $options: 'i' };
    if (query?.iso_2) filter.iso_2 = query.iso_2.toUpperCase();
    if (query?.region_id) filter.region = query.region_id;

    return this.countryModel.find(filter).exec();
  }

  async listAndCountCountries(query?: ListCountryQueryDto): Promise<{ countries: CountryDocument[], count: number }> {
    const filter: any = {};
    if (query?.name) filter.name = { $regex: query.name, $options: 'i' };
    if (query?.iso_2) filter.iso_2 = query.iso_2.toUpperCase();
    if (query?.region_id) filter.region = query.region_id;

    const [countries, count] = await Promise.all([
      this.countryModel.find(filter).exec(),
      this.countryModel.countDocuments(filter),
    ]);
    return { countries, count };
  }

  async retrieveCountry(id: string): Promise<CountryDocument> {
    const country = await this.countryModel.findById(id);
    if (!country) throw new NotFoundException(`Country with id ${id} not found`);
    return country;
  }

  async createCountry(dto: CreateCountryDto) {
    return this.countryModel.create(dto);
  }

  async updateCountry(id: string, dto: UpdateCountryDto) {
    return this.countryModel.findByIdAndUpdate(id, dto, { new: true });
  }

  async deleteCountry(id: string) {
    return this.countryModel.findByIdAndDelete(id);
  }

  // region.service.ts
async create(dto: CreateRegionDto): Promise<Region> {
  const countries = await this.countryModel.find({
    _id: { $in: dto.countryIds },
  });

  const region = new this.regionModel({
    name: dto.name,
    currency_code: dto.currency_code,
    automatic_taxes: dto.automatic_taxes ?? true,
    countries: countries.map(c => c._id),
    metadata: dto.metadata || {},
  });

  return region.save();
}

}
