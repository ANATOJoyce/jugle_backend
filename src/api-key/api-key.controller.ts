import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ApiKeyService } from './api-key.service';
import { CreateApiKeyDto } from './dto/create-api-key.dto';
import { UpdateApiKeyDto } from './dto/update-api-key.dto';

@Controller('api-keys')
export class ApiKeyController {
  constructor(private readonly apiKeyService: ApiKeyService) {}

  @Post()
  async create(@Body() createApiKeyDto: CreateApiKeyDto) {
    return this.apiKeyService.create(createApiKeyDto);
  }

  @Get()
  async findAll() {
    return this.apiKeyService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.apiKeyService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateApiKeyDto: UpdateApiKeyDto) {
    // Exemple : Révoquer ou changer le titre
    if (updateApiKeyDto.revoked_by) {
      updateApiKeyDto['revoked_at'] = new Date();
    }
    return this.apiKeyService.update(id, updateApiKeyDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string) {
    return this.apiKeyService.remove(id);
  }
}
 