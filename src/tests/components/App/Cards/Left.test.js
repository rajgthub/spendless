import React from "react";
import ReactShallowRenderer from "react-test-renderer/shallow";
import Left from '../../../../components/App/Cards/Left';
test("should render Header ", () => {
  const renderer = new ReactShallowRenderer();
  renderer.render(<Left />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
