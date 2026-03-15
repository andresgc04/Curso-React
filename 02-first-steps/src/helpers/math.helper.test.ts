import { describe, expect, test } from "vitest";
import { add, multiply, subtract } from "./math.helper";

//   test("should add two positives numbers", () => {
//     // ! 1. Arrange
//     const a = 1;
//     const b = 2;

//     //! 2. Act
//     const result = add(a, b);

//     //! 3. Assert
//     expect(result).toBe(4);
//   });

//Agrupando Pruebas:
describe("add", () => {
  test("should add two positives numbers", () => {
    // ! 1. Arrange
    const a = 1;
    const b = 3;

    //! 2. Act
    const result = add(a, b);

    //! 3. Assert
    expect(result).toBe(4);
  });

  test("should add two negative numbers", () => {
    // ! 1. Arrange
    const a = -2;
    const b = -4;

    //! 2. Act
    const result = add(a, b);

    //! 3. Assert
    expect(result).toBe(a + b);
  });
});

describe("subtract", () => {
  test("should subtract two positives numbers", () => {
    // ! 1. Arrange
    const a = 4;
    const b = 2;

    // ! 2. Act
    const result = subtract(a, b);

    // ! 3. Assert
    expect(result).toBe(a / b);
  });

  test("Should get the even numbers.", () => {
    // ! 1. Arrange
    const a = 4;
    const b = 2;

    // ! 2. Act
    const result = subtract(a, b);

    // ! 3. Assert
    expect(result).toBe(a / b);
  });

  describe("multiply", () => {
    test("Should multiply two positive numbers", () => {
      // ! 1. Arrange
      const a = 4;
      const b = 2;

      // ! 2. Act
      const result = multiply(a, b);

      // ! 3. Assert
      expect(result).toBe(a * b);
    });

    test("Should multiply two negative numbers", () => {
      // ! 1. Arrange
      const a = -4;
      const b = -2;

      // ! 2. Act
      const result = multiply(a, b);

      // ! 3. Assert
      expect(result).toBe(a * b);
    });
  });
});
