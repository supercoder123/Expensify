import { addExpense, removeExpense, editExpense } from "../../actions/expenses";

test("should set up remove action object", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc"
  });
});

test("setup editExpense", () => {
  const action = editExpense("334", { note: "new value" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "334",
    updates: { note: "new value" }
  });
});

test("setup addExpense with provided values", () => {
  const expenseData = {
    description: "Rent",
    amount: "10000",
    createdAt: 1000,
    note: "this is last months"
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test("set addExpense with default values", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      description: "",
      note: "",
      amount: 0,
      createdAt: 0
    }
  });
});
