// parameter properties

class Account2 {
  // property initializer
  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number
  ) {}

  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("Invalid amount"); 
    }
    this._balance += amount;
  }

  getBalance(): number {
    return this._balance;
  }
}

let account2 = new Account2(1, "mosh", 9);
account2.deposit(10);

console.log(account2 instanceof Account2);
