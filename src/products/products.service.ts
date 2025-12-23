import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  async findAll(): Promise<string[]> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const products = ['fish', 'potatoes', 'nail', 'surfing board'];
    return products;
  }
}
