"use strict";
class Account3 {
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
    get balance() {
        return this._balance;
    }
    set balance(value) {
        if (value < 0) {
            throw new Error("Invalid value");
        }
        this._balance = value;
    }
}
let account3 = new Account3(1, "mosh", 9);
account3.deposit(10);
console.log(account3 instanceof Account3);
account3.balance = 3;
console.log(account3.balance);
