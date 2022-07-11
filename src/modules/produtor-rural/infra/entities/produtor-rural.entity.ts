import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Crop } from '../../entity/crop.entity';

@Entity({ name: 'ruralProducer' })
export class RuralProducerEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cpfCpnf: string;

  @Column()
  nameProducer: string;

  @Column()
  farmName: string;

  @Column()
  city: string;

  @Column()
  federalState: string;

  @Column()
  totalArea: number;

  @Column()
  arableArea: number;

  @Column()
  vegetationArea: number;

  @Column()
  cropsPlanted: Crop[];
}
