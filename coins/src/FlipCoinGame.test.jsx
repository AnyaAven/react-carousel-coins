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
  vi.restoreAllMocks();
});

describe("FlipCoinGame works", function () {

  test("renders without crashing", function () {
    render(<FlipCoinGame />);
  });

  test("renders no coins at the start", function () {
    const { container } = render(<FlipCoinGame />);
    expect(container.querySelectorAll(".Coin").length).toEqual(0);
  });

  test("Flips coin on button click", function () {
    flip.flipCoin.mockReturnValueOnce(0);
    const { container } = render(<FlipCoinGame />);
    const qs = container.querySelector.bind(container);

    expect(qs(".FlipCoinGame-Data"))
      .toHaveTextContent("Total flips:0 Heads: 0 Tails: 0")

    const flipBtn = qs(".FlipCoin-flip-button");
    fireEvent.click(flipBtn);

    //Should have 1 coin displayed
    expect(container.querySelectorAll(".Coin").length).toEqual(1);

    //expect the coin the be tails
    expect(qs(".FlipCoinGame-Data"))
      .toHaveTextContent("Total flips:1 Heads: 0 Tails: 1")
    expect(qs(".Coin-img")).toContainHTML("tailsPenny.jpg")
    expect(qs(".Coin-img")).not.toContainHTML("headsPenny.jpg")
  });

  test("matches snapshot", function () {
    const { container } = render(<Coin sideShowing="heads" />);
    expect(container).toMatchSnapshot();
  });
});
