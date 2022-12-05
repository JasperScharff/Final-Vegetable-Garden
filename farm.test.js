const {
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
} = require("./farm");

describe("getYieldForPlant", () => {
  const environmentFactors = {
    sun: "high",
    wind: "much",
  };
  const corn = {
    name: "corn",
    yield: 30,
    factor: {
      sun: {
        low: -50,
        medium: 0,
        high: 50,
      },
      wind: {
        much: -60,
        medium: -30,
        little: 0,
      },
    },
  };

  // test("Get yield for plant with no environment factors", () => {
  //   expect(getYieldForPlant(corn.yield)).toBe(30);
  // });

  test("Get yield with environment factors", () => {
    expect(getYieldForPlant(corn, environmentFactors)).toBe(18);
  });
});

describe("getYieldForCrop", () => {
  test("Get yield for crop, simple", () => {
    const corn = {
      name: "corn",
      yield: 3,
    };
    const input = {
      crop: corn,
      numCrops: 10,
    };
    expect(getYieldForCrop(input)).toBe(30);
  });
});

describe("getTotalYield", () => {
  test("Calculate total yield with multiple crops", () => {
    const corn = {
      name: "corn",
      yield: 3,
    };
    const pumpkin = {
      name: "pumpkin",
      yield: 4,
    };
    const crops = [
      { crop: corn, numCrops: 5 },
      { crop: pumpkin, numCrops: 2 },
    ];
    expect(getTotalYield({ crops })).toBe(23);
  });

  test("Calculate total yield with 0 amount", () => {
    const corn = {
      name: "corn",
      yield: 3,
    };
    const crops = [{ crop: corn, numCrops: 0 }];
    expect(getTotalYield({ crops })).toBe(0);
  });
});

