import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Crop } from '../../../entity/crop.entity';
import { RuralProducer } from '../../../entity/rural-producer.entity';
import { CreateRuralProducerDto } from '../../dto/create-rural-producer.dto';
import { UpdateRuralProducerlDto } from '../../dto/update-rural-producer.dto';
import { CropEntity } from '../../entities/crop.entity';
import { RuralProducerEntity } from '../../entities/produtor-rural.entity';
import { cropFactory } from '../../factory/crop.factory';
import { ruralProducerFactory } from '../../factory/rural-producer.factory';

import { IRuralProducerRepoService } from '../produtor-rural.interface';

@Injectable()
export class RuralProducerRepoService implements IRuralProducerRepoService {
  constructor(
    @InjectRepository(RuralProducerEntity)
    private ruralProducerRepository: Repository<RuralProducerEntity>,
    private cropRepository: Repository<CropEntity>
  ) {}
  async createRuralProducer(
    createRuralProducerDTO: CreateRuralProducerDto,
  ): Promise<RuralProducer> {
    let result = await this.ruralProducerRepository.create(
      createRuralProducerDTO,
    );
    return ruralProducerFactory(result);
  }

  async findAll(): Promise<RuralProducer[]> {
    let result = await this.ruralProducerRepository.find();
    return result.map((ruralProducer) => ruralProducerFactory(ruralProducer));
  }

  async findById(id: number): Promise<RuralProducer> {
    let result = await this.ruralProducerRepository.findOne(id);
    return ruralProducerFactory(result);
  }

  findTotalAreaOfAllFarms(): Promise<number> {
    let totalAreaOfFarms = this.ruralProducerRepository
      .createQueryBuilder('farm')
      .select('SUM(farm.totalArea', 'sum')
      .getRawOne();

    return totalAreaOfFarms;
  }

  async findAllByFederalState(federalState: string): Promise<RuralProducer[]> {
    let allFarms = await this.ruralProducerRepository.find({
      where: { federalState: federalState },
    });

    return allFarms.map((farm) => ruralProducerFactory(farm));
  }

  async findAllByCrop(crop: string): Promise<RuralProducer[]> {
    let allByCrop = await this.ruralProducerRepository.find({
      where: { cropsPlanted: crop },
    });

    return allByCrop.map((crop) => ruralProducerFactory(crop));
  }

  findAllByGroundUsage(): Promise<RuralProducer[]> {
    throw new Error('Method not implemented.');
  }

  updateRuralProducer(
    updateRuralProducerDTO: UpdateRuralProducerlDto,
  ): Promise<RuralProducer> {
    throw new Error('Method not implemented.');
  }

  deleteRuralProducer(id: number): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
