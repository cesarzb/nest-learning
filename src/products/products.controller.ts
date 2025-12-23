import { Controller, Get, Post, Param, Query, Body } from '@nestjs/common';
import CreateProductDto from './dto/create-product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  async findAll(): Promise<string[]> {
    return this.productsService.findAll();
  }

  @Get('search')
  searchProduct(
    @Query('term') term?: string,
    @Query('limit') limit?: string,
  ): { term?: string; limit?: string } {
    return { term: term, limit: limit };
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `Returning product with id: ${id}`;
  }

  @Post()
  create(@Body() createProductDto: CreateProductDto): CreateProductDto {
    console.log(createProductDto.title);
    return createProductDto;
  }
}
