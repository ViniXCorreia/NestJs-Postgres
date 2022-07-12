import { RuralProducer } from '../../entity/rural-producer.entity';
import { RuralProducerEntity } from '../entities/produtor-rural.entity';

export function ruralProducerFactory(data: RuralProducerEntity): RuralProducer {
  let ruralProducer = new RuralProducer();
  ruralProducer = { ...ruralProducer, ...data };
  return ruralProducer;
}
