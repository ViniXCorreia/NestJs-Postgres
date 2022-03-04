import { IsNotEmpty, IsString, Max, Min } from "class-validator";

export class userDTO{

    @IsNotEmpty()
    @Min(11)
    @Max(11)
    cpf: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}