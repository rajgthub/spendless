import React from "react";
import ReactShallowRenderer from "react-test-renderer/shallow";
import Cards from '../../../../components/App/Cards/index';
test("should render Header ", () => {
  const renderer = new ReactShallowRenderer();
  renderer.render(<Cards />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
