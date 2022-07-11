import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { RuralProducerEntity } from './produtor-rural.entity';

@Entity({ name: 'crop' })
export class CropEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  crop: string;

  @ManyToMany(() => RuralProducerEntity)
  @JoinTable({ name: 'farmsCrops' })
  farmCrops: RuralProducerEntity[];
}
