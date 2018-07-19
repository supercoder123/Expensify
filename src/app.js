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
    amount: 800
  })
);

store.dispatch(
  addExpense({
    description: "Gas bill",
    note: "this is a gas bill",
    amount: 300
  })
);

store.dispatch(setTextFilter("water"));

const storeReturned = store.getState();
console.log(visibleExpenses(storeReturned.expenses, storeReturned.filters));

setTimeout(() => {
  store.dispatch(setTextFilter("rent"));
}, 3000);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
