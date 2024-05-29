import { describe, test, expect, vi, beforeAll, afterAll } from "vitest";
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button.jsx';
import * as testCommon from "./_testCommon.js";

beforeAll(function () {
  vi.spyOn(testCommon, "testFunction");
});

afterAll(function () {
  vi.restoreAllMocks();
});

test("renders without crashing", function () {
  render(<Button />);
});

test("Button clicks with passed in func and label", function () {
  testCommon.testFunction.mockReturnValue();
  const { container } = render(
    <Button
      onClick={testCommon.testFunction}
      label={"label"} />
  );
  const qs = container.querySelector.bind(container);

  const btn = qs(".Button");
  fireEvent.click(btn);
  fireEvent.click(btn);
  expect(testCommon.testFunction).toHaveBeenCalledTimes(2);

  expect(qs(".Button-label")).toHaveTextContent("label");
});