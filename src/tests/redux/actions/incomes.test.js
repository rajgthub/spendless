import configureMockStore from 'redux-mock-store'
import { changeIncome } from "../../../redux/actions/incomes";
test("should setup amount for anual incomes", () => {
  const payload = { amount: 50 };
  const result = changeIncome(payload);
  expect(result).toEqual({
    type: "CHANGE_INCOME",
    payload
  });
});
test("should setup from age for anual incomes", () => {
  const payload = { from_age: 30 };
  const result = changeIncome(payload);
  expect(result).toEqual({
    type: "CHANGE_INCOME",
    payload
  });
});
test("should setup to age for anual incomes", () => {
  const payload = { to_age: 65 };
  const result = changeIncome(payload);
  expect(result).toEqual({
    type: "CHANGE_INCOME",
    payload
  });
});
const createMockStore = configureMockStore()
describe('Testing dispatch to the store', () => {
  const store = createMockStore({})
  test('should dispatch CHANGE_INCOME action', () => {
    const payload = {amount: 300}
    store.dispatch(changeIncome(payload))
    const results = store.getActions()
    expect(results[0]).toEqual({
      type: "CHANGE_INCOME",
      payload
    });
  })
})