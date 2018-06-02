import {Nomenclature} from './Nomenclature';

export class Serie {
  id: number;
  num: string;
  sertMSG: string;
  rf_NomenclatureID: number;
  date_E: string;
  isNew: boolean;
  nomenclature: Nomenclature;
}
