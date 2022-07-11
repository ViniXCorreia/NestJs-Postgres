import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateRuralProducerDto } from '../dto/create-rural-producer.dto';

@Controller('producer-rural')
export class ProducerRuralController {
  constructor() {}

  @Post()
  create(@Body() createproducerRuralDto: CreateRuralProducerDto) {
    return this.producerRuralService.create(createproducerRuralDto);
  }

  // @Get()
  // findAll() {
  //   return this.producerRuralService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.producerRuralService.findOne(+id);
  // }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateproducerRuralDto: UpdateRuralProducerDto,
  // ) {
  //   return this.producerRuralService.update(+id, updateproducerRuralDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.producerRuralService.remove(+id);
  // }
}
