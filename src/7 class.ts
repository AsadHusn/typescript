// getters and setters

class Account3 {
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

  // getter with get keyword
  get balance(): number {
    return this._balance;
  }
  // setter with validation

  set balance(value: number) {
    if (value < 0) {
      throw new Error("Invalid value");
    }
    this._balance = value;
  }
}

let account3 = new Account3(1, "mosh", 9);
account3.deposit(10);

console.log(account3 instanceof Account3);

// set value
account3.balance = 3
// get value
console.log(account3.balance);
