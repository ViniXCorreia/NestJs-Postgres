import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User) private userRepo:Repository<User>
    ){}

    async findByCpf(cpf: string){
        try {
            const user = await this.userRepo.findOne({where: {cpf: cpf}})
            if(user instanceof User){
                return user;
            }
            throw new NotFoundException()
        } catch (error) {
            if(error instanceof NotFoundException){
                return "Usuário Não encontrado";
            }
            return NotFoundException;
        }
    }

    async findRole(id: number){
        try {
            const user = await this.userRepo.findOne({where: {id: id}})
            if(user instanceof User){
                return user.role;
            }
            throw new NotFoundException()
        } catch (error) {
            if(error instanceof NotFoundException){
                return "Usuário não encontrado"
            }
            return NotFoundException;
        }
    }

    async getPassword(id: number){
        try {
            const user = await this.userRepo.findOne({where: {id: id}})
            if(user instanceof User){
                return user.password
            }
            throw new NotFoundException();
        } catch (error) {
            if(error instanceof NotFoundException){
                return "Usuário não Encontrado"
            }
            
            return NotFoundException;
        }
    }
}
