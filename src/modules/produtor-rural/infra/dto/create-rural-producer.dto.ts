import { IsNumber, IsString } from 'class-validator';
import { CropEntity } from '../entities/crop.entity';

export class CreateRuralProducerDto {
  @IsString()
  cpfCnpj: string;

  @IsString()
  nameProducer: string;

  @IsString()
  farmName: string;

  @IsString()
  city: string;

  @IsString()
  federalState: string;

  @IsNumber()
  totalArea: number;

  @IsNumber()
  arableArea: number;

  @IsNumber()
  vegetationArea: number;

  crops: CropEntity[];
}
