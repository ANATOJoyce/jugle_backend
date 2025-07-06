import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Order, OrderDocument } from './entities/order.entity';
import { OrderTransaction } from './entities/transaction.entity';
import { CreateOrderChangeActionDTO } from './dto/create-order-change-action.dto';

export interface OrderChangeAction {
  id: string;
  order_id: string;
  order_change_id: string;
  action: string;
  created_at: string;
}

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
    @InjectModel(OrderTransaction.name) private transactionModel: Model<OrderTransaction>,
  ) {}

  private orderChangeActions: OrderChangeAction[] = [];

  async addOrderAction(
    data: CreateOrderChangeActionDTO | CreateOrderChangeActionDTO[],
  ): Promise<OrderChangeAction | OrderChangeAction[]> {
    const actions = Array.isArray(data) ? data : [data];

    const createdActions = actions.map(action => {
      const newAction: OrderChangeAction = {
        id: crypto.randomUUID(),
        ...action,
        created_at: new Date().toISOString(),
      };
      this.orderChangeActions.push(newAction);
      return newAction;
    });

    return Array.isArray(data) ? createdActions : createdActions[0];
  }

  // Exemple d'une méthode pour créer une commande MongoDB
  async createOrder(orderData: Partial<Order>): Promise<Order> {
    const createdOrder = new this.orderModel(orderData);
    return createdOrder.save();
  }

  // Exemple pour récupérer toutes les commandes
  async findAllOrders(): Promise<Order[]> {
    return this.orderModel.find().exec();
  }
}
