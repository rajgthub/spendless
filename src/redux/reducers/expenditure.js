import dataJson from "../../db";
const initialExpenditures = dataJson.expenditures;
export default (expenditures = initialExpenditures, { type, payload }) => {
  switch (type) {
    case "CHANGE_BILLS":
      const newArr = [];
      expenditures.forEach(expenditure => {
        if (expenditure.name === "Bills") {
          const amount = payload.bills;
          newArr.push({ ...expenditure, amount });
          return true;
        } else {
          newArr.push(expenditure);
        }
      });
      return newArr;
    case "CHANGE_MORTGAGE":
      const newArr2 = [];
      expenditures.forEach(expenditure => {
        if (expenditure.name === "Mortgage") {
          const amount = payload.mortgage;
          newArr2.push({ ...expenditure, amount });
          return true;
        } else {
          newArr2.push(expenditure);
        }
      });
      return newArr2;
    case "CHANGE_GENERAL_SPENDING":
      const newArr3 = [];
      expenditures.forEach(expenditure => {
        if (expenditure.name === "General spending") {
          const amount = payload.generalSpending;
          newArr3.push({ ...expenditure, amount });
          return true;
        } else {
          newArr3.push(expenditure);
        }
      });
      return newArr3;
    case "CHANGE_AGE":
      const ageArr = [];
      if ("from_age" in payload) {
        const from_age = payload.from_age;
        expenditures.forEach(expenditure => {
          ageArr.push({ ...expenditure, from_age });
          return true;
        });
        return ageArr;
      } else if ("to_age" in payload) {
        const to_age = payload.to_age;
        expenditures.forEach(expenditure => {
          ageArr.push({ ...expenditure, to_age });
          return true;
        });
        return ageArr;
      } else {
        return expenditures;
      }
    default:
      return expenditures;
  }
};
