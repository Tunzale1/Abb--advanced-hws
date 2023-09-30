"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = exports.CurrencyEnum = exports.Card = void 0;
const uuid_1 = require("uuid");
var CurrencyEnum;
(function (CurrencyEnum) {
    CurrencyEnum[CurrencyEnum["USD"] = 0] = "USD";
    CurrencyEnum[CurrencyEnum["UAH"] = 1] = "UAH";
})(CurrencyEnum || (exports.CurrencyEnum = CurrencyEnum = {}));
class Transaction {
    constructor(amount, currency) {
        this.Id = (0, uuid_1.v4)();
        this.Amount = amount;
        this.Currency = currency;
    }
}
exports.Transaction = Transaction;
class Card {
    constructor() {
        this.transactions = [];
    }
    AddTransaction(transaction) {
        this.transactions.push(transaction);
        return transaction.Id;
    }
    AddTransactionWith(amount, currency) {
        const transaction = new Transaction(amount, currency);
        this.transactions.push(transaction);
        return transaction.Id;
    }
    GetTransaction(transactionId) {
        for (const transaction of this.transactions) {
            if (transaction.Id === transactionId) {
                return transaction;
            }
        }
        return undefined;
    }
    GetBalance(currency) {
        const totalAmount = this.transactions.reduce((sum, transaction) => {
            if (transaction.Currency === currency) {
                sum += transaction.Amount;
            }
            return sum;
        }, 0);
        return totalAmount;
    }
}
exports.Card = Card;
