import { CBaseAccount } from "./CBaseAccount";

export class CCompanyAccount extends CBaseAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan(loanValue: number): void {
    if (!this.validateStatus()) {
      return;
    }
    this.deposit(loanValue);
  }
}
