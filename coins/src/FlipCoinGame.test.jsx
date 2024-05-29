import { describe, test, expect } from "vitest";
import React from "react";
import { render } from "@testing-library/react";
import FlipCoinGame from "./FlipCoinGame.jsx";

test("renders without crashing", function () {
  render(<FlipCoinGame/>);
});
