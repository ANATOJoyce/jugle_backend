import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { CreateProductCategoryDto } from './dto/category/create-product-category.dto';
import { UpdateProductCategoryDto } from './dto/category/update-product-category.dto';
import { CreateProductCollectionDto } from './dto/collection/create-product-collection.dto';
import { UpdateProductCollectionDto } from './dto/collection/update-product-collection.dto';
import { CreateProductOptionDto } from './dto/option/create-product-option.dto';
import { UpdateProductOptionDto } from './dto/option/update-product-option.dto';
import { CreateProductOptionValueDto } from './dto/option-value/create-product-option-value.dto';
import { UpdateProductOptionValueDto } from './dto/option-value/update-product-option-value.dto';
import { CreateProductVariantDto } from './dto/variant/create-product-variant.dto';
import { UpdateProductVariantDto } from './dto/variant/update-product-variant.dto';
import { CreateProductTagDto } from './dto/tag/create-product-tag.dto';
import { UpdateProductTagDto } from './dto/tag/update-product-tag.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

// product

  @Post()
  createProduct(@Body() dto: CreateProductDto) {
    return this.productService.createProduct(dto);
  }

  @Patch(':id')
  updateProduct(@Param('id') id: string, @Body() dto: UpdateProductDto) {
    return this.productService.updateProduct(id, dto);
  }

  @Put('upsert/:title')
  upsertProduct(@Param('title') title: string, @Body() dto: CreateProductDto) {
    return this.productService.upsertProduct(title, dto);
  }

  @Patch(':id/soft-delete')
  softDeleteProduct(@Param('id') id: string) {
    return this.productService.softDeleteProduct(id);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return this.productService.deleteProduct(id);
  }

  @Post(':id/restore')
  restoreProduct(@Param('id') id: string) {
    return this.productService.restoreProduct(id);
  }

  @Get()
  listProducts() {
    return this.productService.listProducts();
  }

  @Get('list-and-count')
  listAndCountProducts() {
    return this.productService.listAndCountProducts();
  }

  @Get(':id')
  retrieveProduct(@Param('id') id: string) {
    return this.productService.retrieveProduct(id);
  }

// product categories


  @Post('categories')
  createCategory(@Body() dto: CreateProductCategoryDto) {
    return this.productService.createProductCategory(dto);
  }

  @Patch('categories/:id')
  updateCategory(@Param('id') id: string, @Body() dto: UpdateProductCategoryDto) {
    return this.productService.updateProductCategory(id, dto);
  }

  @Put('categories/upsert/:handle')
  upsertCategory(@Param('handle') handle: string, @Body() dto: CreateProductCategoryDto) {
    return this.productService.upsertProductCategory(handle, dto);
  }

  @Patch('categories/:id/soft-delete')
  softDeleteCategory(@Param('id') id: string) {
    return this.productService.softDeleteProductCategory(id);
  }

  @Delete('categories/:id')
  deleteCategory(@Param('id') id: string) {
    return this.productService.deleteProductCategory(id);
  }

  @Post('categories/:id/restore')
  restoreCategory(@Param('id') id: string) {
    return this.productService.restoreProductCategory(id);
  }

  @Get('categories')
  listCategories() {
    return this.productService.listProductCategories();
  }

  @Get('categories/list-and-count')
  listAndCountCategories() {
    return this.productService.listAndCountProductCategories();
  }

  @Get('categories/:id')
  retrieveCategory(@Param('id') id: string) {
    return this.productService.retrieveProductCategory(id);
  }

//collection 

  @Post('collections')
  createCollection(@Body() dto: CreateProductCollectionDto) {
    return this.productService.createProductCollection(dto);
  }

  @Patch('collections/:id')
  updateCollection(@Param('id') id: string, @Body() dto: UpdateProductCollectionDto) {
    return this.productService.updateProductCollection(id, dto);
  }

  @Put('collections/upsert/:handle')
  upsertCollection(@Param('handle') handle: string, @Body() dto: CreateProductCollectionDto) {
    return this.productService.upsertProductCollection(handle, dto);
  }

  @Patch('collections/:id/soft-delete')
  softDeleteCollection(@Param('id') id: string) {
    return this.productService.softDeleteProductCollection(id);
  }

  @Delete('collections/:id')
  deleteCollection(@Param('id') id: string) {
    return this.productService.deleteProductCollection(id);
  }

  @Post('collections/:id/restore')
  restoreCollection(@Param('id') id: string) {
    return this.productService.restoreProductCollection(id);
  }

  @Get('collections')
  listCollections() {
    return this.productService.listProductCollections();
  }

  @Get('collections/list-and-count')
  listAndCountCollections() {
    return this.productService.listAndCountProductCollections();
  }

  @Get('collections/:id')
  retrieveCollection(@Param('id') id: string) {
    return this.productService.retrieveProductCollection(id);
  }

// ProductOption

  @Post('options')
  createOption(@Body() dto: CreateProductOptionDto) {
    return this.productService.createProductOption(dto);
  }

  @Patch('options/:id')
  updateOption(@Param('id') id: string, @Body() dto: UpdateProductOptionDto) {
    return this.productService.updateProductOption(id, dto);
  }

  @Put('options/upsert/:title')
  upsertOption(@Param('title') title: string, @Body() dto: CreateProductOptionDto) {
    return this.productService.upsertProductOption(title, dto);
  }

  @Patch('options/:id/soft-delete')
  softDeleteOption(@Param('id') id: string) {
    return this.productService.softDeleteProductOption(id);
  }

  @Delete('options/:id')
  deleteOption(@Param('id') id: string) {
    return this.productService.deleteProductOption(id);
  }

  @Post('options/:id/restore')
  restoreOption(@Param('id') id: string) {
    return this.productService.restoreProductOption(id);
  }

  @Get('options')
  listOptions() {
    return this.productService.listProductOptions();
  }

  @Get('options/list-and-count')
  listAndCountOptions() {
    return this.productService.listAndCountProductOptions();
  }

  @Get('options/:id')
  retrieveOption(@Param('id') id: string) {
    return this.productService.retrieveProductOption(id);
  }

//ProductValue 


  @Post('option-values')
  createOptionValue(@Body() dto: CreateProductOptionValueDto) {
    return this.productService.createProductOptionValue(dto);
  }

  @Patch('option-values/:id')
  updateOptionValue(@Param('id') id: string, @Body() dto: UpdateProductOptionValueDto) {
    return this.productService.updateProductOptionValue(id, dto);
  }

  @Put('option-values/upsert/:value')
  upsertOptionValue(@Param('value') value: string, @Body() dto: CreateProductOptionValueDto) {
    return this.productService.upsertProductOptionValue(value, dto);
  }

  @Patch('option-values/:id/soft-delete')
  softDeleteOptionValue(@Param('id') id: string) {
    return this.productService.softDeleteProductOptionValue(id);
  }

  @Delete('option-values/:id')
  deleteOptionValue(@Param('id') id: string) {
    return this.productService.deleteProductOptionValue(id);
  }

  @Post('option-values/:id/restore')
  restoreOptionValue(@Param('id') id: string) {
    return this.productService.restoreProductOptionValue(id);
  }

  @Get('option-values')
  listOptionValues() {
    return this.productService.listProductOptionValues();
  }

  @Get('option-values/list-and-count')
  listAndCountOptionValues() {
    return this.productService.listAndCountProductOptionValues();
  }

  @Get('option-values/:id')
  retrieveOptionValue(@Param('id') id: string) {
    return this.productService.retrieveProductOptionValue(id);
  }
//ProductVariant

  @Post('variants')
  createVariant(@Body() dto: CreateProductVariantDto) {
    return this.productService.createProductVariant(dto);
  }

  @Patch('variants/:id')
  updateVariant(@Param('id') id: string, @Body() dto: UpdateProductVariantDto) {
    return this.productService.updateProductVariant(id, dto);
  }

  @Put('variants/upsert/:sku')
  upsertVariant(@Param('sku') sku: string, @Body() dto: CreateProductVariantDto) {
    return this.productService.upsertProductVariant(sku, dto);
  }

  @Patch('variants/:id/soft-delete')
  softDeleteVariant(@Param('id') id: string) {
    return this.productService.softDeleteProductVariant(id);
  }

  @Delete('variants/:id')
  deleteVariant(@Param('id') id: string) {
    return this.productService.deleteProductVariant(id);
  }

  @Post('variants/:id/restore')
  restoreVariant(@Param('id') id: string) {
    return this.productService.restoreProductVariant(id);
  }

  @Get('variants')
  listVariants() {
    return this.productService.listProductVariants();
  }

  @Get('variants/list-and-count')
  listAndCountVariants() {
    return this.productService.listAndCountProductVariants();
  }

  @Get('variants/:id')
  retrieveVariant(@Param('id') id: string) {
    return this.productService.retrieveProductVariant(id);
  }

//prodcuct tags

  @Post('tags')
  createTag(@Body() dto: CreateProductTagDto) {
    return this.productService.createProductTag(dto);
  }

  @Patch('tags/:id')
  updateTag(@Param('id') id: string, @Body() dto: UpdateProductTagDto) {
    return this.productService.updateProductTag(id, dto);
  }

  @Put('tags/upsert/:name')
  upsertTag(@Param('name') name: string, @Body() dto: CreateProductTagDto) {
    return this.productService.upsertProductTag(name, dto);
  }

  @Patch('tags/:id/soft-delete')
  softDeleteTag(@Param('id') id: string) {
    return this.productService.softDeleteProductTag(id);
  }

  @Delete('tags/:id')
  deleteTag(@Param('id') id: string) {
    return this.productService.deleteProductTag(id);
  }

  @Post('tags/:id/restore')
  restoreTag(@Param('id') id: string) {
    return this.productService.restoreProductTag(id);
  }

  @Get('tags')
  listTags() {
    return this.productService.listProductTags();
  }

  @Get('tags/list-and-count')
  listAndCountTags() {
    return this.productService.listAndCountProductTags();
  }

  @Get('tags/:id')
  retrieveTag(@Param('id') id: string) {
    return this.productService.retrieveProductTag(id);
  }



}
