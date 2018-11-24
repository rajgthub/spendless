import React from "react";
import "./Left.css";
import AnualIncomes from "../AnualIncomes";
import MonthlySpending from "../MonthlySpending";
const Left = () => (
  <div className="card_left">
    <div className="title">your income & spend</div>
    <section className="card_body">
      <h1 className="heading">Anual incomes</h1>
      <AnualIncomes />
      <h1 className="heading">Monthly spending</h1>
      <MonthlySpending />
    </section>
  </div>
);
export default Left;
