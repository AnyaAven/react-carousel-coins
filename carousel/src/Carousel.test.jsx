import { it, expect, test } from "vitest";

import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";

test("renders carousel without crashing", function () {
  render(
    <Carousel
      photos={TEST_IMAGES}
      title="Test Title"
    />,
  );
});

it("works when you click on the right arrow", function () {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />,
  );

  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]'),
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]'),
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]'),
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]'),
  ).toBeInTheDocument();
});

test("works when you click left arrow", function () {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />,
  );

  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]'),
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]'),
  ).not.toBeInTheDocument();

  // move forward in the carousel, so that we can test to go back left
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]'),
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]'),
  ).toBeInTheDocument();

  //TODO: shouldn't this be Carousel-left?
  //Or do we only get Carousel-??? when we actually use it in the .css file?

  // move backward in the carousel, testing the left arrow
  const leftArrow = container.querySelector(".bi-arrow-left-circle");
  fireEvent.click(leftArrow);

  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 2"]'),
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 1"]'),
  ).toBeInTheDocument();
});

test("left arrow does not appear when you are at the start", function () {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />,
  );

  expect(
    container.querySelector('img[alt="testing image 1"]'),
  ).toBeInTheDocument();

  expect(
    container.querySelector('.bi-arrow-left-circle'),
  ).not.toBeInTheDocument();
});

test("right arrow does not appear when you are at the end", function () {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />,
  );

  expect(
    container.querySelector('img[alt="testing image 1"]'),
  ).toBeInTheDocument();

  // move forward in the carousel twice
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);
  fireEvent.click(rightArrow);

  expect(
    container.querySelector('.bi-arrow-right-circle'),
  ).not.toBeInTheDocument();
});


test("left arrow does not appear when you are at the start", function () {
  const { container } = render(
    <Carousel
      photos={[TEST_IMAGES[0]]}
      title="images for testing"
    />,
  );

  expect(
    container.querySelector('img[alt="testing image 1"]'),
  ).toBeInTheDocument();

  expect(
    container.querySelector('.bi-arrow-left-circle'),
  ).not.toBeInTheDocument();
});

test("right and left arrow does not appear when you have only 1 img", function () {
  const { container } = render(
    <Carousel
      photos={[TEST_IMAGES[0]]}
      title="images for testing"
    />,
  );

});