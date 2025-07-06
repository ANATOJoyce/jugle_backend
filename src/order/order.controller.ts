// src/order/order.controller.ts
import { Body, Controller, Post } from '@nestjs/common';
import { OrderService } from './order.service';
import {
  CreateOrderChangeActionDTO,
} from './dto/create-order-change-action.dto';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post('add-action')
  async addOrderAction(
    @Body() data: CreateOrderChangeActionDTO | CreateOrderChangeActionDTO[],
  ) {
    return this.orderService.addOrderAction(data);
  }
}
