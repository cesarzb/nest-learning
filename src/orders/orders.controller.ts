import { Controller, Post, Body } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Post('')
  createOrder(@Body('productId') productId: number): boolean {
    return this.ordersService.placeOrder(productId);
  }
}
