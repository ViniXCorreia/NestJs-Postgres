import { IsNotEmpty, isNotEmpty, IsNumber, IsString, Max, Min } from "class-validator";

export class userDTO{
    @IsString()
    @IsNotEmpty()
    firstName: string
    
    @IsString()
    @IsNotEmpty()
    lastName: string
    
    @IsString()
    @IsNotEmpty()
    @Max(11)
    @Min(11)
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