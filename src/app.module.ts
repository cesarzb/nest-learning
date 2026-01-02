import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';

@Module({
  imports: [ProductsModule, OrdersModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
