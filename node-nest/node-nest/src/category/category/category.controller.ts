import {Controller, Get} from '@nestjs/common';
import {CategoryService} from "../category.service";

@Controller('category')
export class CategoryController {

    constructor(private readonly _categoryService: CategoryService) {
    }

    @Get()
    public getMessage(): string {
        return this._categoryService.showMessage();
    }
}
