import { Link, StyledLink } from "../index";

import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

describe("Test `Links` with `react-test-renderer`", () => {
  test("render `Link` without error", () => {
    const link = renderer.create(<Link>Link Text</Link>);
    let tree = link.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("render `StyledLink` without error", () => {
    const link = renderer.create(<StyledLink>Styled Link</StyledLink>);
    let tree = link.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("Test `Links` with `enzyme`", () => {
  test("render `Link` with text", () => {
    const link = shallow(<Link>Link Text</Link>);
    expect(link.contains("Link Text")).toEqual(true);
  });
  test("render `StyledLink` with text", () => {
    const link = shallow(<StyledLink>Styled Link</StyledLink>);
    expect(link.contains("Styled Link")).toEqual(true);
  });
});
