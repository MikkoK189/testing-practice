import { cipher } from "./caesarCipher";

it("a becomes z", () => {
  expect(cipher("z")).toMatch("a");
});

it("hello becomes ifmmp", () => {
  expect(cipher("hello")).toMatch("ifmmp");
});

it("A becomes B", () => {
  expect(cipher("A")).toMatch("B");
});

it("ab,c becomes bc,d", () => {
  expect(cipher("ab,c")).toBe("bc,d");
});
