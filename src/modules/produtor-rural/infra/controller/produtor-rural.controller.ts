import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProdutorRuralService } from '../produtor-rural.service';
import { CreateProdutorRuralDto } from '../dto/create-produtor-rural.dto';
import { UpdateProdutorRuralDto } from '../dto/update-produtor-rural.dto';

@Controller('produtor-rural')
export class ProdutorRuralController {
  constructor(private readonly produtorRuralService: ProdutorRuralService) {}

  @Post()
  create(@Body() createProdutorRuralDto: CreateProdutorRuralDto) {
    return this.produtorRuralService.create(createProdutorRuralDto);
  }

  @Get()
  findAll() {
    return this.produtorRuralService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.produtorRuralService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProdutorRuralDto: UpdateProdutorRuralDto) {
    return this.produtorRuralService.update(+id, updateProdutorRuralDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.produtorRuralService.remove(+id);
  }
}
