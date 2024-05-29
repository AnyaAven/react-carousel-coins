import { describe, test, expect } from "vitest";
import React from "react";
import { render } from "@testing-library/react";
import Coin from "./Coin.jsx";

test("renders without crashing", function () {
  render(<Coin sideShowing="head" />);
});
