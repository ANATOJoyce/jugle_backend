import { Controller, Get, Post, Body, Patch, Param, Delete, ForbiddenException, Req, Put } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { Role } from 'src/auth/role.enum';
import { Roles } from 'src/auth/roles.decorator';
import { AddCustomerToGroupDto } from './dto/add-customer-to-group.dto';
import { UpdateCustomerAddressDto } from './dto/update-customer-address.dto';
import { CreateCustomerAddressDto } from './dto/create-customer-address.dto';
import { UpdateCustomerGroupDto } from './dto/update-customer-group.dto';
import { CreateCustomerGroupDto } from './dto/create-customer-group.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  /** */
  /**Méthode HTTP	URL	Rôle(s) autorisé(s)	Description
GET	/customer/address	ADMIN, VENDOR, CUSTOMER	Liste toutes les adresses (ADMIN et VENDOR peuvent voir toutes, CUSTOMER uniquement les siennes).
GET	/customer/address/:id	ADMIN, VENDOR, CUSTOMER	Récupère une adresse par son ID. CUSTOMER ne peut accéder qu'à ses propres adresses.
POST	/customer/address	ADMIN, VENDOR, CUSTOMER	Crée une nouvelle adresse pour le client authentifié.
PATCH	/customer/address/:id	ADMIN, VENDOR, CUSTOMER	Met à jour une adresse existante (uniquement si elle appartient au client ou selon rôle).
DELETE	/customer/address/:id	ADMIN, VENDOR, CUSTOMER	Soft delete d’une adresse (marque supprimée sans effacer). */

 @Post()
  @Roles(Role.ADMIN, Role.CUSTOMER, Role.VENDOR)
  async create(@Body() dto: CreateCustomerAddressDto, @Req() req) {
    // Le customerId peut venir du token (req.user.id) si nécessaire
    const customerId = req.user.id;
    return this.customerService.createCustomerAddress(customerId, dto);
  }

  @Get()
  @Roles(Role.ADMIN, Role.CUSTOMER, Role.VENDOR)
  async findAll(@Req() req) {
    // Par défaut, on récupère les adresses du customer connecté sauf ADMIN (qui peut demander toutes ?)
    if (req.user.role === Role.ADMIN) {
      return this.customerService.findAllAddresses(); // méthode à créer si besoin
    }
    return this.customerService.findAddressesByCustomer(req.user.id);
  }

  @Get('customer-address:id')
  @Roles(Role.ADMIN, Role.CUSTOMER, Role.VENDOR)
  async findOne(@Param('id') id: string, @Req() req) {
    const address = await this.customerService.findAddressById(id);

    // Sécurité: vérifier que le customer peut accéder à cette adresse (ou admin)
    if (req.user.role !== Role.ADMIN && address.customer.toString() !== req.user.id) {
      throw new ForbiddenException('Access denied');
    }

    return address;
  }

  @Put('customer-address:id')
  @Roles(Role.ADMIN, Role.CUSTOMER, Role.VENDOR)
  async update(@Param('id') id: string, @Body() dto: UpdateCustomerAddressDto, @Req() req) {
    const address = await this.customerService.findAddressById(id);

    if (req.user.role !== Role.ADMIN && address.customer.toString() !== req.user.id) {
      throw new ForbiddenException('Access denied');
    }

    return this.customerService.updateCustomerAddress(id, dto);
  }

  @Delete('customer-address:id')
  @Roles(Role.ADMIN, Role.CUSTOMER)
  async remove(@Param('id') id: string, @Req() req) {
    const address = await this.customerService.findAddressById(id);

    if (req.user.role !== Role.ADMIN && address.customer.toString() !== req.user.id) {
      throw new ForbiddenException('Access denied');
    }

    return this.customerService.softDeleteCustomerAddress(id);
  }

  /**CONTROLLER DE CUSTOMER_GROUP_CUSTOMER 
   * 
   * Méthode HTTP	URL	Rôle(s) autorisé(s)	Description
GET	/customer/group-customer	ADMIN, VENDOR	Liste toutes les associations client-groupe.
GET	/customer/group-customer/:id	ADMIN, VENDOR	Récupère une association client-groupe par ID.
POST	/customer/group-customer	ADMIN	Ajoute un client à un groupe.
PATCH	/customer/group-customer/:id	ADMIN	Met à jour une association client-groupe (ex: metadata).
DELETE	/customer/group-customer/:id	ADMIN	Supprime une association client-groupe (soft ou hard delete).
Les rôles ADMIN ont tous les droits.

Les rôles VENDOR peuvent accéder en lecture aux données liées au customer (selon besoin).

Les rôles CUSTOMER peuvent gérer uniquement leurs propres adresses.

La validation d’appartenance (ex : que l’adresse appartient bien au customer authentifié) est faite côté service / guards.

Le soft delete permet de garder l’historique et restaurer si besoin.
  */

  @Post()
  @Roles(Role.ADMIN, Role.VENDOR)
  async addToGroup(@Body() dto: AddCustomerToGroupDto) {
    return this.customerService.addCustomerToGroup(dto.customerId, dto.groupId, dto.createdBy, dto.metadata);
  }

  @Get('customer/:customerId')
  @Roles(Role.ADMIN, Role.VENDOR, Role.CUSTOMER)
  async getGroupsByCustomer(@Param('customerId') customerId: string, @Req() req) {
    if (req.user.role !== Role.ADMIN && req.user.id !== customerId) {
      throw new ForbiddenException('Access denied');
    }
    return this.customerService.findGroupsByCustomer(customerId);
  }

  @Get('group/:groupId')
  @Roles(Role.ADMIN, Role.VENDOR)
  async getCustomersByGroup(@Param('groupId') groupId: string) {
    return this.customerService.findCustomersByGroup(groupId);
  }

  @Delete(':id')
  @Roles(Role.ADMIN, Role.VENDOR)
  async removeFromGroup(@Param('id') id: string) {
    return this.customerService.removeCustomerFromGroup(id);
  }

  /**
   * Toutes les méthodes du service sont préfixées par CustomerGroup pour centraliser la compréhension et éviter toute ambiguïté.

Le controller applique la sécurité selon les rôles via @Roles et RolesGuard.

Le service reste propre et dédié uniquement aux opérations de la couche métier/données.

Le controller expose les routes REST classiques avec un nommage clair.


   */

  @Get('customer-groups')
  @Roles(Role.ADMIN, Role.VENDOR)
  findAllCustomerGroups() {
    return this.customerService.findAllCustomerGroups();
  }

  @Get('customer-group:id')
  @Roles(Role.ADMIN, Role.VENDOR)
  findCustomerGroupById(@Param('id') id: string) {
    return this.customerService.findCustomerGroupById(id);
  }

  @Post('customer-group')
  @Roles(Role.ADMIN)
  createCustomerGroup(@Body() dto: CreateCustomerGroupDto) {
    return this.customerService.createCustomerGroup(dto);
  }

  @Patch('customer-group:id')
  @Roles(Role.ADMIN)
  updateCustomerGroup(@Param('id') id: string, @Body() dto: UpdateCustomerGroupDto) {
    return this.customerService.updateCustomerGroup(id, dto);
  }

  @Delete('customre-group:id')
  @Roles(Role.ADMIN)
  softDeleteCustomerGroup(@Param('id') id: string) {
    return this.customerService.softDeleteCustomerGroup(id);
  }

  /**
   * 
   * Méthode Service	Route Controller	Rôles	Description
findAllCustomers()	GET /customer	ADMIN, VENDOR	Liste tous les clients actifs
findCustomerById(id)	GET /customer/:id	ADMIN, VENDOR	Récupère un client par ID
createCustomer(dto)	POST /customer	ADMIN	Crée un nouveau client
updateCustomer(id, dto)	PATCH /customer/:id	ADMIN	Met à jour un client existant
softDeleteCustomer(id)	DELETE /customer/:id	ADMIN	Supprime (soft delete) un client
   */

    // CUSTOMER ROUTES

  @Get('customer')
  @Roles(Role.ADMIN, Role.VENDOR)
  findAllCustomers() {
    return this.customerService.findAllCustomers();
  }

  @Get('customer/:id')
  @Roles(Role.ADMIN, Role.VENDOR)
  findCustomerById(@Param('id') id: string) {
    return this.customerService.findCustomerById(id);
  }

  @Post('customer')
  @Roles(Role.ADMIN)
  createCustomer(@Body() dto: CreateCustomerDto) {
    return this.customerService.createCustomer(dto);
  }

  @Patch('customer/:id')
  @Roles(Role.ADMIN)
  updateCustomer(@Param('id') id: string, @Body() dto: UpdateCustomerDto) {
    return this.customerService.updateCustomer(id, dto);
  }

  @Delete('customer/:id')
  @Roles(Role.ADMIN)
  softDeleteCustomer(@Param('id') id: string) {
    return this.customerService.softDeleteCustomer(id);
  }

}
