import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { Code } from 'typeorm';
import { userDTO } from './dto/userDto';
import { User } from './entity/user.entity';
import { UserService } from './user.service';


@Controller('study')
export class UserController {
    constructor(
        private readonly userService: UserService
    ){}

    @Post('create')
    async createdUser(@Body() params: userDTO){
        return this.userService.createUser(params);
    }

    @Put('update')
    async updateUser(@Body() param: User){
        return this.userService.updateUser(param);
    }

    @Get('getuser/:cpf')
    async viewUser(@Param('cpf') cpf : string){
        return this.userService.findByCpf(cpf);
    }

    @Get('getallusers')
    async getAll(){
        return this.userService.findAll();
    }

    @Delete('deluser')
    async delUser(@Body() id: number){
        return this.userService.removeUser(id);
    }

}
