import { Card, CurrencyEnum, Transaction } from "../src/index";

describe("Card", () => {

//test 1
  it("calculates USD balans", () => {
    const card = new Card();
    const transaction1 = new Transaction(150, CurrencyEnum.USD);
    const transaction2 = new Transaction(250, CurrencyEnum.UAH);
    
    card.AddTransaction(transaction1);
    card.AddTransaction(transaction2); 

    const usdBalance = card.GetBalance(CurrencyEnum.USD);
    expect(usdBalance).toBe(150);
  });


//test:2
  it("retrieves a specific transaction by ID", () => {
    const card = new Card();
    const transaction = new Transaction(500, CurrencyEnum.USD);

    card.AddTransaction(transaction);

    const retrievedTransaction = card.GetTransaction(transaction.Id);
    expect(retrievedTransaction).toBeDefined();
    expect(retrievedTransaction?.Id).toBe(transaction.Id);
  });
})
