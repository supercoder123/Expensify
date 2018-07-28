import filtersReducer from "../../reducers/filters";
import moment from "moment";

test("should setup default filter values", () => {
  const state = filtersReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

test("should setup sortBy to amount", () => {
  const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state.sortBy).toBe("amount");
});

test("should setup sortBy to date", () => {
  const currentState = {
    text: "",
    startDate: undefined,
    endDate: undefined,
    sortBy: "amount"
  };

  const state = filtersReducer(currentState, { type: "SORT_BY_DATE" });
  expect(state.sortBy).toBe("date");
});

test("should setup text filter", () => {
  const action = { type: "SET_TEXT_FILTER", text: "hello" };
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe(action.text);
});

test("should setup startDate filter", () => {
  const action = {
    type: "SET_START_DATE",
    startDate: moment()
  };
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toEqual(action.startDate);
});

test("should setup endDate filter", () => {
  const action = {
    type: "SET_END_DATE",
    endDate: moment()
  };
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toEqual(action.endDate);
});
