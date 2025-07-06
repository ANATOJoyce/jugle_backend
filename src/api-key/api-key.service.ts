import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ApiKey, ApiKeyDocument } from './entities/api-key.entity';
import { CreateApiKeyDto } from './dto/create-api-key.dto';
import { UpdateApiKeyDto } from './dto/update-api-key.dto';
import * as crypto from 'crypto';

@Injectable()
export class ApiKeyService {
  constructor(
    @InjectModel(ApiKey.name) private apiKeyModel: Model<ApiKeyDocument>,
  ) {}

  async create(createApiKeyDto: CreateApiKeyDto): Promise<ApiKey> {
    const salt = crypto.randomBytes(16).toString('hex');
    const token = crypto.randomBytes(32).toString('hex');
    const redacted = `${token.slice(0, 4)}...${token.slice(-4)}`;

    const newApiKey = new this.apiKeyModel({
      ...createApiKeyDto,
      token,
      salt,
      redacted,
    });

    return newApiKey.save();
  }

  async findAll(): Promise<ApiKey[]> {
    return this.apiKeyModel.find().exec();
  }

  async findOne(id: string): Promise<ApiKey | null> {
    return this.apiKeyModel.findById(id).exec();
  }

  async update(id: string, updateApiKeyDto: UpdateApiKeyDto): Promise<ApiKey | null> {
    return this.apiKeyModel.findByIdAndUpdate(id, updateApiKeyDto, { new: true }).exec();
  }

  async remove(id: string): Promise<ApiKey | null> {
    return this.apiKeyModel.findByIdAndDelete(id).exec();
  }
}
