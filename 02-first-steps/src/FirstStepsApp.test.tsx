import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { FirstStepsApp } from "./FirstStepsApp";
import { ItemCounter } from "./shopping-cart/ItemCounter";

vi.mock('./shopping-cart/ItemCounter', () => ({
ItemCounter:()=><div data-testid="ItemCounter" />
}));

describe("FirstStepApp", () => {
  test("Should match snapshot", () => {
    const { container } = render(<FirstStepsApp />);

    expect(container).toMatchSnapshot();
  });

  test('Should render the correct number of ItemCounter components', () => {
    render(<FirstStepsApp/>);

    const itemCounters = screen.getAllByTestId('ItemCounter');

    expect(itemCounters.length).toBe(3);

    screen.debug();
  });
});
