import { Module } from '@nestjs/common';
import { ProducerRuralController } from './infra/controller/rural-producer.controller';
import { RuralProducerRepoService } from './infra/repository/implementation/rural-producer-repo.service';
import { RURAL_PRODUCER_SERVICE_INTERFACE } from './infra/repository/produtor-rural.interface';

@Module({
  controllers: [ProducerRuralController],
  providers: [
    {
      provide: RURAL_PRODUCER_SERVICE_INTERFACE,
      useClass: RuralProducerRepoService,
    },
  ],
})
export class producerRuralModule {}
