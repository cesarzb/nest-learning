import { Controller, Get, Post, Req } from '@nestjs/common';
import type { Request } from 'express';

@Controller('products')
export class ProductsController {
  @Post()
  create(): string {
    return 'Product created';
  }

  @Get()
  findAll(@Req() request: Request): string[] {
    console.log(request);
    const products = ['fish', 'potatoes', 'nail', 'surfing board'];
    return products;
  }
}
