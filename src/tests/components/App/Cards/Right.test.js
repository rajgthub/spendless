import React from "react";
import ReactShallowRenderer from "react-test-renderer/shallow";
import Right from '../../../../components/App/Cards/Right';
test("should render Header ", () => {
  const renderer = new ReactShallowRenderer();
  renderer.render(<Right/>);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
