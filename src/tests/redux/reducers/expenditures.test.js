import dataJson from "../../../db";
const initialExpenditures = dataJson.expenditures;
import expenditures from "../../../redux/reducers/expenditure";
test("should setup default state for expenditures", () => {
  const result = expenditures(undefined, "@INIT");
  expect(result).toEqual(initialExpenditures);
});
test("should return changed state for expenditures", () => {
  const payload = { from_age: 35 };
  const action = { type: "CHANGE_AGE", payload };
  const result = expenditures(initialExpenditures, action);
  expect(result[0].from_age).toBe(35);
});
test("should return changed state for expenditures", () => {
  const payload = { to_age: 50 };
  const action = { type: "CHANGE_AGE", payload };
  const result = expenditures(initialExpenditures, action);
  expect(result[0].to_age).toBe(50);
});
test("should return changed bills state for expenditures", () => {
  const payload = { bills: 5000 };
  const action = { type: "CHANGE_BILLS", payload };
  const result = expenditures(initialExpenditures, action);
  const bills = result.filter(expenditure => expenditure.name === "Bills");
  expect(bills[0].amount).toBe(5000);
});
test("should return changed mortgage state for expenditures", () => {
  const payload = { mortgage: 6000 };
  const action = { type: "CHANGE_MORTGAGE", payload };
  const result = expenditures(initialExpenditures, action);
  const mortgage = result.filter(
    expenditure => expenditure.name === "Mortgage"
  );
  expect(mortgage[0].amount).toBe(6000);
});
test("should return changed general spending state for expenditures", () => {
  const payload = { generalSpending: 7000 };
  const action = { type: "CHANGE_GENERAL_SPENDING", payload };
  const result = expenditures(initialExpenditures, action);
  const generalSpending = result.filter(
    expenditure => expenditure.name === "General spending"
  );
  expect(generalSpending[0].amount).toBe(7000);
});
