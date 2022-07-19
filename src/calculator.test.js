import { add, subtract, divide, multiply } from "./calculator";

test("add", () => {
  expect(add(1, 3)).toBe(4);
});

it("subtract", () => {
  expect(subtract(3, 1)).toBe(2);
});

it("divide", () => {
  expect(divide(4, 2)).toBe(2);
});

it("multiply", () => {
  expect(multiply(2, 2)).toBe(4);
});
