import { Crop } from '../../entity/crop.entity';
import { RuralProducer } from '../../entity/rural-producer.entity';
import { CreateRuralProducerDto } from '../dto/create-rural-producer.dto';
import { UpdateRuralProducerlDto } from '../dto/update-rural-producer.dto';

export const RURAL_PRODUCER_SERVICE_INTERFACE = 'IRuralProducerRepoService';

export interface IRuralProducerRepoService {
  createRuralProducer(
    createRuralProducerDTO: CreateRuralProducerDto,
  ): Promise<RuralProducer>;
  findAll(): Promise<RuralProducer[]>;
  findById(id: number): Promise<RuralProducer>;
  findTotalAreaOfAllFarms(): Promise<number>;
  findAllByFederalState(federalState: string): Promise<RuralProducer[]>;
  findAllByCrop(crop: string): Promise<RuralProducer[]>;
  findAllByGroundUsage(): Promise<RuralProducer[]>;
  updateRuralProducer(
    updateRuralProducerDTO: UpdateRuralProducerlDto,
  ): Promise<RuralProducer>;
  deleteRuralProducer(id: number): Promise<boolean>;
}
