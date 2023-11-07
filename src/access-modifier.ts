{
class BankAccount {
  constructor(public readonly id : number, public name : string, protected _balance: number ){}

  addDeposit(amount: number){
   return this._balance = this._balance + amount
  }
  getBalance(){
    return this._balance
  }
}

class StudentAcc extends BankAccount{
  test(){
    this._balance // If we user private modifier then we can't get access of that property inside of class inheritance also in the instance but using protected we can get it inside inheritance
  }
}

const userAccount = new BankAccount(22, 'Mr. X', 1000)
const deposit = userAccount.addDeposit(20);
const balance = userAccount.getBalance()

console.log(balance)


}