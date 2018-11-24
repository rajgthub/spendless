import React from "react";
import ReactShallowRenderer from "react-test-renderer/shallow";
import Header from "../../../../components/App/Header";
test("should render Header ", () => {
  const renderer = new ReactShallowRenderer();
  renderer.render(<Header />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
