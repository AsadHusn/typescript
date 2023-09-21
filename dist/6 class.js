"use strict";
class Account2 {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Invalid amount");
        }
        this._balance += amount;
    }
    getBalance() {
        return this._balance;
    }
}
let account2 = new Account2(1, "mosh", 9);
account2.deposit(10);
console.log(account2 instanceof Account2);
