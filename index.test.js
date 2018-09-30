const splitBy = require("./");
describe("splitBy", () => {
  it("should throw an error if first parameter is not an array", () => {
    expect(() => splitBy()).toThrow(/first parameter must be an array/);
    expect(() => splitBy(null)).toThrow(/first parameter must be an array/);
    expect(() => splitBy("")).toThrow(/first parameter must be an array/);
    expect(() => splitBy(1)).toThrow(/first parameter must be an array/);
  });

  it("should throw an error if second parameter is not a function", () => {
    expect(() => splitBy([])).toThrow(/second parameter must be a function/);
    expect(() => splitBy([], null)).toThrow(
      /second parameter must be a function/
    );
    expect(() => splitBy([], "")).toThrow(
      /second parameter must be a function/
    );
    expect(() => splitBy([], 1)).toThrow(/second parameter must be a function/);
  });

  it("should should split an array based on iteratee", () => {
    expect(splitBy([1, 2, 3, "|", 4, 5, 6], val => val === "|")).toEqual([
      [1, 2, 3],
      [4, 5, 6]
    ]);
  });

  it("should should split an array based on iteratee", () => {
    expect(splitBy([1, 2, 3], val => val)).toEqual([[], [], [], []]);
  });

  it("should should split an array based on iteratee", () => {
    expect(splitBy([1, 2, 3], val => val % 2 === 0)).toEqual([[1], [3]]);
  });

  it("should should split an array based on iteratee", () => {
    expect(
      splitBy(
        [
          { x: 0, a: true },
          { x: 1, a: true },
          { x: 2, a: false },
          { x: 1, a: true }
        ],
        val => !val.a
      )
    ).toEqual([[{ a: true, x: 0 }, { a: true, x: 1 }], [{ a: true, x: 1 }]]);
  });
});
