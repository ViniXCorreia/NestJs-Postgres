import { PartialType } from '@nestjs/mapped-types';
import { CreateProdutorRuralDto } from './create-produtor-rural.dto';

export class UpdateProdutorRuralDto extends PartialType(CreateProdutorRuralDto) {}
