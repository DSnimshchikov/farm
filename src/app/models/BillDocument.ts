import {User} from './User';
import {Organization} from './Organization';
import {Tender} from './Tender';
import {PositionBill} from './PositionBill';
import {StateDocument} from './StateDocument';

export class BillDocument {
  id: number;
  num: string;
  user: User;
  organisationClient: Organization;
  organisationContragent: Organization;
  organisationProvider: Organization;
  organisationAgent: Organization;
  tender: Tender;
  docGuid: string;
  rf_OrganisationClientID: number;
  rf_OrganisationContragent: number;
  rf_OrganisationProviderID: number;
  rf_OrganisationAgentID: number;
  rf_TenderID: number;
  rf_StateID: number;
  rf_UserID: number;
  rf_StoreID: number;
  hostBillDocumentID: number;
  rf_DocumentJournalIDHost: number;
  rf_DogovorIDHost: number;
  rf_OrganisationAgentIDHost: number;
  rf_OrganisationByDemandIDHost: number;
  rf_OrganisationClientIDHost: number;
  rf_OrganisationContragentHost: number;
  rf_OrganisationOwnerIDHost: number;
  rf_OrganisationProviderIDHost: number;
  rf_ResponsibleIDHost: number;
  rf_PeriodIDHost: number;
  rf_BillEx_OtherIDHost: number;
  rf_StoreIDHost: number;
  rf_ResponsibleTempIDHost: number;
  positionBills: Array<PositionBill>;
  isNew: boolean;
  stateDocument: StateDocument;
}
