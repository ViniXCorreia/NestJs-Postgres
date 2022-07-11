import { PartialType } from '@nestjs/mapped-types';
import { CreateRuralProducerDto } from './create-rural-producer.dto';

export class UpdateRuralProducerlDto extends PartialType(
  CreateRuralProducerDto,
) {}
