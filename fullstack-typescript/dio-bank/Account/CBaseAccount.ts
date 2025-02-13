export abstract class CBaseAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  getName(): string {
    return this.name;
  }

  deposit(depositValue: number): void {
    this.balance = this.balance + depositValue;
  }

  withdraw(withdrawValue: number): void {
    if (this.validateStatus() && this.balance >= withdrawValue) {
      this.balance = this.balance - withdrawValue;
    }
  }

  getBalance(): number {
    return this.balance;
  }

  validateStatus(): boolean {
    if (this.status) {
      return this.status;
    }

    throw new Error("Conta inválida");
  }
}
