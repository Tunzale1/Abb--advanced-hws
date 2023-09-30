"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../src/index");
describe("Card", () => {
    //test 1
    it("calculates USD balans", () => {
        const card = new index_1.Card();
        const transaction1 = new index_1.Transaction(150, index_1.CurrencyEnum.USD);
        const transaction2 = new index_1.Transaction(250, index_1.CurrencyEnum.UAH);
        card.AddTransaction(transaction1);
        card.AddTransaction(transaction2);
        const usdBalance = card.GetBalance(index_1.CurrencyEnum.USD);
        expect(usdBalance).toBe(150);
    });
    //test:2
    it("retrieves a specific transaction by ID", () => {
        const card = new index_1.Card();
        const transaction = new index_1.Transaction(500, index_1.CurrencyEnum.USD);
        card.AddTransaction(transaction);
        const retrievedTransaction = card.GetTransaction(transaction.Id);
        expect(retrievedTransaction).toBeDefined();
        expect(retrievedTransaction === null || retrievedTransaction === void 0 ? void 0 : retrievedTransaction.Id).toBe(transaction.Id);
    });
});
