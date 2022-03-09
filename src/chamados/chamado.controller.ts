import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ChamadoService } from './chamado.service';
import { chamadoDTO } from './dto/chamadoDTO.dto';

@Controller('chamado')
export class ChamadoController {
    constructor(
        private readonly chamadoService : ChamadoService
    ){}

    @Post('createChamado')
    async creteNewChamado(@Body() param: chamadoDTO){
        return '';
    }

    @Delete('deleteChamado/:id')
    async deleteChamado(@Param('id') id: number){
        return'';
    }

    @Put('updateChamado')
    async updateChamado(@Body() param: chamadoDTO){
        return'';
    }

    @Get('getChamado/:id')
    async getChamado(@Param('id') id: number){
        return '';
    }

    @Get('allChamados')
    async getAllChamados(){
        return '';
    }

    @Get('chamadosAbertos')
    async getOpenedChamados(Param){
        return '';
    }
}
