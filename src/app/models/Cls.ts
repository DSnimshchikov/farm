import {Delivery} from './Delivery';

export class Cls {
  id: number;
  count_All: number;
  rf_LSID: number;
  if_TenderId: number;
  isCOD: number;
  isNew: boolean;
  deliveries: Array<Delivery>;
}
