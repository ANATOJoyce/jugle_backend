import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException, Logger } from '@nestjs/common';
import { CreateCartDTO } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { LineItemAdjustment, LineItemAdjustmentDocument } from './entities/line-item-adjustment.entity';
import { FilterQuery, Model, SortOrder, Types } from 'mongoose';
import { CreateLineItemAdjustmentDTO } from './dto/create-line-item-adjustement.dto';
import { LineItem, LineItemDocument } from './entities/line-item.entity';
import { Cart, CartDocument } from './entities/cart.entity';
import { CreateLineItemTaxLineDTO } from './dto/create-line-item-tax-line.dto';
import { LineItemTaxLine, LineItemTaxLineDocument } from './entities/line-item-tax-line.entity';
import { CreateLineItemForCartDTO } from './dto/create-line-item-for-cart.dto';
import { ShippingMethodAdjustment, ShippingMethodAdjustmentDocument } from './entities/shipping-method-adjustment.entity';
import { CreateShippingMethodAdjustmentDTO } from './dto/shipping-method-adjustement.dto';
import { CreateShippingMethodTaxLineDTO } from './dto/create-shipping-method-tax-line.dto';
import { plainToInstance } from 'class-transformer';
import { CartShippingMethodDTO } from './dto/cart-shipping-method-dto';
import { Address, AddressDocument, ShippingMethod, ShippingMethodTaxLine } from './entities/index.entity';
import { CartAddressDTO } from './dto/cart-address.dto';
import { CreateAddressDTO } from './dto/create-address.dto';
import { CartDTO } from './dto/cart.dto';
import { ListAddressesFilterDTO } from './dto/list-addresses-filter.dto';
import { PaginationConfigDTO } from './dto/pagination-config.dto';
import { ListCartsFilterDTO } from './dto/list-carts-filter.dto';
import { FindConfigDTO } from './dto/find-config.dto';
import { ListLineItemAdjustmentsFilterDTO } from './dto/list-line-item-adjustments-filter.dto';
import { Context } from 'vm';
import { Between, FindManyOptions, In, Like } from 'typeorm';
import { FilterableLineItemTaxLineProps } from './filterable-lineItem-tax-line-props.interface';
import { CartLineItemDTO } from './dto/cart-line-item.dto';
import { LineItemTaxLineDto } from './dto/line-item-tax-line.dto';
import { LineItemDto } from './dto/line-item.dto';
import { FilterableShippingMethodAdjustmentProps } from './filterable-shipping-method-adjustment-props.dto';
import { ListShippingMethodTaxLinesQueryDto } from './dto/list-shipping-method-tax-lines.dto';
import { UpsertLineItemAdjustmentDTO } from './dto/upsert-lineItem-adjustment.dto';
import { ShippingMethodDocument } from './dto/shipping-method.dto';
import { ShippingMethodTaxLineDocument } from './types';
import { v4 as uuidv4 } from 'uuid';
import { Order, OrderDocument } from 'src/order/entities/order.entity';
import { Connection } from 'mongoose';

@Injectable()
export class CartService {
  private readonly logger = new Logger(CartService.name);

  constructor(
    @InjectConnection() private readonly connection: Connection,  // ← Ajoute cette ligne
    @InjectModel(LineItemAdjustment.name) private readonly lineItemAdjustmentModel: Model<LineItemAdjustmentDocument>,
    @InjectModel(LineItem.name) private readonly lineItemModel: Model<LineItemDocument>,
    @InjectModel(Cart.name) private readonly cartModel: Model<CartDocument>,
    @InjectModel(ShippingMethodAdjustment.name) private readonly shippingMethodAdjustmentModel: Model<ShippingMethodAdjustmentDocument>,
    @InjectModel(Address.name) private readonly addressModel: Model<AddressDocument>,
    @InjectModel(LineItemTaxLine.name) private readonly lineItemTaxLineModel: Model<LineItemTaxLineDocument>,
    @InjectModel(ShippingMethodTaxLine.name) private readonly shippingMethodTaxLineModel: Model<ShippingMethodTaxLineDocument>,
    @InjectModel(ShippingMethod.name) private readonly shippingMethodModel: Model<ShippingMethodDocument>,
    @InjectModel(Order.name) private readonly orderModel: Model<OrderDocument>,
    @InjectModel(ShippingMethodAdjustment.name) private adjustmentModel: Model<ShippingMethodAdjustmentDocument>,
  
  ) {}

  async deleteUser(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async deleteCart(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async createCart(createCartDto: CreateCartDTO): Promise<string> {
    return 'This action adds a new cart';
  }

  async findAll(): Promise<string> {
    return `This action returns all cart`;
  }

  async findOne(id: string): Promise<string> {
    return `This action returns a #${id} cart`;
  }

  async update(id: number, updateCartDto: UpdateCartDto): Promise<string> {
    return `This action updates a #${id} cart`;
  }

  async remove(id: number): Promise<string> {
    return `This action removes a #${id} cart`;
  }

  /**
   * Convertit { field: "ASC" | "DESC" } en { field: "asc" | "desc" }
   */
  private normalizeSortOrder(
    order: Record<string, 'ASC' | 'DESC'>
  ): { [key: string]: SortOrder } {
    const result: { [key: string]: SortOrder } = {};
    for (const key in order) {
      const value = order[key];
      if (value === 'ASC') {
        result[key] = 'asc';
      } else if (value === 'DESC') {
        result[key] = 'desc';
      }
    }
    return result;
  }

  /**
   * Adds line item adjustments to a cart
   * @param data Single adjustment or array of adjustments
   * @returns Promise with created adjustments
   * @throws NotFoundException if line items don't exist
   * @throws BadRequestException for invalid data
   */
  async addLineItemAdjustments(
    data: CreateLineItemAdjustmentDTO | CreateLineItemAdjustmentDTO[],
  ): Promise<LineItemAdjustment[]> {
    try {
      const adjustmentsArray = Array.isArray(data) ? data : [data];

      // Verify all line items exist
      const itemIds = adjustmentsArray.map(adj => adj.item);
      const existingItems = await this.lineItemModel.countDocuments({ 
        _id: { $in: itemIds.map(id => new Types.ObjectId(id)) }
      });
      
      if (existingItems !== itemIds.length) {
        throw new NotFoundException('One or more line items not found');
      }

      const createdAdjustments = await Promise.all(
        adjustmentsArray.map(async (adj) => {
          const newAdjustment = new this.lineItemAdjustmentModel({
            _id: new Types.ObjectId(),
            id: `caliadj_${uuidv4()}`,
            code: adj.code,
            amount: adj.amount,
            item: new Types.ObjectId(adj.item),
            createdAt: new Date(),
            updatedAt: new Date(),
          });

          return newAdjustment.save();
        }),
      );

      return createdAdjustments;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Failed to create line item adjustments');
    }
  }

  async addLineItemTaxLine(dto: CreateLineItemTaxLineDTO): Promise<LineItemTaxLine> {
    try {
      const { itemId, ...taxLineData } = dto;

      const lineItem = await this.lineItemModel.findOne({ _id: new Types.ObjectId(itemId) });
      if (!lineItem) {
        throw new NotFoundException(`LineItem with id ${itemId} not found`);
      }

      const taxLine = new this.lineItemTaxLineModel({
        ...taxLineData,
        _id: new Types.ObjectId(),
        id: `calitxl_${Date.now()}`,
        item: lineItem._id,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      await taxLine.save();

      lineItem.tax_lines.push(taxLine.id);
      await lineItem.save();

      return taxLine.toObject() as LineItemTaxLine;
    } catch (error) {
      this.logger.error(`Failed to add tax line: ${error.message}`);
      throw new InternalServerErrorException('Failed to add tax line');
    }
  }

  async addLineItemTaxLines(dtos: CreateLineItemTaxLineDTO[]): Promise<LineItemTaxLine[]> {
    const results: LineItemTaxLine[] = [];
    for (const dto of dtos) {
      try {
        const taxLine = await this.addLineItemTaxLine(dto);
        results.push(taxLine);
      } catch (error) {
        this.logger.error(`Failed to add tax line for item ${dto.itemId}: ${error.message}`);
        continue;
      }
    }
    return results;
  }

  async addLineItems(
    cartIdOrItems: string | CreateLineItemForCartDTO[],
    itemsOrContext?: CreateLineItemForCartDTO[],
  ): Promise<LineItem[]> {
    try {
      let cartId: string;
      let items: CreateLineItemForCartDTO[];

      if (typeof cartIdOrItems === 'string') {
        cartId = cartIdOrItems;
        items = itemsOrContext ?? [];
      } else {
        items = cartIdOrItems;
        if (items.length === 0) return [];
        cartId = items[0].cart_id;
        if (!cartId) throw new BadRequestException('All items must have a cart_id');
      }

      const cart = await this.cartModel.findOne({ _id: new Types.ObjectId(cartId) });
      if (!cart) {
        throw new NotFoundException(`Cart with id ${cartId} not found`);
      }

      const creationPromises = items.map(item => 
        this.lineItemModel.create({
          ...item,
          _id: new Types.ObjectId(),
          id: `cali_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
          cart: cart._id,
          createdAt: new Date(),
          updatedAt: new Date(),
        })
      );

      const createdItems = await Promise.all<LineItemDocument>(creationPromises);

      cart.items.push(...createdItems.map(item => item.id));
      await cart.save();

      return createdItems;
    } catch (error) {
      this.logger.error(`Failed to add line items: ${error.message}`);
      throw new InternalServerErrorException('Failed to add line items');
    }
  }
  
  async addShippingMethodAdjustments(
    cartIdOrData: string | CreateShippingMethodAdjustmentDTO[] | CreateShippingMethodAdjustmentDTO,
    dataOrUndefined?: CreateShippingMethodAdjustmentDTO[],
  ): Promise<ShippingMethodAdjustment[]> {
    try {
      let cartId: string;
      let adjustments: CreateShippingMethodAdjustmentDTO[];

      if (typeof cartIdOrData === 'string') {
        cartId = cartIdOrData;
        adjustments = dataOrUndefined ?? [];
      } else if (Array.isArray(cartIdOrData)) {
        adjustments = cartIdOrData;
        if (adjustments.length === 0) return [];
        cartId = '';
      } else {
        adjustments = [cartIdOrData];
        cartId = '';
      }

      if (cartId) {
        const cart = await this.cartModel.findOne({ _id: new Types.ObjectId(cartId) }).populate('shipping_methods');
        if (!cart) {
          throw new NotFoundException(`Cart with id ${cartId} not found`);
        }
        const shippingMethodIds = cart.shipping_methods.map((sm) => sm._id);
        for (const adj of adjustments) {
          if (!shippingMethodIds.includes(new Types.ObjectId(adj.shipping_method_id))) {
            throw new NotFoundException(`Shipping method ${adj.shipping_method_id} not found in cart ${cartId}`);
          }
        }
      }

      const createdAdjustments: ShippingMethodAdjustment[] = [];

      for (const adjData of adjustments) {
        const newAdj = new this.shippingMethodAdjustmentModel({
          ...adjData,
          _id: new Types.ObjectId(),
          id: `casm_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
          shipping_method: new Types.ObjectId(adjData.shipping_method_id),
          createdAt: new Date(),
          updatedAt: new Date(),
        });

        await newAdj.save();
        createdAdjustments.push(newAdj);
      }

      return createdAdjustments;
    } catch (error) {
      this.logger.error(`Failed to add shipping method adjustments: ${error.message}`);
      throw new InternalServerErrorException('Failed to add shipping method adjustments');
    }
  }

  async createAddresses(
    data: CreateAddressDTO | CreateAddressDTO[],
  ): Promise<CartAddressDTO[]> {
    try {
      const addressesData = Array.isArray(data) ? data : [data];

      const createdAddresses = await Promise.all(
        addressesData.map(async (addr) => {
          const newAddress = new this.addressModel({
            ...addr,
            _id: new Types.ObjectId(),
            createdAt: new Date(),
            updatedAt: new Date(),
          });

          const savedAddress = await newAddress.save();
          return savedAddress;
        }),
      );

      return createdAddresses.map((address) =>
        plainToInstance(
          CartAddressDTO,
          address.toObject(),
          { excludeExtraneousValues: true },
        ),
      );
    } catch (error) {
      this.logger.error(`Failed to create addresses: ${error.message}`);
      throw new InternalServerErrorException('Failed to create addresses');
    }
  }

  async createCarts(data: CreateCartDTO | CreateCartDTO[]): Promise<CartDTO[]> {
    try {
      const cartsData = Array.isArray(data) ? data : [data];
      const createdCarts: CartDocument[] = [];

      for (const cartData of cartsData) {
        const newCart = new this.cartModel({
          _id: new Types.ObjectId(),
          currency_code: cartData.currency_code,
          region_id: cartData.region_id,
          customer_id: cartData.customer_id,
          email: cartData.email,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
        await newCart.save();
        createdCarts.push(newCart);
      }

      return createdCarts.map(cart =>
        plainToInstance(CartDTO, cart.toObject(), { excludeExtraneousValues: true }),
      );
    } catch (error) {
      this.logger.error(`Failed to create carts: ${error.message}`);
      throw new InternalServerErrorException('Failed to create carts');
    }
  }

  async deleteAddresses(
    ids: string | string[],
  ): Promise<void> {
    try {
      const idsArray = Array.isArray(ids) ? ids : [ids];

      const result = await this.addressModel.deleteMany({ 
        _id: { $in: idsArray.map(id => new Types.ObjectId(id)) }
      });

      if (result.deletedCount === 0) {
        throw new NotFoundException(
          `No address found with the provided ID(s): ${idsArray.join(', ')}`,
        );
      }
    } catch (error) {
      this.logger.error(`Failed to delete addresses: ${error.message}`);
      throw new InternalServerErrorException('Failed to delete addresses');
    }
  }

  async deleteCarts(
    cartIds: string | string[],
  ): Promise<void> {
    try {
      const idsArray = Array.isArray(cartIds) ? cartIds : [cartIds];

      const result = await this.cartModel.deleteMany({ 
        _id: { $in: idsArray.map(id => new Types.ObjectId(id)) }
      });

      if (result.deletedCount === 0) {
        throw new NotFoundException(
          `No cart found with ID(s): ${idsArray.join(', ')}`,
        );
      }
    } catch (error) {
      this.logger.error(`Failed to delete carts: ${error.message}`);
      throw new InternalServerErrorException('Failed to delete carts');
    }
  }

  async deleteLineItemAdjustments(
    ids: string | string[],
  ): Promise<void> {
    try {
      const idsArray = Array.isArray(ids) ? ids : [ids];

      const result = await this.lineItemAdjustmentModel.deleteMany({
        _id: { $in: idsArray.map(id => new Types.ObjectId(id)) }
      });

      if (result.deletedCount === 0) {
        throw new NotFoundException(
          `No LineItemAdjustment found with ID(s): ${idsArray.join(', ')}`,
        );
      }
    } catch (error) {
      this.logger.error(`Failed to delete line item adjustments: ${error.message}`);
      throw new InternalServerErrorException('Failed to delete line item adjustments');
    }
  }

  async deleteLineItemTaxLines(
    ids: string | string[],
  ): Promise<void> {
    try {
      const idsArray = Array.isArray(ids) ? ids : [ids];

      const result = await this.lineItemTaxLineModel.deleteMany({
        _id: { $in: idsArray.map(id => new Types.ObjectId(id)) }
      });

      if (result.deletedCount === 0) {
        throw new NotFoundException(
          `No LineItemTaxLine found with ID(s): ${idsArray.join(', ')}`,
        );
      }
    } catch (error) {
      this.logger.error(`Failed to delete line item tax lines: ${error.message}`);
      throw new InternalServerErrorException('Failed to delete line item tax lines');
    }
  }

  async deleteLineItems(
    ids: string | string[],
  ): Promise<void> {
    try {
      const idsArray = Array.isArray(ids) ? ids : [ids];

      const result = await this.lineItemModel.deleteMany({
        _id: { $in: idsArray.map(id => new Types.ObjectId(id)) }
      });

      if (result.deletedCount === 0) {
        throw new NotFoundException(
          `No LineItem found with ID(s): ${idsArray.join(', ')}`,
        );
      }
    } catch (error) {
      this.logger.error(`Failed to delete line items: ${error.message}`);
      throw new InternalServerErrorException('Failed to delete line items');
    }
  }

  async deleteShippingMethodAdjustments(
    ids: string | string[],
  ): Promise<void> {
    try {
      const idsArray = Array.isArray(ids) ? ids : [ids];

      const result = await this.shippingMethodAdjustmentModel.deleteMany({
        _id: { $in: idsArray.map(id => new Types.ObjectId(id)) }
      });

      if (result.deletedCount === 0) {
        throw new NotFoundException(
          `No ShippingMethodAdjustment found with ID(s): ${idsArray.join(', ')}`
        );
      }
    } catch (error) {
      this.logger.error(`Failed to delete shipping method adjustments: ${error.message}`);
      throw new InternalServerErrorException('Failed to delete shipping method adjustments');
    }
  }

  async deleteShippingMethodTaxLines(
    ids: string | string[],
  ): Promise<void> {
    try {
      const idsArray = Array.isArray(ids) ? ids : [ids];

      const result = await this.shippingMethodTaxLineModel.deleteMany({
        _id: { $in: idsArray.map(id => new Types.ObjectId(id)) }
      });

      if (result.deletedCount === 0) {
        throw new NotFoundException(
          `No ShippingMethodTaxLine found with ID(s): ${idsArray.join(', ')}`
        );
      }
    } catch (error) {
      this.logger.error(`Failed to delete shipping method tax lines: ${error.message}`);
      throw new InternalServerErrorException('Failed to delete shipping method tax lines');
    }
  }

  async listAddresses(
    filters?: ListAddressesFilterDTO,
    config?: PaginationConfigDTO,
  ): Promise<Address[]> {
    try {
      const query: Record<string, any> = {};

      if (filters?.id) {
        query._id = Array.isArray(filters.id) 
          ? { $in: filters.id.map(id => new Types.ObjectId(id)) } 
          : new Types.ObjectId(filters.id);
      }

      const skip = config?.skip ?? 0;
      const take = config?.take ?? 15;

      return this.addressModel.find(query).skip(skip).limit(take).exec();
    } catch (error) {
      this.logger.error(`Failed to list addresses: ${error.message}`);
      throw new InternalServerErrorException('Failed to list addresses');
    }
  }

  async listAndCountCarts(
    filters?: ListCartsFilterDTO,
    config?: FindConfigDTO,
  ): Promise<[Cart[], number]> {
    try {
      const query: FilterQuery<CartDocument> = {};

      if (filters?.id) {
        query._id = Array.isArray(filters.id) 
          ? { $in: filters.id.map(id => new Types.ObjectId(id)) } 
          : new Types.ObjectId(filters.id);
      }

      const skip = config?.skip ?? 0;
      const take = config?.take ?? 15;

      const [carts, count] = await Promise.all([
        this.cartModel
          .find(query)
          .skip(skip)
          .limit(take)
          .populate(config?.relations ?? [])
          .exec(),
        this.cartModel.countDocuments(query).exec(),
      ]);

      return [carts, count];
    } catch (error) {
      this.logger.error(`Failed to list and count carts: ${error.message}`);
      throw new InternalServerErrorException('Failed to list and count carts');
    }
  }

  async listCarts(
    filters?: ListCartsFilterDTO,
    config?: FindConfigDTO,
  ): Promise<Cart[]> {
    try {
      const query: FilterQuery<CartDocument> = {};

      if (filters?.id) {
        query._id = Array.isArray(filters.id) 
          ? { $in: filters.id.map(id => new Types.ObjectId(id)) } 
          : new Types.ObjectId(filters.id);
      }

      const skip = config?.skip ?? 0;
      const take = config?.take ?? 15;

      const carts = await this.cartModel
        .find(query)
        .skip(skip)
        .limit(take)
        .populate(config?.relations ?? [])
        .exec();

      return carts;
    } catch (error) {
      this.logger.error(`Failed to list carts: ${error.message}`);
      throw new InternalServerErrorException('Failed to list carts');
    }
  }

  async listLineItemAdjustments(
    filters?: ListLineItemAdjustmentsFilterDTO,
    config?: FindConfigDTO,
  ): Promise<LineItemAdjustment[]> {
    try {
      const query: FilterQuery<LineItemAdjustmentDocument> = {};

      if (filters?.id) {
        query._id = Array.isArray(filters.id) 
          ? { $in: filters.id.map(id => new Types.ObjectId(id)) } 
          : new Types.ObjectId(filters.id);
      }

      const skip = config?.skip ?? 0;
      const take = config?.take ?? 15;

      const adjustments = await this.lineItemAdjustmentModel
        .find(query)
        .skip(skip)
        .limit(take)
        .populate(config?.relations ?? [])
        .exec();

      return adjustments;
    } catch (error) {
      this.logger.error(`Failed to list line item adjustments: ${error.message}`);
      throw new InternalServerErrorException('Failed to list line item adjustments');
    }
  }
/*
  async listLineItemTaxLines(
    filters?: FilterableLineItemTaxLineProps,
    config: FindConfigDTO = { take: 15 },
  ): Promise<{ items: LineItemTaxLine[]; count: number }> {
    try {
      const queryOptions = this.buildTaxLineQuery(filters, config);

      const [taxLines, count] = await this.buildTaxLineQuery

      const mapped = taxLines.map(this.toLineItemTaxLineDTO);

      return { items: mapped, count };
    } catch (error) {
      this.logger.error(`Failed to list line item tax lines: ${error.message}`);
      throw new InternalServerErrorException('Failed to list line item tax lines');
    }
  }*/

  private buildTaxLineQuery(
    filters?: FilterableLineItemTaxLineProps,
    config?: FindConfigDTO
  ): FindManyOptions<LineItemTaxLine> {
    const whereConditions: any = {};

    if (filters?.q) {
      whereConditions.code = Like(`%${filters.q}%`);
    }

    if (filters?.rate) {
      if (filters.rate.lt !== undefined || filters.rate.gt !== undefined) {
        const lower = filters.rate.gt ?? 0;
        const upper = filters.rate.lt ?? Number.MAX_SAFE_INTEGER;
        whereConditions.rate = Between(lower, upper);
      }
    }

    if (filters?.id) {
      whereConditions.id = In(filters.id);
    }

    return {
      where: whereConditions,
      relations: config?.relations || [],
      skip: config?.skip ?? 0,
      take: config?.take ?? 15,
      order: config?.order || { id: 'DESC' },
    };
  }

  private toLineItemTaxLineDTO(taxLine: LineItemTaxLine): LineItemTaxLineDto {
    return {
      id: taxLine.id,
      code: taxLine.code,
      rate: taxLine.rate,
      description: taxLine.description,
      provider_id: taxLine.provider_id,
      metadata: taxLine.metadata,
      tax_rate_id: taxLine.tax_rate_id,
      deleted_at: taxLine.deleted_at,
      createAt: taxLine.createAt,
      item: taxLine.item
    };
  }

  private mapLineItemToDto(item: LineItem): LineItemDto {
    return {
      id: item.id,
      title: item.title,
      subtitle: item.subtitle,
      quantity: item.quantity,
      unit_price: item.unit_price,
    };
  }

  async listLineItems(
    filters: { id?: string[]; cart_id?: string } = {},
    config: { relations?: string[]; skip?: number; take?: number } = {},
  ): Promise<CartLineItemDTO[]> {
    try {
      const query: any = {};
      if (filters.id) {
        query._id = { $in: filters.id.map(id => new Types.ObjectId(id)) };
      }
      if (filters.cart_id) {
        query.cart = new Types.ObjectId(filters.cart_id);
      }

      let mongoQuery = this.lineItemModel.find(query);

      if (config.relations?.includes("cart")) {
        mongoQuery = mongoQuery.populate("cart");
      }
      if (config.relations?.includes("tax_lines")) {
        mongoQuery = mongoQuery.populate("tax_lines");
      }

      mongoQuery = mongoQuery
        .skip(config.skip ?? 0)
        .limit(config.take ?? 15);

      const lineItems = await mongoQuery.exec();

      return lineItems.map((li) =>
        plainToInstance(CartLineItemDTO, li.toObject(), {
          excludeExtraneousValues: false,
        }),
      );
    } catch (error) {
      this.logger.error(`Failed to list line items: ${error.message}`);
      throw new InternalServerErrorException('Failed to list line items');
    }
  }

  async listShippingMethodAdjustments(
    filters?: FilterableShippingMethodAdjustmentProps,
    config: FindConfigDTO = { take: 15 },
  ): Promise<{ items: any[]; count: number }> {
    try {
      // 1. Construire la requête Mongoose
      const query: any = {};

      if (filters?.id) {
        query._id = { $in: filters.id.map(id => new Types.ObjectId(id)) };
      }

      if (filters?.code) {
        query.code = { $regex: filters.code, $options: 'i' };
      }

      if (filters?.provider_id) {
        query.provider_id = filters.provider_id;
      }

      if (filters?.shipping_method_id) {
        query.shipping_method = new Types.ObjectId(filters.shipping_method_id);
      }

      // 2. Options de requête
      const options = {
        skip: config.skip || 0,
        limit: config.take || 15,
        sort: config.order ? this.normalizeSortOrder(config.order) : { createdAt: -1 as SortOrder },
      };

      // 3. Exécuter la requête
      const [items, count] = await Promise.all([
        this.shippingMethodAdjustmentModel
          .find(query)
          .skip(options.skip)
          .limit(options.limit)
          .sort(options.sort)
          .exec(),
        this.shippingMethodAdjustmentModel.countDocuments(query).exec(),
      ]);

      return {
        items: items.map(item => item.toObject()),
        count,
      };
    } catch (error) {
      this.logger.error(`Failed to list shipping method adjustments: ${error.message}`);
      throw new InternalServerErrorException('Failed to list shipping method adjustments');
    }
  }


  async listShippingMethodTaxLines(query: ListShippingMethodTaxLinesQueryDto) {
    try {
      const { ids, code, provider_id, shipping_method_id, skip, take, relations } = query;

      const filters: Record<string, any> = {};
      if (ids) filters._id = { $in: ids.map(id => new Types.ObjectId(id)) };
      if (code) filters.code = { $regex: code, $options: 'i' };
      if (provider_id) filters.provider_id = provider_id;
      if (shipping_method_id) filters.shipping_method = new Types.ObjectId(shipping_method_id);

      let mongoQuery = this.shippingMethodTaxLineModel.find(filters);

      if (relations?.includes('shipping_method')) {
        mongoQuery = mongoQuery.populate('shipping_method');
      }

      if (skip) mongoQuery = mongoQuery.skip(skip);
      if (take) mongoQuery = mongoQuery.limit(take);

      return mongoQuery.exec();
    } catch (error) {
      this.logger.error(`Failed to list shipping method tax lines: ${error.message}`);
      throw new InternalServerErrorException('Failed to list shipping method tax lines');
    }
  }

  async createShippingMethodTaxLine(data: any) {
    try {
      const taxLine = await this.shippingMethodTaxLineModel.create({
        ...data,
        _id: new Types.ObjectId(),
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      await this.shippingMethodModel.updateOne(
        { _id: new Types.ObjectId(data.shipping_method_id) },
        { $push: { tax_lines: taxLine._id } }
      );

      return taxLine;
    } catch (error) {
      this.logger.error(`Failed to create shipping method tax line: ${error.message}`);
      throw new InternalServerErrorException('Failed to create shipping method tax line');
    }
  }

  async listShippingMethods(
    filters: { id?: string[] },
    config: { relations?: string[]; skip?: number; take?: number },
   ): Promise<ShippingMethod[]> {
    try {
      const query = this.shippingMethodModel.find();

      if (filters.id && filters.id.length) {
        query.where('_id').in(filters.id.map(id => new Types.ObjectId(id)));
      }

      if (config.relations && config.relations.length) {
        config.relations.forEach((relation) => {
          query.populate(relation);
        });
      }

      if (config.skip) {
        query.skip(config.skip);
      }
      if (config.take) {
        query.limit(config.take);
      }

      return query.exec();
    } catch (error) {
      this.logger.error(`Failed to list shipping methods: ${error.message}`);
      throw new InternalServerErrorException('Failed to list shipping methods');
    }
  }

  async restoreAddresses(ids: string[]): Promise<void> {
    try {
      await this.addressModel.updateMany(
        { _id: { $in: ids.map(id => new Types.ObjectId(id)) } },
        { $set: { deleted_at: null } }
      );
    } catch (error) {
      this.logger.error(`Failed to restore addresses: ${error.message}`);
      throw new InternalServerErrorException('Failed to restore addresses');
    }
  }

  async restoreCarts(ids: string[]): Promise<void> {
    try {
      await this.cartModel.updateMany(
        { _id: { $in: ids.map(id => new Types.ObjectId(id)) } },
        { $unset: { deleted_at: "" } }
      );
    } catch (error) {
      this.logger.error(`Failed to restore carts: ${error.message}`);
      throw new InternalServerErrorException('Failed to restore carts');
    }
  }

  async restoreLineItemAdjustments(ids: string[]): Promise<void> {
    try {
      await this.lineItemAdjustmentModel.updateMany(
        { _id: { $in: ids.map(id => new Types.ObjectId(id)) } },
        { $set: { deleted_at: null } }
      );
    } catch (error) {
      this.logger.error(`Failed to restore line item adjustments: ${error.message}`);
      throw new InternalServerErrorException('Failed to restore line item adjustments');
    }
  }

  async restoreLineItemTaxLines(ids: string[]): Promise<LineItemTaxLine[]> {
    try {
      const objectIds = ids.map(id => new Types.ObjectId(id));

      await this.lineItemTaxLineModel.updateMany(
        { _id: { $in: objectIds }, deleted_at: { $ne: null } },
        { $set: { deleted_at: null } },
      );

      return this.lineItemTaxLineModel.find({ _id: { $in: objectIds } }).exec();
    } catch (error) {
      this.logger.error(`Failed to restore line item tax lines: ${error.message}`);
      throw new InternalServerErrorException('Failed to restore line item tax lines');
    }
  }

  async restoreLineItems(
    ids: string[],
   ): Promise<void> {
    try {
      await this.lineItemModel.updateMany(
        { _id: { $in: ids.map(id => new Types.ObjectId(id)) } },
        { $set: { deleted_at: null } }
      );
    } catch (error) {
      this.logger.error(`Failed to restore line items: ${error.message}`);
      throw new InternalServerErrorException('Failed to restore line items');
    }
  }

  async restoreShippingMethodAdjustments(
    ids: string[],
   ): Promise<void> {
    try {
      await this.shippingMethodAdjustmentModel.updateMany(
        { _id: { $in: ids.map(id => new Types.ObjectId(id)) } },
        { $set: { deleted_at: null } }
      );
    } catch (error) {
      this.logger.error(`Failed to restore shipping method adjustments: ${error.message}`);
      throw new InternalServerErrorException('Failed to restore shipping method adjustments');
    }
  }

  async restoreShippingMethodTaxLines(
    ids: string[],
   ): Promise<void> {
    try {
      await this.shippingMethodTaxLineModel.updateMany(
        { _id: { $in: ids.map(id => new Types.ObjectId(id)) } },
        { $set: { deleted_at: null } }
      );
    } catch (error) {
      this.logger.error(`Failed to restore shipping method tax lines: ${error.message}`);
      throw new InternalServerErrorException('Failed to restore shipping method tax lines');
    }
  }

  async restoreShippingMethods(
    ids: string[],
   ): Promise<void> {
    try {
      await this.shippingMethodModel.updateMany(
        { _id: { $in: ids.map(id => new Types.ObjectId(id)) } },
        { $set: { deleted_at: null } }
      );
    } catch (error) {
      this.logger.error(`Failed to restore shipping methods: ${error.message}`);
      throw new InternalServerErrorException('Failed to restore shipping methods');
    }
  }

  async getCartById(id: string, relations: string[] = []): Promise<Cart> {
    try {
      const cart = await this.cartModel.findOne({ _id: new Types.ObjectId(id) })
        .populate(relations)
        .exec();

      if (!cart) {
        throw new NotFoundException(`Cart with id ${id} not found`);
      }

      return cart;
    } catch (error) {
      this.logger.error(`Failed to get cart by id: ${error.message}`);
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Failed to get cart by id');
    }
  }

  async retrieveLineItem(id: string, relations: string[] = [], cartId?: string): Promise<LineItem> {
    try {
      const query = this.lineItemModel.findOne({ _id: new Types.ObjectId(id) });

      if (relations.includes('adjustments')) query.populate('adjustments');
      if (relations.includes('tax_lines')) query.populate('tax_lines');
      if (relations.includes('cart')) query.populate('cart');

      const lineItem = await query.exec();
      if (!lineItem) throw new NotFoundException(`LineItem with id ${id} not found`);
      if (cartId && lineItem.cart.toString() !== new Types.ObjectId(cartId).toString())
        throw new BadRequestException(`LineItem does not belong to cart ${cartId}`);
      return lineItem.toObject();
    } catch (error) {
      this.logger.error(`Failed to retrieve line item: ${error.message}`);
      throw new InternalServerErrorException('Failed to retrieve line item');
    }
  }

  async setLineItemAdjustments(
    cartId: string,
    adjustmentsData: UpsertLineItemAdjustmentDTO[],
   ): Promise<LineItemAdjustment[]> {
    try {
      const cart = await this.cartModel.findOne({ _id: new Types.ObjectId(cartId) })
        .populate({
          path: 'items',
          populate: { path: 'adjustments' }
        })
        .exec();

      if (!cart) {
        throw new NotFoundException(`Cart with id ${cartId} not found`);
      }

      const adjustmentsByItemId = adjustmentsData.reduce((acc, adj) => {
        if (!acc[adj.item_id]) acc[adj.item_id] = [];
        acc[adj.item_id].push(adj);
        return acc;
      }, {} as Record<string, UpsertLineItemAdjustmentDTO[]>);

      const savedAdjustments: LineItemAdjustment[] = [];

      for (const item of cart.items) {
        if (!item) {
          continue;
        }

        const newAdjustmentsForItem = adjustmentsByItemId[item.id] || [];
        const adjustmentsToRemove = (item.adjustments || []).filter(adj => 
          !newAdjustmentsForItem.some(newAdj => newAdj.id === adj.id)
        );

        for (const adjToRemove of adjustmentsToRemove) {
          await this.lineItemAdjustmentModel.deleteOne({ _id: adjToRemove.id });
        }

        for (const adjData of newAdjustmentsForItem) {
          let adjustment: LineItemAdjustmentDocument | null = null;

          if (adjData.id) {
            adjustment = await this.lineItemAdjustmentModel.findOne({ _id: new Types.ObjectId(adjData.id) });
          }

          if (adjustment) {
            adjustment.set({
              ...adjData,
              updatedAt: new Date(),
            });
          } else {
            adjustment = new this.lineItemAdjustmentModel({
              ...adjData,
              _id: new Types.ObjectId(),
              item: item.id,
              id: adjData.id || `caliadj_${new Types.ObjectId().toHexString()}`,
              createdAt: new Date(),
              updatedAt: new Date(),
            });
          }

          await adjustment.save();
          savedAdjustments.push(adjustment);
        }
      }

      return savedAdjustments;
    } catch (error) {
      this.logger.error(`Failed to set line item adjustments: ${error.message}`);
      throw new InternalServerErrorException('Failed to set line item adjustments');
    }
  }

  async setShippingMethodTaxLines(
    cartId: string,
    taxLines: CreateShippingMethodTaxLineDTO[],
   ): Promise<ShippingMethodTaxLineDocument[]> {
    const session = await this.connection.startSession();
    session.startTransaction();

    try {
      const cart = await this.cartModel.findById(cartId).session(session);
      if (!cart) {
        throw new NotFoundException(`Cart ${cartId} not found`);
      }

      const results = await Promise.all(
        taxLines.map(async (taxLine) => {
          const newTaxLine = new this.shippingMethodTaxLineModel({
            ...taxLine,
            shipping_method: new Types.ObjectId(taxLine.shipping_method_id),
            cart: cart._id
          });
          return newTaxLine.save({ session });
        })
      );

      await session.commitTransaction();
      return results;
    } catch (error) {
      await session.abortTransaction();
      this.logger.error(`Failed to set tax lines: ${error.message}`);
      throw error;
    } finally {
      session.endSession();
    }
  }

  async softDeleteAddresses(
    ids: string[],
    returnLinkableKeys?: string[],
   ): Promise<void | Record<string, string[]>> {
    const now = new Date();
    const session = await this.connection.startSession();
    session.startTransaction();

    try {
      // 1. Soft delete des adresses
      await this.addressModel.updateMany(
        { _id: { $in: ids.map(id => new Types.ObjectId(id)) } },
        { $set: { deleted_at: now } },
        { session }
      );

      if (!returnLinkableKeys || returnLinkableKeys.length === 0) {
        await session.commitTransaction();
        return;
      }

      const result: Record<string, string[]> = {};

      // 2. Gestion des relations (exemple avec Order)
        if (returnLinkableKeys.includes('orders')) {
      const orderUpdateResult = await this.orderModel.updateMany(
        { shipping_address: { $in: ids } },
        { deleted_at: now }
      );

      result.orders = ids; // Ou adapter selon ce que tu veux retourner
     }


      await session.commitTransaction();
      return result;
    } catch (error) {
      await session.abortTransaction();
      this.logger.error(`Failed to soft delete addresses: ${error.message}`);
      throw new InternalServerErrorException('Failed to soft delete addresses');
    } finally {
      session.endSession();
    }
  }


  

  async deleteShippingMethods(ids: string[]): Promise<void> {
  try {
    // Convertir les IDs en ObjectId
    const objectIds = ids.map(id => new Types.ObjectId(id));
    
    // Supprimer les méthodes de livraison
    const deleteResult = await this.shippingMethodModel.deleteMany({
      _id: { $in: objectIds }
    }).exec();

    // Vérifier si des documents ont été supprimés
    if (deleteResult.deletedCount === 0) {
      throw new NotFoundException('No shipping methods found with the provided IDs');
    }

    // Mettre à jour les paniers qui référencent ces méthodes
    await this.cartModel.updateMany(
      { shipping_methods: { $in: ids } },
      { $pull: { shipping_methods: { $in: ids } } }
    ).exec();

  } catch (error) {
    this.logger.error(`Failed to delete shipping methods: ${error.message}`);
    if (error instanceof NotFoundException) {
      throw error;
    }
    throw new InternalServerErrorException('Failed to delete shipping methods');
  }
}
}