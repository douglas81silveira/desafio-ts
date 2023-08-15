import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount.getName() + ' balance: ' + peopleAccount.getBalance())
peopleAccount.deposit(100)
peopleAccount.withdraw(50)
console.log(peopleAccount.getName() + ' balance: ' + peopleAccount.getBalance())

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log(companyAccount.getName() + ' balance: ' + companyAccount.getBalance())
companyAccount.deposit(200)
companyAccount.withdraw(50)
console.log(companyAccount.getName() + ' balance: ' + companyAccount.getBalance())

companyAccount.getLoan(1000)