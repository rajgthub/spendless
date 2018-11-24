import React from "react";
import ReactShallowRenderer from "react-test-renderer/shallow";
import Footer from "../../../../components/App/Footer";
test("should render Header ", () => {
  const renderer = new ReactShallowRenderer();
  renderer.render(<Footer />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
