import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { userDTO } from './dto/userLogin.dto';
import { LoginService } from './login.service';

@Controller('study')
export class LoginController {
    constructor(
        private readonly loginService:LoginService
    ){}

    @Post('login')
    async loginUser(@Body() param:userDTO){
        return '';
    }

    @Post('create')
    async createUser(@Body() name: string, cpf: string){
        return '';
    }

    @Put('update/:id')
    async updateUser(@Param('id') id: number){
        return '';
    }

    @Get('viewuser/:cpf')
    async viewUser(@Param('cpf') cpf: number){
        return '';
    }

    @Delete('deluser/:cpf')
    async delUser(@Param('cpf') cpf: string){
        return '';
    }

}
