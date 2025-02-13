import { CBaseAccount } from "./CBaseAccount";

export class CPeopleAccount extends CBaseAccount {
  doc_id: number;

  constructor(doc_id: number, name: string, accountNumber: number) {
    super(name, accountNumber);
    this.doc_id = doc_id;
  }
}
