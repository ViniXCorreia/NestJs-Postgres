import { Inject, Injectable } from '@nestjs/common';
import { IUseCase } from '../../../_shared/protocols/IUseCase';
import { RuralProducer } from '../entity/rural-producer.entity';
import { CreateRuralProducerDto } from '../infra/dto/create-rural-producer.dto';
import {
  IRuralProducerRepoService,
  RURAL_PRODUCER_SERVICE_INTERFACE,
} from '../infra/repository/produtor-rural.interface';

interface CreateRuralProducerParams {
  createRuralProducerDTO: CreateRuralProducerDto;
}

@Injectable()
export class CreateRuralProducerUseCase
  implements IUseCase<CreateRuralProducerParams, RuralProducer>
{
  constructor(
    @Inject(RURAL_PRODUCER_SERVICE_INTERFACE)
    private readonly ruralProducerRepoService: IRuralProducerRepoService,
  ) {}

  async execute(data: CreateRuralProducerParams): Promise<RuralProducer> {
    return await this.ruralProducerRepoService.createRuralProducer(
      data.createRuralProducerDTO,
    );
  }
}
