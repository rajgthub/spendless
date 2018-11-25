import {
  changeBills,
  changeMortgage,
  changeGeneralSpending,
  changeAge
} from "../../../redux/actions/expenditures";
test("should setup mortgage for monthly spending", () => {
  const payload = { mortgage: 50 };
  const result = changeMortgage(payload);
  expect(result).toEqual({
    type: "CHANGE_MORTGAGE",
    payload
  });
});
test("should setup bills for monthly spending", () => {
  const payload = { bills: 30 };
  const result = changeBills(payload);
  expect(result).toEqual({
    type: "CHANGE_BILLS",
    payload
  });
});
test("should setup generalSpending for monthly spending", () => {
  const payload = { generalSpending: 65 };
  const result = changeGeneralSpending(payload);
  expect(result).toEqual({
    type: "CHANGE_GENERAL_SPENDING",
    payload
  });
});
test("should setup from age for monthly spending", () => {
  const payload = { from_age: 30 };
  const result = changeAge(payload);
  expect(result).toEqual({
    type: "CHANGE_AGE",
    payload
  });
});
test("should setup to age for monthly spending", () => {
  const payload = { to_age: 65 };
  const result = changeAge(payload);
  expect(result).toEqual({
    type: "CHANGE_AGE",
    payload
  });
});
