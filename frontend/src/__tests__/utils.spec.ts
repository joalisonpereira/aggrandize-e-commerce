import * as Utils from "src/utils";

describe("Utils", () => {
  it("should chunk an array", () => {
    const array = [1, 2, 3, 4];

    expect(Utils.chunk(array, 2)).toEqual([
      [1, 2],
      [3, 4],
    ]);
  });
});
