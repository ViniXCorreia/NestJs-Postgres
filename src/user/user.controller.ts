import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { UserService } from './user.service';


@Controller('study')
export class UserController {
    constructor(
        private readonly userService: UserService
    ){}
    
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
