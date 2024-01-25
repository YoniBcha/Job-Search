import { checkEvenOrOdd } from "@/playground";
import { multiplay } from "@/playground";

describe("basic maths", () => {
  it("add two number", () => {
    expect(1 + 1).toBe(2);
  });

  it("substract two number", () => {
    expect(10 - 3).toBe(7);
  });
  it("multiplay two number", () => {
    expect(2 * 6).toBe(12);
  });
});

describe("evenOrOdd", () => {
  describe("when the number is even", () => {
    it("it indicate the number is even", () => {
      expect(checkEvenOrOdd(4)).toBe("Even");
    });
  });

  describe("when the number is odd", () => {
    it("it indicate the number is odd", () => {
      expect(checkEvenOrOdd(5)).toBe("Odd");
    });
  });

  describe("multiplay two number", () => {
    it("multiplay x and y ", () => {
      expect(multiplay(5, 3)).toBe(15);
    });
  });
});
