import { describe, test, expect } from "vitest";
import React from "react";
import { render } from "@testing-library/react";
import Coin from "./Coin.jsx";

describe("Coin works", function () {

  test("renders without crashing", function () {
    render(<Coin sideShowing="heads" />);
  });

  test("coin shows heads", function () {
    const { container } = render(<Coin sideShowing="heads" />);
    const img = container.querySelector(".Coin-img");

    expect(img.getAttribute("src")).toContain("headsPenny.jpg")
    expect(img.getAttribute("alt")).toEqual("Coin heads")
  });

  test("coin shows tails", function () {
    const { container } = render(<Coin sideShowing="tails" />);
    const img = container.querySelector(".Coin-img");

    expect(img.getAttribute("src")).toContain("tailsPenny.jpg")
    expect(img.getAttribute("alt")).toEqual("Coin tails")
  });

  test("matches snapshot", function () {
    const { container } = render(<Coin sideShowing="heads" />);
    expect(container).toMatchSnapshot();
  });

});
