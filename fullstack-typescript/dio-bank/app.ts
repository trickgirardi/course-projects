import { CCompanyAccount } from "./Account/CCompanyAccount";
import { CPeopleAccount } from "./Account/CPeopleAccount";
import { CPremiatedAccount } from "./Account/CPremiatedAccount";

const myAccount: CPeopleAccount = new CPeopleAccount(3691969, "Patrick", 11);
const myCompanyAccount: CCompanyAccount = new CCompanyAccount("Lumeflow", 21);
const myPremiatedAccount: CPremiatedAccount = new CPremiatedAccount("Bit", 31);

myAccount.deposit(369);
myCompanyAccount.deposit(1969);
myPremiatedAccount.deposit(904);

myPremiatedAccount.withdraw(23);
myAccount.deposit(23);

console.log(
  `Olá, ${myAccount.getName()}. Você tem um saldo de ${myAccount.getBalance()} reais.`
);
console.log(
  `Sua empresa, ${myCompanyAccount.getName()}, tem um saldo de ${myCompanyAccount.getBalance()} reais.`
);
console.log(
  `Sua outra conta (${myPremiatedAccount.getName()}), tem um saldo de ${myPremiatedAccount.getBalance()} reais.`
);
