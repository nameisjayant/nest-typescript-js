import { Get,Controller, Post, Redirect, Query, Param, Body } from "@nestjs/common";
import { createInterface } from "readline";
import { CatsService } from "src/demo/cats/cats.service";
import { CatDto, CatInterface } from "src/demo/dto/cat-dto";

@Controller('cats')
export class CatController{

    constructor(private catService:CatsService){}

    @Get()
    getCats():String{
        return 'This end point is for cats'
    }
    @Post()
    createCats(
        @Body() data:CatDto
    ):String{
        return 'cats end points created...!'
    }

    @Get('docs')
    @Redirect('https://docs.nestjs.com',302)
    getDocs(@Query('version') version:any) {
        if (version && version === '5') {
          return { url: 'https://docs.nestjs.com/v5/' };
        }
      }

    @Get(':id')
    findOne(@Param() params:any):String{
        return `The return id is ${params.id}`
    }

    @Post()
    async letsCreateCat(@Body() createInterface:CatInterface){
        this.catService.createCat(createInterface)
    }

    @Get()
    async letsGetAllCats():Promise<CatInterface[]>{
        return this.catService.fetchAllCats()
    }

}