import { IsNotEmpty, isNotEmpty, IsNumber, IsString } from "class-validator";

export class userDTO{
    @IsString()
    @IsNotEmpty()
    firstname: string
    
    @IsString()
    @IsNotEmpty()
    lastName: string
    
    @IsString()
    @IsNotEmpty()
    cpf: string

    @IsNumber()
    @IsNotEmpty()
    age: number

    @IsString()
    @IsNotEmpty()
    role: string

    @IsString()
    @IsNotEmpty()
    password: string

}