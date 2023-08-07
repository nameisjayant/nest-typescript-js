import { Injectable } from '@nestjs/common';
import { CatInterface } from 'src/demo/dto/cat-dto';

@Injectable()
export class CatsService {
    private readonly cats:CatInterface[] = []

    createCat(cat:CatInterface){
        this.cats.push(cat)
    }

    fetchAllCats():CatInterface[]{
        return this.cats
    }

}
