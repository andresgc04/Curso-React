import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { FirstStepsApp } from "./FirstStepsApp";

describe("FirstStepApp", () => {
  test("Should match snapshot", () => {
    const { container } = render(<FirstStepsApp />);

    expect(container).toMatchSnapshot();
  });
});
