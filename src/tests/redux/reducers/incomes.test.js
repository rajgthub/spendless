import dataJson from "../../../db";
const initialIncomes = dataJson.incomes[0];
import incomes from "../../../redux/reducers/income";
test("should setup default state for incomes", () => {
  const result = incomes(undefined, "@INIT");
  expect(result).toEqual(initialIncomes);
});
test("should return changed from_age for anual incomes", () => {
  const payload = { from_age: 35 };
  const action = { type: "CHANGE_INCOME", payload };
  const result = incomes(initialIncomes, action);
  expect(result).toEqual({
    ...initialIncomes,
    from_age: payload.from_age
  });
});
test("should return changed to_age for anual incomes", () => {
  const payload = { to_age: 50 };
  const action = { type: "CHANGE_INCOME", payload };
  const result = incomes(initialIncomes, action);
  expect(result).toEqual({
    ...initialIncomes,
    to_age: payload.to_age
  });
});
