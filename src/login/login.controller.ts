import { Body, Controller, Post } from '@nestjs/common';
import { userDTO } from './dto/userLogin.dto';

@Controller('login')
export class LoginController {
    constructor( ){}

    @Post('login')
    async loginUser(@Body() param:userDTO){
        return '';
    }
}
