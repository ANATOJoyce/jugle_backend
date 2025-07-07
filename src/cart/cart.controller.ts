import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, UsePipes, ValidationPipe, NotFoundException, UseGuards } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDTO } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import {  Query } from '@nestjs/common';
import { UpdateUserDto } from 'src/user/dto/update-user.dto'; 
import { CreateLineItemAdjustmentDTO } from './dto/create-line-item-adjustement.dto';
import { CreateLineItemTaxLineDTO } from './dto/create-line-item-tax-line.dto';
import { LineItemTaxLine } from './entities/line-item-tax-line.entity';
import { CreateLineItemForCartDTO } from './dto/create-line-item-for-cart.dto';
import { LineItem, LineItemDocument } from './entities/line-item.entity';
import { CreateShippingMethodTaxLineDTO } from './dto/create-shipping-method-tax-line.dto';
import { CreateAddressDTO } from './dto/create-address.dto';
import { CartAddressDTO } from './dto/cart-address.dto';
import { CartDTO } from './dto/cart.dto';
import { plainToInstance } from 'class-transformer';
import { DeleteLineItemTaxLinesDTO } from './dto/delete-line-Item-tax-line.dto';
import { DeleteLineItemsDTO } from './dto/delete-line-item.dto';
import { DeleteShippingMethodAdjustmentsDTO } from './dto/delete-shipping-method-adjustment.dto';
import { DeleteShippingMethodTaxLinesDTO } from './dto/delete-shipping-method-tax-line.dto';
import { DeleteShippingMethodsDTO } from './dto/delete-shipping-method.dto';
import { ListAddressesFilterDTO } from './dto/list-addresses-filter.dto';
import { PaginationConfigDTO } from './dto/pagination-config.dto';
import { ListCartsFilterDTO } from './dto/list-carts-filter.dto';
import { FindConfigDTO } from './dto/find-config.dto';
import { ListLineItemAdjustmentsFilterDTO } from './dto/list-line-item-adjustments-filter.dto';
import { ListLineItemTaxLinesQueryDto } from './dto/list-line-item-tax-lines-query.dto';
import { ListShippingMethodAdjustmentQueryDto } from './dto/list-shipping-method-adjustment-query.dto';
import { FilterableShippingMethodAdjustmentProps } from './filterable-shipping-method-adjustment-props.dto';
import { ListShippingMethodTaxLinesQueryDto } from './dto/list-shipping-method-tax-lines.dto';
import { FilterShippingMethodQueryDto } from './dto/filter-shipping-method-query.dto';
import { RestoreAddressesDTO } from './dto/restore-addresses.dto';
import { RestoreCartsDto } from './dto/restore-carts.dto';
import { AuthGuard } from '@nestjs/passport';
import { RestoreLineItemAdjustmentsDto } from './dto/restore-lineItem-adjustments.dto';
import { RestoreLineItemTaxLinesDto } from './dto/restore-line-item-tax-lines.dto';
import { RestoreLineItemsDto } from './dto/restore-line-items.dto';
import { RestoreShippingMethodAdjustmentsDto } from './dto/restore-shipping-method-adjustments.dto';
import { RestoreShippingMethodTaxLinesDto } from './dto/restore-shipping-method-tax-lines.dto';
import { RestoreShippingMethodsDto } from './dto/restore-shipping-methods.dto';
import { Cart } from './entities/cart.entity';
import { UpsertLineItemAdjustmentDTO } from './dto/upsert-lineItem-adjustment.dto';
import { LineItemAdjustment } from './entities/line-item-adjustment.entity';
import { SoftDeleteCartsDto } from './dto/soft-delete-carts.dto';


@Controller('cart')
export class CartController {
  userService: any;
  lineItemModel: any;
  constructor(private readonly cartService: CartService) {}

  
  @Post()
  async createCarts(
    @Body() data: CreateCartDTO | CreateCartDTO[],
  ): Promise<CartDTO[] | CartDTO> {
    const result = await this.cartService.createCarts(data);

    if (Array.isArray(result)) {
      return result.map(cart =>
        plainToInstance(CartDTO, cart, { excludeExtraneousValues: true }),
      );
    }

    return plainToInstance(CartDTO, result, { excludeExtraneousValues: true });
  }

  @Get()
  findAll() {
    return this.cartService.findAll();
  }

  
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCartDto: UpdateCartDto) {
    return this.cartService.update(+id, updateCartDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cartService.remove(+id);
  }

 /*
    // Vérifie que le LineItem existe avant de créer l’ajustement
    const lineItem = await this.lineItemModel.findById(adj.item_id);
    if (!lineItem) {
      throw new NotFoundException(`LineItem ${adj.item_id} not found`);
    }
 */
    //route vers les ajustement sur le s articles 
    
  @Post('adjustments')
  async addAdjustments(
    @Body() data: CreateLineItemAdjustmentDTO | CreateLineItemAdjustmentDTO[],
  ) {
    return this.cartService.addLineItemAdjustments(data);
  }
  
  @Post('line-item-tax-lines')
  async addLineItemTaxLines(@Body() body: CreateLineItemTaxLineDTO | CreateLineItemTaxLineDTO[],
  ): Promise<LineItemTaxLine | LineItemTaxLine[]> {
    if (Array.isArray(body)) {
      return this.cartService.addLineItemTaxLines(body);
    }
    return this.cartService.addLineItemTaxLine(body);
  }
  
  @Post('line-items')
  async addLineItems(
    @Body() body: CreateLineItemForCartDTO | CreateLineItemForCartDTO[],
  ): Promise<LineItem[]> {
    if (Array.isArray(body)) {
      return this.cartService.addLineItems(body);
    }
    return this.cartService.addLineItems(body.cart_id, [body]);
  }
  
  /*
  @Post(':cartId?')
  async addShippingMethodTaxLines(
    @Param('cartId') cartId: string,
    @Body() taxLines: CreateShippingMethodTaxLineDTO | CreateShippingMethodTaxLineDTO[],
  ): Promise<CreateShippingMethodTaxLineDTO[]> {
    // Le service doit gérer si cartId est fourni ou non (surchargé)
    return this.cartService.setShippingMethodTaxLines(cartId, taxLines);
  }
*/

  // POST /carts/:id/items : Ajoute des items à un panier exist ant

  @Post(':id/items')
  async addItemsToCart(
    @Param('id') cartId: string,
    @Body() items: CreateLineItemForCartDTO[],
  ) {
    try {
      const result = await this.cartService.addLineItems(cartId, items);
      return {
        success: true,
        data: result,
        message: 'Items added to cart successfully',
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      }
      throw error;
    }
  }

  //POST /carts/items/bulk : Crée un nouveau panier avec des items (utilise la surcharge de méthode

  @Post('items/bulk')
  async createCartWithItems(
    @Body() items: CreateLineItemForCartDTO[],
  ) {
    try {
      const result = await this.cartService.addLineItems(items);
      return {
        success: true,
        data: result,
        message: 'Cart created with items successfully',
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      }
      throw error;
    }
  }
  /**
   * Post vers adress
   */

    @Post('address')
  async createAddresses(
    @Body() data: CreateAddressDTO | CreateAddressDTO[]
  ): Promise<CartAddressDTO | CartAddressDTO[]> {
    return this.cartService.createAddresses(data);
  }


   @Delete('addresses')
  async deleteAddresses(
    @Body('ids') ids: string | string[],
  ): Promise<void> {
    await this.cartService.deleteAddresses(ids);
  }


   @Delete()
  async deleteCarts(
    @Body('ids') ids: string | string[],
  ): Promise<void> {
    await this.cartService.deleteCarts(ids);
  }

  @Delete('line-item-adjustments')
  async deleteLineItemAdjustments(
    @Body('ids') ids: string | string[],
  ): Promise<void> {
    await this.cartService.deleteLineItemAdjustments(ids);
  }

  @Delete('line-item-tax-lines')
  async deleteLineItemTaxLines(
    @Body() body: DeleteLineItemTaxLinesDTO,
  ): Promise<void> {
    await this.cartService.deleteLineItemTaxLines(body.ids);
  }

  @Delete('line-items')
  async deleteLineItems(
    @Body() body: DeleteLineItemsDTO,
  ): Promise<void> {
    await this.cartService.deleteLineItems(body.ids);
  }

  @Delete('shipping-method-adjustments')
  async deleteShippingMethodAdjustments(
    @Body() body: DeleteShippingMethodAdjustmentsDTO,
  ): Promise<void> {
    await this.cartService.deleteShippingMethodAdjustments(body.ids);
  }


  @Delete('shipping-method-tax-lines')
  async deleteShippingMethodTaxLines(
    @Body() body: DeleteShippingMethodTaxLinesDTO,
  ): Promise<void> {
    await this.cartService.deleteShippingMethodTaxLines(body.ids);
  }

  @Delete('shipping-methods')
  async deleteShippingMethods(
    @Body() body: DeleteShippingMethodsDTO,
  ): Promise<void> {
    await this.cartService.deleteShippingMethods(body.ids);
  }
  
  @Post('addresses/list')
  async listAddresses(
    @Body('filters') filters?: ListAddressesFilterDTO,
    @Body('config') config?: PaginationConfigDTO,
  ) {
    return this.cartService.listAddresses(filters, config);
  }

  @Post('carts/list-and-count')
    async listAndCountCarts(
      @Body('filters') filters?: ListCartsFilterDTO,
      @Body('config') config?: FindConfigDTO,
    ) {
    return this.cartService.listAndCountCarts(filters, config);
  }

   @Post('carts/list')
    async listCarts(
      @Body('filters') filters?: ListCartsFilterDTO,
      @Body('config') config?: FindConfigDTO,
    ) {
    return this.cartService.listCarts(filters, config);
  }

  @Post('line-item-adjustments/list')
  async listLineItemAdjustments(
    @Body('filters') filters?: ListLineItemAdjustmentsFilterDTO,
    @Body('config') config?: FindConfigDTO,
  ) {
    return this.cartService.listLineItemAdjustments(filters, config);
  }
/*
  @Get('line-item-tax-lines')
  async listLineItemTaxLines(
    @Query() query: ListLineItemTaxLinesQueryDto
  ) {
    const filters = query.ids ? { id: query.ids } : {};
    const config = {
      skip: query.skip,
      take: query.take,
      relations: query.relations,
    };

    return this.cartService.listLineItemTaxLines(filters, config);
  }
*/

  @Get('shipping-methods')
  async listShippingMethods(
    @Query() query: FilterShippingMethodQueryDto
  ) {
    const filters = query.id ? { id: query.id } : {};

    const config = {
      skip: query.skip ? parseInt(query.skip as any, 10) : undefined,
      take: query.take ? parseInt(query.take as any, 10) : undefined,
      relations: query.relations,
    };

    return this.cartService.listShippingMethods(filters, config);
  }

  @Get('shipping-method-adjustments')
    async listShippingMethodAdjustments(
      @Query() query: ListShippingMethodAdjustmentQueryDto
    ) {
      const filters: FilterableShippingMethodAdjustmentProps = {
        id: query.ids ? query.ids.split(',') : undefined,
        code: query.code,
        provider_id: query.provider_id,
        shipping_method_id: query.shipping_method_id,
      };

      const config: FindConfigDTO = {
        skip: query.skip,
        take: query.take,
        relations: query.relations ? query.relations.split(',') : undefined,
      };

    return this.cartService.listShippingMethodAdjustments(filters, config);
  }

  @Get('shipping-method-tax-lines')
    async listShippingMethodTaxLines(
      @Query() query: ListShippingMethodTaxLinesQueryDto
    ) {
      return this.cartService.listShippingMethodTaxLines(query);
  }

  @Post('addresses/restore')
    async restoreAddresses(
      @Body() body: RestoreAddressesDTO
    ) {
      return this.cartService.restoreAddresses(body.ids);
  }

  @Post('restore')
    async restoreCarts(
      @Body() restoreCartsDto: RestoreCartsDto,
    ) { 
      await this.cartService.restoreCarts(restoreCartsDto.ids);
      return { message: 'Carts restored successfully' };
  }

  @Post('restore-line-item-adjustments')
  @UseGuards(AuthGuard('jwt')) // Sécurise la route, à personnaliserAbout
  async restoreLineItemAdjustments(@Body() dto: RestoreLineItemAdjustmentsDto) {
    return this.cartService.restoreLineItemAdjustments(dto.ids);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('restore-line-item-tax-lines')
  async restoreLineItemTaxLines(@Body() dto: RestoreLineItemTaxLinesDto): Promise<LineItemTaxLine[]> {
    return this.cartService.restoreLineItemTaxLines(dto.ids);
  }

  
  @Post('restore-line-items')
  async restoreLineItems(
    @Body() dto: RestoreLineItemsDto
  ): Promise<void | Record<string, string[]>> {
    const returnLinkableKeys = ['tax_lines']; 
    return this.cartService.restoreLineItems(dto.ids);
  }


  @Post('restore-shipping-method-adjustments')
  async restoreShippingMethodAdjustments(
    @Body() dto: RestoreShippingMethodAdjustmentsDto
  ): Promise<void | Record<string, string[]>> {
    // Si tu veux restaurer aussi des relations spécifiques, tu peux ajouter ici :
    const returnLinkableKeys = []; // Exemple : ['shipping_method']

    return this.cartService.restoreShippingMethodAdjustments(dto.ids);
  }

  @Post('restore-shipping-method-tax-lines')
    async restoreShippingMethodTaxLines(
      @Body() dto: RestoreShippingMethodTaxLinesDto
    ): Promise<void | Record<string, string[]>> {
      return this.cartService.restoreShippingMethodTaxLines(dto.ids);
  }

  @Post('restore-shipping-methods')
    async restoreShippingMethods(
      @Body() dto: RestoreShippingMethodsDto
    ): Promise<void | Record<string, string[]>> {
      // Tu peux passer ici ['tax_lines'] pour restaurer aussi les relations si besoin
      return this.cartService.restoreShippingMethods(dto.ids);
  }

  // //retrieveCart récupérer un panier 
  @Get(':id')
  async getCart(
    @Param('id') id: string,
    @Query('relations') relations?: string,
  ): Promise<Cart> {
    // relations est une string CSV, on la split si présente
    const relationsArray = relations ? relations.split(',') : [];
    try {
      const cart = await this.cartService.getCartById(id, relationsArray);
      return cart;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      // Autres erreurs
      throw error;
    }
  }


  @Get('/line-items/:lineItemId')
  async getLineItem(
    @Param('cartId') cartId: string,
    @Param('lineItemId') lineItemId: string,
    @Query('relations') relations?: string,
  ): Promise<LineItem> {
    // Tu peux ajouter une vérification que lineItem appartient bien au cartId si tu veux
    const relationsArray = relations ? relations.split(',') : [];
    return this.cartService.retrieveLineItem(lineItemId, relationsArray);
  }

  /**
   * PATCH /carts/:id/line-item-adjustments
   * Exemple: Modifie/remplace les adjustments d’un ou plusieurs line items dans le cart.
   */
  @Patch(':id/line-item-adjustments')
  async setLineItemAdjustments(
    @Param('id') cartId: string,
    @Body() adjustments: UpsertLineItemAdjustmentDTO[],
  ): Promise<LineItemAdjustment[]> {
    return this.cartService.setLineItemAdjustments(cartId, adjustments);
  }

  @Patch(':id/shipping-method-tax-lines')
  async setShippingMethodTaxLines(
    @Param('id') cartId: string,
    @Body() taxLines: CreateShippingMethodTaxLineDTO[],
  ) {
    return this.cartService.setShippingMethodTaxLines(cartId, taxLines);
  } 


  
  



}





