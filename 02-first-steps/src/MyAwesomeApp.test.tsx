import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

import { MyAwesomeApp } from "./MyAwesomeApp";

describe("MyAwesomeApp", () => {
  test("Should render firstName and lastName", () => {
    const { container } = render(<MyAwesomeApp />);

    // screen.debug();
    // console.log(container.innerHTML);

    const h1 = container.querySelector('h1');
    // expect(h1?.innerHTML).toBe('Andres');
    expect(h1?.innerHTML).toContain('Andres');

    const h3 = container.querySelector('h3');
    expect(h3?.innerHTML).toContain('Guerrero');

  });

    test("Should render firstName and lastName - Screen", () => {
    render(<MyAwesomeApp />);
    screen.debug();
    // console.log(container.innerHTML);

    // const h1 = screen.getByRole('heading', {
    //   level:1
    // });

    const h1 = screen.getByTestId('first-name-title');

    expect(h1.innerHTML).toContain('Andres');
  });

  test('Should match snapshot', () => {
    // const {container} = render(<MyAwesomeApp/>);

    // expect(container).toMatchSnapshot();

    render(<MyAwesomeApp/>);

    expect(screen.getByTestId('div-app')).toMatchSnapshot();
  });
});
