import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { userLoginDTO } from './dto/userLoginDTO.dto';
import { User } from '../user/entity/user.entity';

@Injectable()
export class LoginService {
    constructor(
        private usuarioService:UserService
    ){}

    async login(param: userLoginDTO){
        try {
            let user = await this.usuarioService.findByCpf(param.cpf);
            if(user instanceof User){
                var password = await this.usuarioService.getPassword(user.id);
                if(password == param.password){
                    return "Usuário Logado"
                }
            } else {
                return "Cpf ou senha incorretos"
            }

        } catch (error) {
            return 'Erro'
        }
    }

}
