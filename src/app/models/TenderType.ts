import {Delivery} from './Delivery';

export class TenderType {
  id: number;
  name: string;
  deliveries: Array<Delivery>;
  isNew: boolean;
}
