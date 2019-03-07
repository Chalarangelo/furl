import React from "react";
import Card from "./Card";
import renderer from "react-test-renderer";

describe("Card", () => {
  it("renders properly", () => {
    const tree = renderer
      .create(<Card>Hello</Card>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});