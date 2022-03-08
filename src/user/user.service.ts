import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Not, Repository } from 'typeorm';
import { userDTO } from './dto/userDto';
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
        } catch (error) {
           return error;
        }
    }

    async findById(id: number){
        try {
            const user = this.userRepo.findOneOrFail({where: {id: id}})
            if(user instanceof User){
                return user
            }
            throw new NotFoundException()
        } catch (error) {
            if(error instanceof NotFoundException){
                return "Usuário não encotrado"
            }
        }
    }

    async findAll(){
        try {
            return await this.userRepo.find();
        } catch (error) {
            return "Erro ao procurar os usuários"
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

    async createUser(param: userDTO){
        try {
            const result = await this.findByCpf(param.cpf);
            if(result instanceof User){
                return "Usuário já existe na base de dados"
            } else {
                return this.userRepo.save(param);
            }
        } catch (error) {
            throw error;
        }
    }

    async updateUser(param: User){
        try {
            const result = await this.findById(param.id)
            if(result instanceof User){
                return this.userRepo.save(param);
            }else{
                return "Erro ao atualizar o usuário"
            }
        } catch (error) {
            return "Erro ao Conectar o banco de dados"            
        }
    }

    async removeUser(id: number){
        try{
            return this.userRepo.delete(id)
        } catch (error){
            return "Erro ao deletar o usuário"
        }
    }
}
