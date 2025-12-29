import { Injectable } from '@nestjs/common';
import type { Product } from './interfaces/product.interface';
import CreateProductDto from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  private products: Product[] = [
    {
      id: 1,
      title: 'fish',
      price: 1,
    },
    {
      id: 2,
      title: 'potatoes',
      price: 2,
    },
    {
      id: 3,
      title: 'nail',
      price: 3,
    },
    {
      id: 4,
      title: 'surfing board',
      price: 4,
    },
  ];

  async findAll(): Promise<Product[]> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return this.products;
  }

  findById(id: number): Product | undefined {
    return this.products.find((product) => product.id === id);
  }

  create(createProductDto: CreateProductDto): Product {
    const newProduct: Product = {
      id: Math.floor(Math.random() * 1000),
      ...createProductDto,
    };

    this.products.push(newProduct);

    return newProduct;
  }
}
