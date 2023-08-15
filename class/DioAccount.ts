export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    if (this.validateStatus()){
      this.balance += value
      console.log('Você depositou ' + value)
    } else {
      console.log('Não é possível efetuar o depósito. Sua conta está inativa!');
    }
  }

  withdraw = (value: number): void => {
    if (this.validateStatus()) {
      if (this.balance >= value) {
        this.balance -= value;
        console.log('Você sacou ' + value)
      } else {
        console.log('Sua conta possui saldo insuficiente para o valor informado!')
      }
    } else {
      console.log('Não é possível efetuar o saque. Sua conta está inativa!');
    }
  }

  getBalance = (): number => {
    return this.balance
  }

  setBalance = (value: number): void => {
    this.balance = value
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
