import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { userDTO } from '../../login/dto/userLogin.dto';
import { User } from '../../login/entity/User.entity';

@Injectable()
export class UsuarioService {

    constructor(
        @InjectRepository(User) private userRepo:Repository<User>
    ){}

    async findByCpf(cpf: string){
        try {
            const user = await this.userRepo.findOne({where: {cpf: cpf}})
            if(user instanceof userDTO){
                return user;
            }
            throw new NotFoundException()
        } catch (error) {
            if(error instanceof NotFoundException){
                return null;
            }
            return NotFoundException;
        }
    }
}
