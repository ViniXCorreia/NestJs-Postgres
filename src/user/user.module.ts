import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LoginModule } from "../login/login.module";
import { User } from "./entity/user.entity";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
    imports:[
        TypeOrmModule.forFeature([
            User
        ])
    ],
    controllers:[UserController],
    providers:[UserService],
    exports:[UserService]
})
export class UserModule {}
