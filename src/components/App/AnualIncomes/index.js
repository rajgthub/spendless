import React from "react";
import { connect } from "react-redux";
import { changeIncome } from "../../../redux/actions";
import './AnualIncomes.css'
export const AnualIncomes = ({ incomes, expenditures, changeIncome }) => {
  let { amount, from_age, to_age } = incomes;
  let splitAmount
  if(JSON.stringify(amount).includes(`£`)){
   splitAmount =amount.split("£");
   amount = "£" + splitAmount[1];
  }else{
    amount = "£"+amount;
  }
  
  const handleAmountChange = e => {
    changeIncome({ amount: e.target.value });
  };
  const handleFromAgeChange = e => {
    changeIncome({ from_age: e.target.value });
  };
  const handleToAgeChange = e => {
    changeIncome({ to_age: e.target.value });
  };
  return (
    <div className="Anualincomes">
      {/* anual salary group  */}
      <div className="form_group">
        <label htmlFor="">Anual salary</label>
        <input
          type="text"
          name="one"
          value={amount}
          onChange={handleAmountChange}
          className="form_control"
        />
      </div>
      {/* from age group */}
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
      {/* to age group */}
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
  );
};
const mapStateToProps = ({ incomes, expenditures }) => ({
  incomes,
  expenditures
});
export default connect(
  mapStateToProps,
  { changeIncome }
)(AnualIncomes);
