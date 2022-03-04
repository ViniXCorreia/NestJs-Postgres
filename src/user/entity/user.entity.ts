import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    cpf: string

    @Column()
    lastName: string;

    @Column()
    age: number;

    @Column()
    role: string;

    @Column()
    password: string;

}
