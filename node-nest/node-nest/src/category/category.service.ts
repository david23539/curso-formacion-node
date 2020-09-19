import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {

    public showMessage(): string {
        return 'Estás en la sección de categorias';
    }
}
