import { Module } from '@nestjs/common';
import { SalesChannelService } from './sales-channel.service';
import { SalesChannelController } from './sales-channel.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SalesChannel, SalesChannelSchema } from './entities/sales-channel.entity';

@Module({

  imports: [
    MongooseModule.forFeature([{ name: SalesChannel.name, schema: SalesChannelSchema }]),
  ],
  
  controllers: [SalesChannelController],
  providers: [SalesChannelService],
})
export class SalesChannelModule {}
