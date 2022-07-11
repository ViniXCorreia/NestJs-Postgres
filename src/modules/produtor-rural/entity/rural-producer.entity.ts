import { Crop } from './crop.entity';

export class RuralProducer {
  id: number;
  cpfCnpj: string;
  nameProducer: string;
  farmName: string;
  city: string;
  federalState: string;
  totalArea: number;
  arableArea: number;
  vegetationArea: number;
  cropsPlanted: Crop[];
}
