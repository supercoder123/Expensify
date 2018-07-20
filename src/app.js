import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import { addExpense, removeExpense, editExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import visibleExpenses from "./selectors/expenses";

const store = configureStore();

store.dispatch(
  addExpense({
    description: "Water bill",
    note: "this is a water bill",
    createdAt: 0,
    amount: 4800
  })
);

store.dispatch(
  addExpense({
    description: "Gas bill",
    note: "this is a gas bill",
    amount: 0,
    createdAt: 1000
  })
);

store.dispatch(
  addExpense({
    description: "Rent",
    note: "this is a rent bill",
    createdAt: 0,
    amount: 234800
  })
);

const storeReturned = store.getState();
console.log(visibleExpenses(storeReturned.expenses, storeReturned.filters));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
