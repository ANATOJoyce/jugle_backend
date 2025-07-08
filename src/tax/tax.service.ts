import { Injectable } from '@nestjs/common';
import { CreateTaxDto } from './dto/create-tax.dto';
import { UpdateTaxDto } from './dto/update-tax.dto';
import { TaxProvider } from './entities/tax-provider.entity';
import { TaxRateRule } from './entities/tax-rate-rule.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TaxRate } from './entities/tax-rate.entity';
import { TaxRegion } from './entities/tax-region.entity';
import { Tax } from './entities/tax.entity';

@Injectable()
export class TaxService {

  constructor(
      @InjectModel(TaxProvider.name) private readonly taxproviderModel: Model<Document>,
      @InjectModel(TaxRateRule.name) private readonly taxrateruleModel: Model<Document>,
      @InjectModel(TaxRate.name) private readonly taxrateModel: Model<Document>,
      @InjectModel(TaxRegion.name) private readonly taxregionModel: Model<Document>,
      @InjectModel(Tax.name) private readonly taxModel: Model<Document>,
  ) {}

  create(createTaxDto: CreateTaxDto) {
    return 'This action adds a new tax';
  }

  findAll() {
    return `This action returns all tax`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tax`;
  }

  update(id: number, updateTaxDto: UpdateTaxDto) {
    return `This action updates a #${id} tax`;
  }

  remove(id: number) {
    return `This action removes a #${id} tax`;
  }
  
}
