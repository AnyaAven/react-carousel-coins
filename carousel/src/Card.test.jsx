import { describe, it, test, expect } from "vitest";
import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card.jsx";
import image1 from "./image1.jpg";

test("render without crashing", function () {
  render(
    <Card
      caption="hello"
      src={image1}
      currNum="1"
      totalNum="1"
    />,
  );
});
