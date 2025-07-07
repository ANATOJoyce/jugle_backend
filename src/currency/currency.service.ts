import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Currency, CurrencyDocument } from './entities/currency.entity';

@Injectable()
export class CurrencyService {
  constructor(
    @InjectModel(Currency.name) private currencyModel: Model<CurrencyDocument>,
  ) {}

  /**
   * Liste toutes les devises et retourne un count total + array
   */
  async listAndCountCurrencies(): Promise<{ count: number; currencies: Currency[] }> {
    const currencies = await this.currencyModel.find().exec();
    const count = await this.currencyModel.countDocuments().exec();
    return { count, currencies };
  }

  /**
   * Liste simple des devises
   */
  async listCurrencies(): Promise<Currency[]> {
    return this.currencyModel.find().exec();
  }

  /**
   * Récupérer une devise spécifique par code
   */
  async retrieveCurrency(code: string): Promise<Currency> {
    const currency = await this.currencyModel.findOne({ code }).exec();
    if (!currency) {
      throw new NotFoundException(`Currency with code ${code} not found`);
    }
    return currency;
  }
}
