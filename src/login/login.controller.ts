import { Body, Controller, Post } from '@nestjs/common';
import { userLoginDTO } from './dto/userLoginDTO.dto';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
    constructor( 
        private readonly loginService: LoginService
     ){}

    @Post('userlogin')
    async loginUser(@Body() param:userLoginDTO){
        return await this.loginService.login(param);
    }
}
