import { Crop } from '../../entity/crop.entity';
import { CropEntity } from '../entities/crop.entity';

export function cropFactory(data: CropEntity): Crop {
  let crop = new Crop();
  crop = { ...crop, ...data };
  return crop;
}
