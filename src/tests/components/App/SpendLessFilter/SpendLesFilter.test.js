import React from "react";
import { shallow } from "enzyme";
import dataJson from "../../../../db";
const incomes = dataJson.incomes[0];
import { SpendLessFilter } from "../../../../components/App/SpendLessFilter";
describe("Testing monthly spending fields", () => {
  test("should change mortgage filter value", () => {
    const value = 400;
    const wrapper = shallow(
      <SpendLessFilter  />
    );
    expect(wrapper).toMatchSnapshot();
    wrapper
      .find("input")
      .at(0)
      .simulate("change", { target: { value } });
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.state('mortgage')).toBe(400);
  });
  test("should change bills filter value", () => {
    const value = 5000;
    const wrapper = shallow(
      <SpendLessFilter  bills={value}/>
    );
    expect(wrapper).toMatchSnapshot();
    wrapper
      .find("input")
      .at(1)
      .simulate("change", { target: { value } });
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.state('bills')).toBe(5000);
  });
  test("should change general spending filter value", () => {
    const value = 100;
    const wrapper = shallow(
      <SpendLessFilter  />
    );
    expect(wrapper).toMatchSnapshot();
    wrapper
      .find("input")
      .at(2)
      .simulate("change", { target: { value } });
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.state('generalSpending')).toBe(100);
  });
});
