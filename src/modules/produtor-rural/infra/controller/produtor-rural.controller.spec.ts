import { Test, TestingModule } from '@nestjs/testing';
import { ProdutorRuralController } from './produtor-rural.controller';
import { ProdutorRuralService } from '../produtor-rural.service';

describe('ProdutorRuralController', () => {
  let controller: ProdutorRuralController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProdutorRuralController],
      providers: [ProdutorRuralService],
    }).compile();

    controller = module.get<ProdutorRuralController>(ProdutorRuralController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
