import { Button, ReversedButton, TomatoButton } from "../index";

import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

describe("Test Buttons with `react-test-renderer`", () => {
  test("should render `Button` without error", () => {
    const button = renderer.create(<Button>Button</Button>);
    let tree = button.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("should render `TomatoButton` without error", () => {
    const button = renderer.create(<TomatoButton>Button</TomatoButton>);
    let tree = button.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("should render `ReversedButton` without error", () => {
    const button = renderer.create(<ReversedButton>Button</ReversedButton>);
    let tree = button.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("Test Buttons with `enzyme`", () => {
  test("`Button` should render with text = `Button`", () => {
    const button = shallow(<Button>Button</Button>);
    expect(button.contains("Button")).toEqual(true);
  });
  test("`Button` should render with primary = true", () => {
    const button = shallow(<Button primary>Button</Button>);
    expect(button.props("primary")).toBeTruthy();
  });
  test("`TomatoButton` should render with text = `TomatoButton`", () => {
    const button = shallow(<TomatoButton>TomatoButton</TomatoButton>);
    expect(button.contains("TomatoButton")).toEqual(true);
  });
  test("`ReversedButton` should render with reversed text of `ReversedButton`", () => {
    const text = "ReversedButton";
    const button = shallow(<ReversedButton>{text}</ReversedButton>);
    const reversedText = text.split("").reverse();
    expect(button.contains(reversedText)).toEqual(true);
  });
});
