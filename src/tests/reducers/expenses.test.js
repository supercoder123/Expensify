import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";
import moment from "moment";

test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expense if id not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "-1"
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should add expense", () => {
  const action = {
    type: "ADD_EXPENSE",
    expense: {
      id: "299",
      description: "jelkd",
      note: "",
      createdAt: 29393,
      amount: 3333
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([
    expenses[0],
    expenses[1],
    expenses[2],
    action.expense
  ]);
});

test("should edit expense if found", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: "2",
    updates: { note: "this is updated rent note" }
  };

  const updatedExpense = {
    id: "2",
    description: "rent",
    note: "this is updated rent note",
    amount: 3930000,
    createdAt: moment(0)
      .subtract(4, "days")
      .valueOf()
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], updatedExpense, expenses[2]]);
});

test("should not edit expense if id not found", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: "3",
    updates: { note: "this is updated rent note" }
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
