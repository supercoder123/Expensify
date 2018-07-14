import { createStore, combineReducers } from "redux";

const demoState = {
  expenses: [
    {
      id: "adsfads",
      description: "Rent",
      note: "this is a final payment",
      amount: 54500,
      createdAt: 0
    }
  ],
  filters: {
    text: "rent",
    sortBy: "date", //date or amount
    startDate: undefined,
    endDate: undefined
  }
};
