import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('chamado')
export class Chamado{
    @PrimaryGeneratedColumn()
    idChamado: number;

    @Column()
    idUsuario: number;

    @Column()
    idTecnico: number;
    
    @Column()
    titulo: string;

    @Column()
    descricao: string;
    
    @Column()
    dataAbertura: Date;
    
    @Column()
    dataFechamento: Date;
    
    @Column()
    solucao: string;
}