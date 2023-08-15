import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (value: number): void => {
    if (this.validateStatus()) {
      this.setBalance(this.getBalance() + value)
      console.log('Seu empréstimo foi realizado com sucesso! Novo saldo: ' + this.getBalance())
    } else {
      console.log('Não foi possível realizar o empréstimo!')
    }
  }
}
