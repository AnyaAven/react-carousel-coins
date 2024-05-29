import { describe, test, expect, vi, beforeAll, afterAll } from "vitest";
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import FlipCoinGame from "./FlipCoinGame.jsx";
import Coin from "./Coin.jsx"
import * as flip from "./flipCoin.js";


beforeAll(function () {
  // observe calls & make it possible to mock
  vi.spyOn(flip, "flipCoin");
});

afterAll(function () {
  // after all tests, make dice.d6 normal again
  //  (useful if other tests need this)
  vi.restoreAllMocks();
});

describe("FlipCoinGame works", function () {

  test("renders without crashing", function () {
    render(<FlipCoinGame />);
  });

  test("renders 1 coin", function () {
    const { container } = render(<Coin />);
    expect(container.querySelectorAll(".Coin").length).toEqual(1);
  });

  test("Flips coin on button click", function () {
    flip.flipCoin.mockReturnValueOnce(0);
    const { container } = render(<FlipCoinGame />);
    const qs = container.querySelector.bind(container);

    const flipBtn = qs(".FlipCoin-flip-button");
    fireEvent.click(flipBtn);

    //expect the coin the be tails
    expect(qs(".Coin-img")).toContainHTML("tailsPenny.jpg")
    expect(qs(".Coin-img")).not.toContainHTML("headsPenny.jpg")
  });

  test("matches snapshot", function () {
    const { container } = render(<Coin sideShowing="heads" />);
    expect(container).toMatchSnapshot();
  });
});
