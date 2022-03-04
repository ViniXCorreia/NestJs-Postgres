import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { userDTO } from '../login/dto/userLogin.dto';
import { UserService } from './user.service';


@Controller('study')
export class UserController {
    constructor(
        private readonly userService: UserService
    ){}

    @Post('create')
    async createUser(@Body() params: userDTO, ){
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
