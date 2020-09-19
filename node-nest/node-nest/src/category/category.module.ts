import {Global, Module} from '@nestjs/common';
import { CategoryController } from './category/category.controller';
import { CategoryService } from './category.service';

@Global()
@Module({
  controllers: [CategoryController],
  providers: [CategoryService]
})
export class CategoryModule {}
