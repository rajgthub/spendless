import React from "react";
import {shallow} from 'enzyme'
import Header from "../../../../components/App/Header";
test("should render Header ", () => {
  const wrapper = shallow(<Header />)
  expect(wrapper).toMatchSnapshot()
  const logoMsg = <h1>SpendLess</h1>
  expect(wrapper.contains(logoMsg)).toBe(true)
});
