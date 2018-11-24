import React, { Fragment } from "react";
import { connect } from "react-redux";
import {
  changeAge,
  changeBills,
  changeMortgage,
  changeGeneralSpending
} from "../../../redux/actions";
import "./MonthlySpending.css";
const MonthlySpending = ({
  expenditures,
  changeAge,
  changeBills,
  changeMortgage,
  changeGeneralSpending
}) => {
  let { amount: bills, from_age, to_age } = expenditures.filter(
    expenditure => expenditure.name === "Bills"
  )[0];
  // bills = `£${bills}`
  let { amount: mortgage } = expenditures.filter(
    expenditure => expenditure.name === "Mortgage"
  )[0];
  // mortgage = `£${mortgage}`;
  let { amount: generalSpending } = expenditures.filter(
    expenditure => expenditure.name === "General spending"
  )[0];
  // generalSpending = `£${generalSpending}`;
  // let splitBills;
  // if (JSON.stringify(bills).includes(`£`)) {
  //   splitBills = bills.split("£");
  //   bills = "£" + splitBills[1];
  // } else {
  //   bills = "£" + bills;
  // }
  const handleBillsChange = e => {
    changeBills({ bills: e.target.value });
  };
  const handleMortgageChange = e => {
    changeMortgage({ mortgage: e.target.value });
  };
  const handleGeneralSpendingChange = e => {
    changeGeneralSpending({ generalSpending: e.target.value });
  };
  const handleFromAgeChange = e => {
    changeAge({ from_age: e.target.value });
  };
  const handleToAgeChange = e => {
    changeAge({ to_age: e.target.value });
  };
  return (
    <Fragment>
      {/* mortgage group */}
      <div className="Monthlyspending">
        <div className="mortgage">
          <div className="form_group">
            <label htmlFor="">Mortgage</label>
            <input
              type="text"
              name="one"
              value={mortgage}
              onChange={handleMortgageChange}
              className="form_control"
            />
          </div>
          <div className="form_group">
            <label htmlFor="">From age</label>
            <input
              type="text"
              name="one"
              value={from_age}
              onChange={handleFromAgeChange}
              className="form_control"
            />
          </div>
          <div className="form_group">
            <label htmlFor="">To age</label>
            <input
              type="text"
              name="one"
              value={to_age}
              onChange={handleToAgeChange}
              className="form_control"
            />
          </div>
        </div>
        {/* bills group  */}
        <div className="bills">
          <div className="form_group">
            <label htmlFor="">Bills</label>
            <input
              type="text"
              name="one"
              value={bills}
              onChange={handleBillsChange}
              className="form_control"
            />
          </div>
          <div className="form_group">
            <label htmlFor="">From age</label>
            <input
              type="text"
              name="one"
              value={from_age}
              onChange={handleFromAgeChange}
              className="form_control"
            />
          </div>
          <div className="form_group">
            <label htmlFor="">To age</label>
            <input
              type="text"
              name="one"
              value={to_age}
              onChange={handleToAgeChange}
              className="form_control"
            />
          </div>
        </div>
        {/* general spending group */}
        <div className="spending">
          <div className="form_group">
            <label htmlFor="">General spending</label>
            <input
              type="text"
              name="one"
              value={generalSpending}
              onChange={handleGeneralSpendingChange}
              className="form_control"
            />
          </div>
          <div className="form_group">
            <label htmlFor="">From age</label>
            <input
              type="text"
              name="one"
              value={from_age}
              onChange={handleFromAgeChange}
              className="form_control"
            />
          </div>
          <div className="form_group">
            <label htmlFor="">To age</label>
            <input
              type="text"
              name="one"
              value={to_age}
              onChange={handleToAgeChange}
              className="form_control"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
const mapStateToProps = ({ incomes, expenditures }) => ({
  incomes,
  expenditures
});
export default connect(
  mapStateToProps,
  { changeAge, changeBills, changeMortgage, changeGeneralSpending }
)(MonthlySpending);
