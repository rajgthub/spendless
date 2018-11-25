//getting data
import dataJson from "../../db";
const initialIncomes = dataJson.incomes[0];
export default (incomes = initialIncomes, { type, payload }) => {
  switch (type) {
    case "CHANGE_INCOME":
      if ("amount" in payload) {
        const amount = payload.amount;
        return { ...incomes, amount };
      } else if ("from_age" in payload) {
        const from_age = payload.from_age;
        return { ...incomes, from_age };
      } else if ("to_age" in payload) {
        const to_age = payload.to_age;
        return { ...incomes, to_age };
      } else {
        return incomes;
      }
    default:
      return incomes;
  }
};
