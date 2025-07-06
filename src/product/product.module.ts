import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Product, ProductSchema } from './entities/product.entity';
import { ProductCategory, ProductCategorySchema } from './entities/product-category.entity';
import { ProductCollection, ProductCollectionSchema } from './entities/product-collection.entity';

import { ProductOptionValue, ProductOptionValueSchema } from './entities/product-option-value.entity';
import { ProductVariant, ProductVariantSchema } from './entities/product-variant.entity';
import { ProductTag, ProductTagSchema } from './entities/product-tag.entity';
import { ProductType, ProductTypeSchema } from './entities/product-type.entity';

import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { ProductOption, ProductOptionSchema } from './entities/product-option.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Product.name, schema: ProductSchema },
      { name: ProductCategory.name, schema: ProductCategorySchema },
      { name: ProductCollection.name, schema: ProductCollectionSchema },
      { name: ProductOption.name, schema: ProductOptionSchema },
      { name: ProductOptionValue.name, schema: ProductOptionValueSchema },
      { name: ProductVariant.name, schema: ProductVariantSchema },
      { name: ProductTag.name, schema: ProductTagSchema },
      { name: ProductType.name, schema: ProductTypeSchema },
    ]),
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
