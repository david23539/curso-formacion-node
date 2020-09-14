import {
  Body,
  Controller,
  Get,
  HttpCode,
  Ip,
  Param,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';
import { ProductDto } from './product.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  addCreateProduct(): string {
    return 'Se han añadido todos los productos';
  }

  @Post('/addProduct')
  @HttpCode(201)
  addCreateProduct2(@Body() productDto: ProductDto): string {
    return `El nombre del producto es ${productDto.name} con un precio de ${productDto.price} y un tamaño ${productDto.size}`;
  }

  @Get(':id')
  getProduct(@Param() params): string {
    return params.id;
  }

  @Get(':id')
  getProduct2(@Param() params, @Ip() ip): string {
    return ip;
  }
}
