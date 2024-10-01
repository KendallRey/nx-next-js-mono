import { render } from "@testing-library/react";
import React from "react";
import MuiAvatar from "./Avatar";

describe("Page", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<MuiAvatar />);
    expect(baseElement).toBeTruthy();
  });
});
