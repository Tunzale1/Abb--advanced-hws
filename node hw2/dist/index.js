"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = exports.CurrencyEnum = exports.Card = void 0;
var uuid_1 = require("uuid");
var CurrencyEnum;
(function (CurrencyEnum) {
    CurrencyEnum[CurrencyEnum["USD"] = 0] = "USD";
    CurrencyEnum[CurrencyEnum["UAH"] = 1] = "UAH";
})(CurrencyEnum || (exports.CurrencyEnum = CurrencyEnum = {}));
var Transaction = /** @class */ (function () {
    function Transaction(amount, currency) {
        this.Id = (0, uuid_1.v4)();
        this.Amount = amount;
        this.Currency = currency;
    }
    return Transaction;
}());
exports.Transaction = Transaction;
var Card = /** @class */ (function () {
    function Card() {
        this.transactions = [];
    }
    Card.prototype.AddTransaction = function (transaction) {
        this.transactions.push(transaction);
        return transaction.Id;
    };
    Card.prototype.AddTransactionWith = function (arg1, arg2) {
        if (typeof arg1 === 'number' && arg2 !== undefined) {
            var transaction = new Transaction(arg1, arg2);
            this.transactions.push(transaction);
            return transaction.Id;
        }
        else if (arg1 instanceof Transaction) {
            this.transactions.push(arg1);
            return arg1.Id;
        }
        else {
            throw new Error("Invalid arguments for AddTransactionWith");
        }
    };
    Card.prototype.GetTransaction = function (transactionId) {
        for (var _i = 0, _a = this.transactions; _i < _a.length; _i++) {
            var transaction = _a[_i];
            if (transaction.Id === transactionId) {
                return transaction;
            }
        }
        return undefined;
    };
    Card.prototype.GetBalance = function (currency) {
        var totalAmount = this.transactions.reduce(function (sum, transaction) {
            if (transaction.Currency === currency) {
                sum += transaction.Amount;
            }
            return sum;
        }, 0);
        return totalAmount;
    };
    return Card;
}());
exports.Card = Card;
