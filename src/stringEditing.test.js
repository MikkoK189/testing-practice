import { capitalize, reverseString } from "./stringEditing";

test("capitalize", () => {
  expect(capitalize("hello")).toMatch("Hello");
});

test("reverse", () => {
  expect(reverseString("hello")).toMatch("olleh");
});
