import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { ProductCategory } from './entities/product-category.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductCategoryDto } from './dto/category/create-product-category.dto';
import { UpdateProductCategoryDto } from './dto/category/update-product-category.dto';
import { ProductCollection } from './entities/product-collection.entity';
import { CreateProductCollectionDto } from './dto/collection/create-product-collection.dto';
import { UpdateProductCollectionDto } from './dto/collection/update-product-collection.dto';
import { ProductOption } from './entities/product-option.entity';
import { CreateProductOptionDto } from './dto/option/create-product-option.dto';
import { UpdateProductOptionDto } from './dto/option/update-product-option.dto';
import { ProductOptionValue } from './entities/product-option-value.entity';
import { CreateProductOptionValueDto } from './dto/option-value/create-product-option-value.dto';
import { UpdateProductOptionValueDto } from './dto/option-value/update-product-option-value.dto';
import { ProductVariant } from './entities/product-variant.entity';
import { CreateProductVariantDto } from './dto/variant/create-product-variant.dto';
import { UpdateProductVariantDto } from './dto/variant/update-product-variant.dto';
import { CreateProductTagDto } from './dto/tag/create-product-tag.dto';
import { UpdateProductTagDto } from './dto/tag/update-product-tag.dto';
import { ProductTag } from './entities/product-tag.entity';
import { ProductType } from './entities/product-type.entity';
import { CreateProductTypeDto } from './dto/type/create-product-type.dto';
import { UpdateProductTypeDto } from './dto/type/update-product-type.dto';

@Injectable()
export class ProductService {

  constructor(
    @InjectModel(Product.name) private readonly productModel: Model<Product>,
    @InjectModel(ProductCategory.name) private readonly categoryModel: Model<ProductCategory>,
    @InjectModel(ProductCollection.name) private readonly collectionModel: Model<ProductCollection>,
    @InjectModel(ProductOption.name) private readonly optionModel: Model<ProductOption>,
    @InjectModel(ProductOptionValue.name) private readonly optionValueModel: Model<ProductOptionValue>,
    @InjectModel(ProductVariant.name) private readonly variantModel: Model<ProductVariant>,
    @InjectModel(ProductTag.name) private readonly tagModel: Model<ProductTag>,
    @InjectModel(ProductType.name) private readonly typeModel: Model<ProductType>,
    // Ajoute ici les autres modèles
  ) {}



  // product.service.ts (bloc Product)

  async createProduct(dto: CreateProductDto) {
    return this.productModel.create(dto);
  }

  async updateProduct(id: string, dto: UpdateProductDto) {
    return this.productModel.findByIdAndUpdate(id, dto, { new: true });
  }

  async upsertProduct(title: string, dto: CreateProductDto) {
    return this.productModel.findOneAndUpdate(
      { title },
      dto,
      { upsert: true, new: true }
    );
  }

  async softDeleteProduct(id: string) {
    return this.productModel.findByIdAndUpdate(id, { deleted_at: new Date() });
  }

  async deleteProduct(id: string) {
    return this.productModel.findByIdAndDelete(id);
  }

  async restoreProduct(id: string) {
    return this.productModel.findByIdAndUpdate(id, { deleted_at: null });
  }

  async listProducts() {
    return this.productModel.find({ deleted_at: null });
  }

  async listAndCountProducts() {
    const docs = await this.productModel.find({ deleted_at: null });
    const count = await this.productModel.countDocuments({ deleted_at: null });
    return { docs, count };
  }

  async retrieveProduct(id: string) {
    return this.productModel.findById(id);
  }


  //product category
  async createProductCategory(dto: CreateProductCategoryDto) {
    return this.categoryModel.create(dto);
  }

  async updateProductCategory(id: string, dto: UpdateProductCategoryDto) {
    return this.categoryModel.findByIdAndUpdate(id, dto, { new: true });
  }

  async upsertProductCategory(handle: string, dto: CreateProductCategoryDto) {
    return this.categoryModel.findOneAndUpdate(
      { handle },
      dto,
      { upsert: true, new: true }
    );
  }

  async softDeleteProductCategory(id: string) {
    return this.categoryModel.findByIdAndUpdate(id, { deleted_at: new Date() });
  }

  async deleteProductCategory(id: string) {
    return this.categoryModel.findByIdAndDelete(id);
  }

  async restoreProductCategory(id: string) {
    return this.categoryModel.findByIdAndUpdate(id, { deleted_at: null });
  }

  async listProductCategories() {
    return this.categoryModel.find({ deleted_at: null });
  }

  async listAndCountProductCategories() {
    const docs = await this.categoryModel.find({ deleted_at: null });
    const count = await this.categoryModel.countDocuments({ deleted_at: null });
    return { docs, count };
  }

  async retrieveProductCategory(id: string) {
    return this.categoryModel.findById(id);
  }

  //collection

  // product.service.ts (bloc complet)

  async createProductCollection(dto: CreateProductCollectionDto) {
    return this.collectionModel.create(dto);
  }

  async updateProductCollection(id: string, dto: UpdateProductCollectionDto) {
    return this.collectionModel.findByIdAndUpdate(id, dto, { new: true });
  }

  async upsertProductCollection(handle: string, dto: CreateProductCollectionDto) {
    return this.collectionModel.findOneAndUpdate(
      { handle },
      dto,
      { upsert: true, new: true }
    );
  }

  async softDeleteProductCollection(id: string) {
    return this.collectionModel.findByIdAndUpdate(id, { deleted_at: new Date() });
  }

  async deleteProductCollection(id: string) {
    return this.collectionModel.findByIdAndDelete(id);
  }

  async restoreProductCollection(id: string) {
    return this.collectionModel.findByIdAndUpdate(id, { deleted_at: null });
  }

  async listProductCollections() {
    return this.collectionModel.find({ deleted_at: null });
  }

  async listAndCountProductCollections() {
    const docs = await this.collectionModel.find({ deleted_at: null });
    const count = await this.collectionModel.countDocuments({ deleted_at: null });
    return { docs, count };
  }

  async retrieveProductCollection(id: string) {
    return this.collectionModel.findById(id);
  }

  //  ProductOption

  async createProductOption(dto: CreateProductOptionDto) {
    return this.optionModel.create(dto);
  }

  async updateProductOption(id: string, dto: UpdateProductOptionDto) {
    return this.optionModel.findByIdAndUpdate(id, dto, { new: true });
  }

  async upsertProductOption(title: string, dto: CreateProductOptionDto) {
    return this.optionModel.findOneAndUpdate(
      { title },
      dto,
      { upsert: true, new: true }
    );
  }

  async softDeleteProductOption(id: string) {
    return this.optionModel.findByIdAndUpdate(id, { deleted_at: new Date() });
  }

  async deleteProductOption(id: string) {
    return this.optionModel.findByIdAndDelete(id);
  }

  async restoreProductOption(id: string) {
    return this.optionModel.findByIdAndUpdate(id, { deleted_at: null });
  }

  async listProductOptions() {
    return this.optionModel.find({ deleted_at: null });
  }

  async listAndCountProductOptions() {
    const docs = await this.optionModel.find({ deleted_at: null });
    const count = await this.optionModel.countDocuments({ deleted_at: null });
    return { docs, count };
  }

  async retrieveProductOption(id: string) {
    return this.optionModel.findById(id);
  }

  //option-value // product.service.ts (bloc complet ProductOptionValue)

  async createProductOptionValue(dto: CreateProductOptionValueDto) {
    return this.optionValueModel.create(dto);
  }

  async updateProductOptionValue(id: string, dto: UpdateProductOptionValueDto) {
    return this.optionValueModel.findByIdAndUpdate(id, dto, { new: true });
  }

  async upsertProductOptionValue(value: string, dto: CreateProductOptionValueDto) {
    return this.optionValueModel.findOneAndUpdate(
      { value },
      dto,
      { upsert: true, new: true }
    );
  }

  async softDeleteProductOptionValue(id: string) {
    return this.optionValueModel.findByIdAndUpdate(id, { deleted_at: new Date() });
  }

  async deleteProductOptionValue(id: string) {
    return this.optionValueModel.findByIdAndDelete(id);
  }

  async restoreProductOptionValue(id: string) {
    return this.optionValueModel.findByIdAndUpdate(id, { deleted_at: null });
  }

  async listProductOptionValues() {
    return this.optionValueModel.find({ deleted_at: null });
  }

  async listAndCountProductOptionValues() {
    const docs = await this.optionValueModel.find({ deleted_at: null });
    const count = await this.optionValueModel.countDocuments({ deleted_at: null });
    return { docs, count };
  }

  async retrieveProductOptionValue(id: string) {
    return this.optionValueModel.findById(id);
  }
//ProductVriant

// product.service.ts (bloc complet ProductVariant)

  async createProductVariant(dto: CreateProductVariantDto) {
    return this.variantModel.create(dto);
  }

  async updateProductVariant(id: string, dto: UpdateProductVariantDto) {
    return this.variantModel.findByIdAndUpdate(id, dto, { new: true });
  }

  async upsertProductVariant(sku: string, dto: CreateProductVariantDto) {
    return this.variantModel.findOneAndUpdate(
      { sku },
      dto,
      { upsert: true, new: true }
    );
  }

  async softDeleteProductVariant(id: string) {
    return this.variantModel.findByIdAndUpdate(id, { deleted_at: new Date() });
  }

  async deleteProductVariant(id: string) {
    return this.variantModel.findByIdAndDelete(id);
  }

  async restoreProductVariant(id: string) {
    return this.variantModel.findByIdAndUpdate(id, { deleted_at: null });
  }

  async listProductVariants() {
    return this.variantModel.find({ deleted_at: null });
  }

  async listAndCountProductVariants() {
    const docs = await this.variantModel.find({ deleted_at: null });
    const count = await this.variantModel.countDocuments({ deleted_at: null });
    return { docs, count };
  }

  async retrieveProductVariant(id: string) {
    return this.variantModel.findById(id);
  }

  //product tags

  // product.service.ts (bloc ProductTag)

  async createProductTag(dto: CreateProductTagDto) {
    return this.tagModel.create(dto);
  }

  async updateProductTag(id: string, dto: UpdateProductTagDto) {
    return this.tagModel.findByIdAndUpdate(id, dto, { new: true });
  }

  async upsertProductTag(name: string, dto: CreateProductTagDto) {
    return this.tagModel.findOneAndUpdate(
      { name },
      dto,
      { upsert: true, new: true }
    );
  }

  async softDeleteProductTag(id: string) {
    return this.tagModel.findByIdAndUpdate(id, { deleted_at: new Date() });
  }

  async deleteProductTag(id: string) {
    return this.tagModel.findByIdAndDelete(id);
  }

  async restoreProductTag(id: string) {
    return this.tagModel.findByIdAndUpdate(id, { deleted_at: null });
  }

  async listProductTags() {
    return this.tagModel.find({ deleted_at: null });
  }

  async listAndCountProductTags() {
    const docs = await this.tagModel.find({ deleted_at: null });
    const count = await this.tagModel.countDocuments({ deleted_at: null });
    return { docs, count };
  }

  async retrieveProductTag(id: string) {
    return this.tagModel.findById(id);
  }
//tag

// product.service.ts (bloc ProductType)

  async createProductType(dto: CreateProductTypeDto) {
    return this.typeModel.create(dto);
  }

  async updateProductType(id: string, dto: UpdateProductTypeDto) {
    return this.typeModel.findByIdAndUpdate(id, dto, { new: true });
  }

  async upsertProductType(name: string, dto: CreateProductTypeDto) {
    return this.typeModel.findOneAndUpdate(
      { name },
      dto,
      { upsert: true, new: true }
    );
  }

  async softDeleteProductType(id: string) {
    return this.typeModel.findByIdAndUpdate(id, { deleted_at: new Date() });
  }

  async deleteProductType(id: string) {
    return this.typeModel.findByIdAndDelete(id);
  }

  async restoreProductType(id: string) {
    return this.typeModel.findByIdAndUpdate(id, { deleted_at: null });
  }

  async listProductTypes() {
    return this.typeModel.find({ deleted_at: null });
  }

  async listAndCountProductTypes() {
    const docs = await this.typeModel.find({ deleted_at: null });
    const count = await this.typeModel.countDocuments({ deleted_at: null });
    return { docs, count };
  }

  async retrieveProductType(id: string) {
    return this.typeModel.findById(id);
  }




}
