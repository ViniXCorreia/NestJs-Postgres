import { Module } from '@nestjs/common';
import { ProdutorRuralController } from './infra/controller/produtor-rural.controller';

@Module({
  controllers: [ProdutorRuralController],
  providers: [],
})
export class ProdutorRuralModule {}
