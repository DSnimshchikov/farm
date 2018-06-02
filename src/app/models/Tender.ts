import {Finl} from './Finl';
import {Organization} from './Organization';
import {Cls} from './Cls';
import {Provider} from './Provider';
import {TenderType} from './TenderType';

export class Tender {
  id: number;
  num: string;
  rf_SFOID: number;
  rf_OrganisationClientID: number;
  rf_OrganisationPayerID: number;
  rf_FinID: number;
  date: string;
  dateBegin: string;
  dateEnd: string;
  finl: Finl;
  organisationClient: Organization;
  organisationPayer: Organization;
  cls: Array<Cls>;
  provider: Provider;
  tenderTypes: Array<TenderType>;
}
