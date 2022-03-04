import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserService } from '../user/user.service';
import { userDTO } from './dto/userLogin.dto';
import { User } from '../user/entity/user.entity';

@Injectable()
export class LoginService {
    constructor(
        @InjectRepository(User) private userRepo:Repository<User>,
        private usuarioService:UserService
    ){}

    async login(param: userDTO){
        try {
            let user = await this.usuarioService.findByCpf(param.cpf);
            if(user instanceof User){
                var password = await this.usuarioService.getPassword(user.id);
                if(password == param.password){
                    return "Usuário Logado"
                }
            }

        } catch (error) {
            return 'Erro'
        }
    }

}
