import { Test, TestingModule } from '@nestjs/testing';
import { ProducerRuralController } from './rural-producer.controller';

describe('producerRuralController', () => {
  let controller: ProducerRuralController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProducerRuralController],
      providers: [],
    }).compile();

    controller = module.get<ProducerRuralController>(ProducerRuralController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
