import { v4 as uuidv4 } from "uuid";

enum CurrencyEnum {
    USD,
    UAH,
  }

  class Transaction {
    readonly Id: string;
    readonly Amount: number;
    readonly Currency: CurrencyEnum;
  
    constructor(amount: number, currency: CurrencyEnum) {
      this.Id = uuidv4();
      this.Amount = amount;
      this.Currency = currency;
    }
  }

  class Card {
    private transactions: Transaction[] = [];
  
    AddTransaction(transaction: Transaction): string {
      this.transactions.push(transaction);
      return transaction.Id;
    }
  
    AddTransactionWith(amount: number, currency: CurrencyEnum): string {
      const transaction = new Transaction(amount, currency);
      this.transactions.push(transaction);
      return transaction.Id;
    }
  
    GetTransaction(transactionId: string): Transaction | undefined {
        for (const transaction of this.transactions) {
          if (transaction.Id === transactionId) {
            return transaction;
          }
        }
        return undefined;
      }
  
    GetBalance(currency: CurrencyEnum): number {
      const totalAmount = this.transactions.reduce((sum, transaction) => {
        if (transaction.Currency === currency) {
          sum += transaction.Amount;
        }
        return sum;
      }, 0);
      return totalAmount;
    }
  }
  export { Card, CurrencyEnum,Transaction };
