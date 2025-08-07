import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Customer } from './entities/customer.entity';
import { CustomerAddress } from './entities/address.entity';
import { CustomerGroupCustomer } from './entities/customer-group-customer.entity';
import { CustomerGroup } from './entities/customer-group.entity';
import { Model, Types } from 'mongoose';
import { UpdateCustomerGroupDto } from './dto/update-customer-group.dto';
import { CreateCustomerGroupDto } from './dto/create-customer-group.dto';

@Injectable()
export class CustomerService {

  constructor(
    @InjectModel(Customer.name) private customerModel: Model<Customer>,
    @InjectModel(CustomerAddress.name) private customerAddressModel: Model<CustomerAddress>,
    @InjectModel(CustomerGroupCustomer.name) private customerGroupCustomerModel: Model<CustomerGroupCustomer>,
    @InjectModel(CustomerGroup.name) private customerGroupModel: Model<CustomerGroup>,
  ) {}

   // Création d'une nouvelle adresse pour un client
  async createCustomerAddress(customerId: string, dto: Partial<CustomerAddress>): Promise<CustomerAddress> {
    const created = new this.customerAddressModel({
      ...dto,
      customer: new Types.ObjectId(customerId),
      deleted_at: null,
    });
    return created.save();
  }

  async findAllAddresses(): Promise<CustomerAddress[]> {
    return this.customerAddressModel.find().exec();
  }

  // Récupérer toutes les adresses actives (non supprimées) d'un client
  async findAddressesByCustomer(customerId: string): Promise<CustomerAddress[]> {
    return this.customerAddressModel.find({
      customer: customerId,
      deleted_at: null,
    }).exec();
  }

  // Récupérer une adresse par son id (unique)
  async findAddressById(addressId: string): Promise<CustomerAddress> {
    const address = await this.customerAddressModel.findOne({
      id: addressId,
      deleted_at: null,
    }).exec();
    if (!address) throw new NotFoundException(`CustomerAddress with id ${addressId} not found`);
    return address;
  }

  // Mettre à jour une adresse client via son id unique
  async updateCustomerAddress(addressId: string, dto: Partial<CustomerAddress>): Promise<CustomerAddress> {
    const updated = await this.customerAddressModel.findOneAndUpdate(
      { id: addressId, deleted_at: null },
      dto,
      { new: true },
    ).exec();
    if (!updated) throw new NotFoundException(`CustomerAddress with id ${addressId} not found`);
    return updated;
  }

  // Suppression "soft" d'une adresse client (marquer comme supprimée)
  async softDeleteCustomerAddress(addressId: string): Promise<CustomerAddress> {
    const deleted = await this.customerAddressModel.findOneAndUpdate(
      { id: addressId, deleted_at: null },
      { deleted_at: new Date() },
      { new: true },
    ).exec();
    if (!deleted) throw new NotFoundException(`CustomerAddress with id ${addressId} not found`);
    return deleted;
  }

  // Restaurer une adresse supprimée
  async restoreCustomerAddress(addressId: string): Promise<CustomerAddress> {
    const restored = await this.customerAddressModel.findOneAndUpdate(
      { id: addressId, deleted_at: { $ne: null } },
      { deleted_at: null },
      { new: true },
    ).exec();
    if (!restored) throw new NotFoundException(`CustomerAddress with id ${addressId} not found or not deleted`);
    return restored;
  }

  // Ex: Marquer une adresse comme adresse de facturation par défaut et désactiver les autres
  async setDefaultBillingAddress(customerId: string, addressId: string): Promise<void> {
    // 1. Reset is_default_billing on all customer addresses
    await this.customerAddressModel.updateMany(
      { customer: customerId },
      { is_default_billing: false }
    ).exec();

    // 2. Set is_default_billing on selected address
    const updated = await this.customerAddressModel.findOneAndUpdate(
      { id: addressId, customer: customerId, deleted_at: null },
      { is_default_billing: true },
      { new: true }
    ).exec();

    if (!updated) throw new NotFoundException(`CustomerAddress ${addressId} not found or deleted`);
  }

  /**
   * 
   */

   async addCustomerToGroup(customerId: string, groupId: string, createdBy?: string, metadata?: Record<string, any>): Promise<CustomerGroupCustomer> {
    const created = new this.customerGroupCustomerModel({
      id: `cusgc_${new Types.ObjectId()}`, // ou un autre système de génération d’id
      customer: new Types.ObjectId(customerId),
      customer_group: new Types.ObjectId(groupId),
      created_by: createdBy,
      metadata: metadata || {},
      deleted_at: null,
    });
    return created.save();
  }

  // Récupérer tous les groupes d’un client
  async findGroupsByCustomer(customerId: string): Promise<CustomerGroupCustomer[]> {
    return this.customerGroupCustomerModel.find({
      customer: customerId,
      deleted_at: null,
    }).populate('customer_group').exec();
  }

  // Récupérer tous les clients d’un groupe
  async findCustomersByGroup(groupId: string): Promise<CustomerGroupCustomer[]> {
    return this.customerGroupCustomerModel.find({
      customer_group: groupId,
      deleted_at: null,
    }).populate('customer').exec();
  }

  // Supprimer (soft) un client d’un groupe
  async removeCustomerFromGroup(id: string): Promise<CustomerGroupCustomer> {
    const removed = await this.customerGroupCustomerModel.findOneAndUpdate(
      { id, deleted_at: null },
      { deleted_at: new Date() },
      { new: true },
    ).exec();
    if (!removed) throw new NotFoundException(`CustomerGroupCustomer with id ${id} not found or already deleted`);
    return removed;
  }

  // Restaurer un lien supprimé
  async restoreCustomerGroupCustomer(id: string): Promise<CustomerGroupCustomer> {
    const restored = await this.customerGroupCustomerModel.findOneAndUpdate(
      { id, deleted_at: { $ne: null } },
      { deleted_at: null },
      { new: true },
    ).exec();
    if (!restored) throw new NotFoundException(`CustomerGroupCustomer with id ${id} not found or not deleted`);
    return restored;
  }

  // Mettre à jour metadata ou created_by du lien (facultatif)
  async updateCustomerGroupCustomer(id: string, update: Partial<CustomerGroupCustomer>): Promise<CustomerGroupCustomer> {
    const updated = await this.customerGroupCustomerModel.findOneAndUpdate(
      { id, deleted_at: null },
      update,
      { new: true },
    ).exec();
    if (!updated) throw new NotFoundException(`CustomerGroupCustomer with id ${id} not found`);
    return updated;
  }
/**
 * CUSTOMER_GROUP_CUSTOMER
 * 
 */


 async createCustomerGroup(dto: CreateCustomerGroupDto): Promise<CustomerGroup> {
    const created = new this.customerGroupModel(dto);
    return created.save();
  }

 async findAllCustomerGroups(): Promise<CustomerGroup[]> {
    return this.customerGroupModel.find({ deleted_at: null }).populate('customers').exec();
  }

  async findCustomerGroupById(id: string): Promise<CustomerGroup> {
    const group = await this.customerGroupModel.findOne({ id, deleted_at: null }).populate('customers').exec();
    if (!group) throw new NotFoundException(`CustomerGroup ${id} not found`);
    return group;
  }

  async updateCustomerGroup(id: string, dto: UpdateCustomerGroupDto): Promise<CustomerGroup> {
    const updated = await this.customerGroupModel.findOneAndUpdate({ id, deleted_at: null }, dto, { new: true }).exec();
    if (!updated) throw new NotFoundException(`CustomerGroup ${id} not found`);
    return updated;
  }

  async softDeleteCustomerGroup(id: string): Promise<CustomerGroup> {
    const deleted = await this.customerGroupModel.findOneAndUpdate({ id, deleted_at: null }, { deleted_at: new Date() }, { new: true }).exec();
    if (!deleted) throw new NotFoundException(`CustomerGroup ${id} not found`);
    return deleted;
  }

  /**
   * METOHD EPOUR LES CUSTOMER
   */

   async findAllCustomers(): Promise<Customer[]> {
    return this.customerModel.find({ deleted_at: null }).populate('addresses').populate('groups').exec();
  }

  async findCustomerById(id: string): Promise<Customer> {
    const customer = await this.customerModel.findOne({ id, deleted_at: null }).populate('addresses').populate('groups').exec();
    if (!customer) throw new NotFoundException(`Customer ${id} not found`);
    return customer;
  }

  async createCustomer(dto: CreateCustomerDto): Promise<Customer> {
    const created = new this.customerModel(dto);
    return created.save();
  }

  async updateCustomer(id: string, dto: UpdateCustomerDto): Promise<Customer> {
    const updated = await this.customerModel.findOneAndUpdate({ id, deleted_at: null }, dto, { new: true }).exec();
    if (!updated) throw new NotFoundException(`Customer ${id} not found`);
    return updated;
  }

  async softDeleteCustomer(id: string): Promise<Customer> {
    const deleted = await this.customerModel.findOneAndUpdate({ id, deleted_at: null }, { deleted_at: new Date() }, { new: true }).exec();
    if (!deleted) throw new NotFoundException(`Customer ${id} not found`);
    return deleted;
  }

  

}
