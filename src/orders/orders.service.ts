import { Injectable } from '@nestjs/common';
import { ProductsService } from 'src/products/products.service';

@Injectable()
export class OrdersService {
  constructor(private readonly productsService: ProductsService) {}

  placeOrder(productId: number): boolean {
    const product = this.productsService.findById(productId);

    return !!product;
  }
}
