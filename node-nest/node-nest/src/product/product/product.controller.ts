import {Body, Controller, Delete, Get, HttpCode, Param, Post, Put} from '@nestjs/common';
import {ProductDto} from "../../product.dto";

@Controller('product')
export class ProductController {




    @Get(':id')
    getProduct(@Param() params): string {
        return params.id;
    }

    @Post('/addProduct')
    @HttpCode(201)
    addCreateProduct2(@Body() productDto: ProductDto): string {
        return `El nombre del producto es ${productDto.name} con un precio de ${productDto.price} y un tamaño ${productDto.size}`;
    }

    @Put('/updateProduct')
    updateProduct(@Body() productDto: ProductDto): string {
        return `El nuevo producto es ${productDto.name} con un precio de ${productDto.price} y un tamaño ${productDto.size}`;
    }

    @Delete('/deleteProduct/:name')
    deleteProduct(@Param('name') name): string {
        return `El producto  ${name} ha sido eliminado.`;
    }
}
