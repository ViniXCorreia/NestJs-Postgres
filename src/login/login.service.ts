import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsuarioService } from '../usuario/usuario/usuario.service';
import { userDTO } from './dto/userLogin.dto';
import { User } from './entity/User.entity';

@Injectable()
export class LoginService {
    constructor(
        @InjectRepository(User) private userRepo:Repository<User>,
        private usuarioService:UsuarioService
    ){}

    async login(param: userDTO){
        try {
            let user = this.usuarioService.findByCpf(param.cpf);
            if(user){
               return user; 
            } else {
                return 'Não encontrado'
            }
        } catch (error) {
            return 'Erro'
        }
    }

}
