import { DioAccount } from "./DioAccount";

class VipAccount extends DioAccount {
    
    deposit = (value: number): void => {
        if (this.validateStatus()) {
            this.setBalance(this.getBalance() + value + 10)
            console.log('Você depositou ' + value + ' e ganhou +10 de bônus')
        } else {
            console.log ('Sua conta está inativa! O depósito falhou!')
        }
    }
}

export { VipAccount };