import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model, Types } from 'mongoose';
import { StockLocationAddress, StockLocationAddressDocument } from './entities/stock-location-address.entity';
import { CreateStockLocationDto } from './dto/create-stock-location.dto';
import { UpdateStockLocationDto } from './dto/update-stock-location.dto';
import { StockLocation, StockLocationDocument } from './entities/stock-location.entity';

@Injectable()
export class StockLocationService {
  constructor(
    @InjectModel(StockLocation.name) private readonly stockLocationModel: Model<StockLocationDocument>,
    @InjectModel(StockLocationAddress.name) private readonly stockLocationAddressModel: Model<StockLocationAddressDocument>,
  ) {}

  async create(createDto: CreateStockLocationDto) {
  let addressId: Types.ObjectId | undefined;

  if (createDto.address) {
    const address = new this.stockLocationAddressModel(createDto.address);
    const savedAddress = await address.save();
    addressId = savedAddress._id as Types.ObjectId;  // <== CAST ici
  }

  const stockLocation = new this.stockLocationModel({
    name: createDto.name,
    address: addressId,
  });

  return stockLocation.save();
}


  async findAll() {
    return this.stockLocationModel.find().populate('address').exec();
  }

  async findOne(id: string) {
    const stockLocation = await this.stockLocationModel.findById(id).populate('address').exec();
    if (!stockLocation) {
      throw new NotFoundException(`StockLocation with id ${id} not found`);
    }
    return stockLocation;
  }

  async update(id: string, updateStockLocationDto: UpdateStockLocationDto): Promise<StockLocation> {
    if (!isValidObjectId(id)) {
  throw new NotFoundException(`Invalid ID`);
  }

    const stockLocation = await this.stockLocationModel.findById(id).exec();
    if (!stockLocation) {
      throw new NotFoundException(`StockLocation with ID ${id} not found`);
    }

    // Mettre à jour les champs de base
    if (updateStockLocationDto.name !== undefined) {
      stockLocation.name = updateStockLocationDto.name;
    }
   

    // Si l'adresse est fournie
    if (updateStockLocationDto.address) {
      let addressDoc: StockLocationAddressDocument | null = null;

      if (stockLocation.address) {
        //  Cast explicite pour forcer TypeScript
        const addressId = stockLocation.address as Types.ObjectId;
        addressDoc = await this.stockLocationAddressModel.findById(addressId).exec();
      }

      if (addressDoc) {
        // Mettre à jour l'adresse existante
        Object.assign(addressDoc, updateStockLocationDto.address);
      } else {
        // Créer une nouvelle adresse
        addressDoc = new this.stockLocationAddressModel(updateStockLocationDto.address);
      }

      await addressDoc.save();
      stockLocation.address = addressDoc._id as Types.ObjectId;
    }

    await stockLocation.save();

    // Recharger avec le `populate`
    const updated = await this.stockLocationModel
      .findById(stockLocation._id)
      .populate('address')
      .exec();

    if (!updated) {
      //  TypeScript veut une garantie qu'on ne retournera pas `null`
      throw new NotFoundException(`Could not reload updated StockLocation`);
    }

    return updated;
  }
  
  async remove(id: string) {
    const stockLocation = await this.stockLocationModel.findById(id);
    if (!stockLocation) throw new NotFoundException(`StockLocation with id ${id} not found`);

    if (stockLocation.address) {
      await this.stockLocationAddressModel.findByIdAndDelete(stockLocation.address);
    }

    await this.stockLocationModel.findByIdAndDelete(id);
    return { message: `StockLocation with id ${id} deleted` };
  }
}
