import {TenderType} from './TenderType';
import {Serie} from './Serie';
import {StatePosition} from './StatePosition';
import {Organization} from './Organization';
import {Tender} from './Tender';
import {Nomenclature} from './Nomenclature';

export class PositionBill {
  id: number;
  rf_BillDocumentID: number;
  rf_StateID: number;
  rf_NomenclatureID: number;
  count: number;
  price: number;
  summa: number;
  measure: string;
  rf_SeriesID: number;
  rf_TenderID: number;
  note: string;
  rf_OrganisationOwnerID: number;
  rf_TenderTypeID: number;
  tenderType: TenderType;
  series: Array<Serie>;
  statePosition: StatePosition;
  producer: Organization;
  tender: Tender;
  nomenclature: Nomenclature;
  isNew: boolean;
  consigment: string;
}
