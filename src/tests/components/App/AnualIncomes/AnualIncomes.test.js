import React from "react";
import { shallow } from "enzyme";
import dataJson from "../../../../db";
const incomes = dataJson.incomes[0];
import { AnualIncomes } from "../../../../components/App/AnualIncomes";
describe("Testing anual income fields", () => {
  test("should change amount value", () => {
    const value = 5000;
    const changeIncomeSpy = jest.fn();
    const wrapper = shallow(
      <AnualIncomes incomes={incomes} changeIncome={changeIncomeSpy} />
    );
    expect(wrapper).toMatchSnapshot();
    wrapper
      .find("input")
      .at(0)
      .simulate("change", { target: { value } });
    expect(wrapper).toMatchSnapshot();
    expect(changeIncomeSpy).toHaveBeenLastCalledWith({ amount: 5000 });
  });
  test("should change from_age value", () => {
    const value = 40;
    const changeIncomeSpy = jest.fn();
    const wrapper = shallow(
      <AnualIncomes incomes={incomes} changeIncome={changeIncomeSpy} />
    );
    expect(wrapper).toMatchSnapshot();
    wrapper
      .find("input")
      .at(1)
      .simulate("change", { target: { value } });
    expect(wrapper).toMatchSnapshot();
    expect(changeIncomeSpy).toHaveBeenLastCalledWith({ from_age: 40 });
  });
  test("should change to_age value", () => {
    const value = 60;
    const changeIncomeSpy = jest.fn();
    const wrapper = shallow(
      <AnualIncomes incomes={incomes} changeIncome={changeIncomeSpy} />
    );
    expect(wrapper).toMatchSnapshot();
    wrapper
      .find("input")
      .at(2)
      .simulate("change", { target: { value } });
    expect(wrapper).toMatchSnapshot();
    expect(changeIncomeSpy).toHaveBeenLastCalledWith({ to_age: 60 });
  });
});
