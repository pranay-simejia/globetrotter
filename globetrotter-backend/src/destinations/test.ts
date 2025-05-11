
// import { Injectable, NotFoundException } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { Product } from './entities/product.entity';
// import {
//   CreateProductBulkDto,
//   CreateProductDto,
// } from './dto/create-product.dto';
// import { UpdateProductDto } from './dto/update-product.dto';

// @Injectable()
// export class ProductService {
//   constructor(
//     @InjectRepository(Product)
//     private productRepo: Repository<Product>,
//   ) {}

//   async create(dto: CreateProductDto): Promise<Product> {
//     const product = this.productRepo.create(dto);
//     return this.productRepo.save(product);
//   }

//   async bulkCreate(data: CreateProductBulkDto): Promise<Product[]> {
//     const containers = this.productRepo.create(data.data); // creates entity instances
//     return await this.productRepo.save(containers); // inserts all in one go
//   }

//   // Get all products with container details
//   async findAll(): Promise<Product[]> {
//     return this.productRepo.find({
//       relations: ['containers', 'containers.container'], // Load related containers and quantities
//       order: { created_at: 'DESC' },
//     });
//   }

//   // Get single product with container details
//   async findOne(id: number): Promise<Product> {
//     const product = await this.productRepo.findOne({
//       where: { id },
//       relations: ['containers', 'containers.container'],
//     });
//     if (!product) throw new NotFoundException('Product not found');
//     return product;
//   }

//   async update(id: number, dto: UpdateProductDto): Promise<Product> {
//     const product = await this.productRepo.preload({ id, ...dto });
//     if (!product) throw new NotFoundException('Product not found');
//     return this.productRepo.save(product);
//   }

//   async remove(id: number): Promise<void> {
//     const product = await this.productRepo.findOne({ where: { id } });
//     if (!product) throw new NotFoundException('Product not found');
//     await this.productRepo.softRemove(product); // uses `deleted_at`
//   }
// }

