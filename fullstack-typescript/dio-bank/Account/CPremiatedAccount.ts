import { CBaseAccount } from "./CBaseAccount";

export class CPremiatedAccount extends CBaseAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit(depositValue): void {
    super.deposit(depositValue + 10);
  }
}
