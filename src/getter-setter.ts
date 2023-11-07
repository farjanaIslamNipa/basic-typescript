{


  class BankAccount {
    constructor(public readonly id : number, public name : string, protected _balance: number ){}
  
    set deposit (amount: number){
     this._balance = this.totalBalance + amount
    }
    get totalBalance(){
      return this._balance
    }
  }

  
  const userAccount = new BankAccount(22, 'Mr. X', 100)
  userAccount.deposit = 30;
  const balance = userAccount.totalBalance
  
  console.log(balance)
  




}