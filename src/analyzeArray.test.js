import { analyzeArray } from "./analyzeArray";

const object = analyzeArray([1, 8, 3, 4, 2, 6]);

it("analyzeArray average", () => {
  expect(object.average).toBe(4);
});

it("analyzeArray length", () => {
  expect(object.length).toBe(6);
});

it("min", () => {
  expect(object.min).toBe(1);
});

it("max", () => {
  expect(object.max).toBe(8);
});
