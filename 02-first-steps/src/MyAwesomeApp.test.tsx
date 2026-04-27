import { describe, test } from "vitest";
import { render, screen } from "@testing-library/react";

import { MyAwesomeApp } from "./MyAwesomeApp";

describe("MyAwesomeApp", () => {
  test("Should render firstName and lastName", () => {
    const { container } = render(<MyAwesomeApp />);

    screen.debug();
    // console.log(container.innerHTML);
  });
});
