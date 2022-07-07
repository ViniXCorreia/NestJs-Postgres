import { Module } from '@nestjs/common';
import { ProdutorRuralService } from './produtor-rural.service';
import { ProdutorRuralController } from './infra/controller/produtor-rural.controller';

@Module({
  controllers: [ProdutorRuralController],
  providers: [ProdutorRuralService]
})
export class ProdutorRuralModule {}
