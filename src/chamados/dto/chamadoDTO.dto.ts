import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class chamadoDTO{
    @IsNotEmpty()
    @IsNumber()
    idUsuario: number

    @IsNotEmpty()
    @IsNumber()
    idTecnico: number

    @IsNotEmpty()
    @IsString()
    titulo: string

    @IsNotEmpty()
    @IsString()
    descricao: string

    @IsNotEmpty()
    @IsDate()
    dataAbertura: Date

    @IsNotEmpty()
    @IsDate()
    dataFechamento: Date

    @IsNotEmpty()
    @IsString()
    solucao: string



}