const {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit,
  } = require("./farm");
  
  describe("getYieldForPlant", () => {
    const corn = {
      name: "corn",
      yield: 30,
    };
  
    test("Get yield for plant with no environment factors", () => {
      expect(getYieldForPlant(corn)).toBe(30);
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
  
  describe("getCostsForCrop", () => {
    test("Calculate costs for one crop corn", () => {
      const corn = {
        name: "corn",
        yield: 3,
      };
      const input = {
        crop: corn,
        numCrops: 10,
      };
      expect(getCostsForCrop(input)).toBe(10);
    });
  
    test("Calculate costs for one crop pumpkin", () => {
      const pumpkin = {
        name: "pumpkin",
        yield: 4,
      };
      const input = {
        crop: pumpkin,
        numCrops: 2,
      };
      expect(getCostsForCrop(input)).toBe(2);
    });
  });
  
  describe("getRevenueforCrop", () => {
    test("Calculate revenue for corn", () => {
      const corn = {
        name: "corn",
        yield: 3,
      };
      const input = {
        crop: corn,
        numCrops: 10,
      };
      expect(getRevenueForCrop(input)).toBe(60);
    });
  
    test("Calculate revenue for pumpkin", () => {
      const pumpkin = {
        name: "pumpkin",
        yield: 4,
      };
      const input = {
        crop: pumpkin,
        numCrops: 2,
      };
      expect(getRevenueForCrop(input)).toBe(16);
    });
  });
  
  describe("getProfitForCrop", () => {
    test("Calculate profit for corn", () => {
      const corn = {
        name: "corn",
        yield: 3,
      };
      const input = {
        crop: corn,
        numCrops: 10,
      };
      expect(getProfitForCrop(input)).toBe(50);
    });
  
    test("Calculate profit for pumpkin", () => {
      const pumpkin = {
        name: "pumpkin",
        yield: 4,
      };
      const input = {
        crop: pumpkin,
        numCrops: 2,
      };
      expect(getProfitForCrop(input)).toBe(14);
    });
  });
  
  describe("getTotalProfit", () => {
    test("Calculate total profit with multiple crops", () => {
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
      expect(getTotalProfit({ crops })).toBe(39);
    });
  
    test("Calculate total profit with 0 amount", () => {
      const corn = {
        name: "corn",
        yield: 3,
      };
      const crops = [{ crop: corn, numCrops: 0 }];
      expect(getTotalProfit({ crops })).toBe(0);
    });
  });
  
  describe("getYieldForCrob considering factors", () => {
    test("getYieldForCrob with low sun", () => {
      const corn = {
        name: "corn",
        yield: 30,
        factors: {
          sun: {
            low: -50,
            medium: 0,
            high: 50,
          },
          wind: {
            low: 0,
            medium: -30,
            high: -60,
          },
        },
      };
  
      const environmentFactors = {
        sun: "low",
        wind: "medium",
      };
  
      const input = {
        crop: corn,
        numCrops: 10,
      };
  
      expect(getYieldForCrop(input, environmentFactors)).toBe(105);
    });
  
    test("getYieldForCrob considering one enviromentFactor", () => {
      const corn = {
        name: "corn",
        yield: 30,
        factors: {
          sun: {
            low: -50,
            medium: 0,
            high: 50,
          },
          wind: {
            low: 0,
            medium: -30,
            high: -60,
          },
        },
      };
  
      const environmentFactors = {
        sun: "low",
      };
  
      const input = {
        crop: corn,
        numCrops: 10,
      };
  
      expect(getYieldForCrop(input, environmentFactors)).toBe(150);
    });
  
    test("getYieldForCrob with unrelevant enviromentFactor", () => {
      const corn = {
        name: "corn",
        yield: 30,
        factors: {
          sun: {
            low: -50,
            medium: 0,
            high: 50,
          },
          wind: {
            low: 0,
            medium: -30,
            high: -60,
          },
        },
      };
  
      const environmentFactors = {
        sun: "low",
        rain: "medium",
      };
  
      const input = {
        crop: corn,
        numCrops: 10,
      };
  
      expect(getYieldForCrop(input, environmentFactors)).toBe(150);
    });
  });
  
  describe("getTotalYield considering enviromentFactors", () => {
    test("getTotalYield considering one factor", () => {
      const corn = {
        name: "corn",
        yield: 3,
        factors: {
          sun: {
            low: -50,
            medium: 0,
            high: 50,
          },
          wind: {
            low: 0,
            medium: -30,
            high: -60,
          },
        },
      };
      const pumpkin = {
        name: "pumpkin",
        yield: 4,
        factors: {
          sun: {
            low: -50,
            medium: 0,
            high: 50,
          },
          wind: {
            low: 0,
            medium: -30,
            high: -60,
          },
        },
      };
      const crops = [
        { crop: corn, numCrops: 5 },
        { crop: pumpkin, numCrops: 2 },
      ];
  
      const environmentFactors = {
        sun: "low",
      };
  
      expect(getTotalYield({ crops }, environmentFactors)).toBe(11.5);
    });
  
    test("getTotalYield considering more factors", () => {
      const corn = {
        name: "corn",
        yield: 3,
        factors: {
          sun: {
            low: -50,
            medium: 0,
            high: 50,
          },
          wind: {
            low: 0,
            medium: -30,
            high: -60,
          },
        },
      };
      const pumpkin = {
        name: "pumpkin",
        yield: 4,
        factors: {
          sun: {
            low: -50,
            medium: 0,
            high: 50,
          },
          wind: {
            low: 0,
            medium: -30,
            high: -60,
          },
        },
      };
      const crops = [
        { crop: corn, numCrops: 5 },
        { crop: pumpkin, numCrops: 2 },
      ];
  
      const environmentFactors = {
        sun: "low",
        wind: "high",
      };
  
      expect(getTotalYield({ crops }, environmentFactors)).toBe(4.6);
    });
  });
  
  describe("getRevenueforCrop considering enviromentFactors", () => {
    test("Calculate revenue for corn", () => {
      const corn = {
        name: "corn",
        yield: 3,
        factors: {
          sun: {
            low: -50,
            medium: 0,
            high: 50,
          },
          wind: {
            low: 0,
            medium: -30,
            high: -60,
          },
        },
      };
      const input = {
        crop: corn,
        numCrops: 7,
      };
      const environmentFactors = {
        sun: "high",
        wind: "medium",
      };
      expect(getRevenueForCrop(input, environmentFactors)).toBe(44.1);
    });
  
    test("Calculate revenue for pumpkin", () => {
      const pumpkin = {
        name: "pumpkin",
        yield: 4,
        factors: {
          sun: {
            low: -50,
            medium: 0,
            high: 50,
          },
          wind: {
            low: 0,
            medium: -30,
            high: -60,
          },
        },
      };
      const input = {
        crop: pumpkin,
        numCrops: 5,
      };
      const environmentFactors = {
        sun: "high",
        wind: "low",
      };
      expect(getRevenueForCrop(input, environmentFactors)).toBe(60);
    });
  });
  
  describe("getProfitForCrop considering enviromentFactors", () => {
    test("Calculate profit for corn considering enviromentFactors", () => {
      const corn = {
        name: "corn",
        yield: 3,
        factors: {
          sun: {
            low: -50,
            medium: 0,
            high: 50,
          },
          wind: {
            low: 0,
            medium: -30,
            high: -60,
          },
        },
      };
      const input = {
        crop: corn,
        numCrops: 10,
      };
      const environmentFactors = {
        sun: "medium",
        wind: "medium",
      };
      expect(getProfitForCrop(input, environmentFactors)).toBe(32);
    });
  
    test("Calculate profit for pumpkin considering enviromentFactors", () => {
      const pumpkin = {
        name: "pumpkin",
        yield: 4,
        factors: {
          sun: {
            low: -20,
            medium: 0,
            high: 30,
          },
          wind: {
            low: 0,
            medium: -10,
            high: -20,
          },
        },
      };
      const input = {
        crop: pumpkin,
        numCrops: 2,
      };
      const environmentFactors = {
        sun: "high",
        wind: "low",
      };
      expect(getProfitForCrop(input, environmentFactors)).toBe(18.8);
    });
  });
  
  describe("getTotalProfit considering enviromentFactors", () => {
    test("Calculate total profit with enviromentFactors multiple crops", () => {
      const corn = {
        name: "corn",
        yield: 3,
        factors: {
          sun: {
            low: -50,
            medium: 0,
            high: 50,
          },
          wind: {
            low: 0,
            medium: -30,
            high: -60,
          },
        },
      };
      const pumpkin = {
        name: "pumpkin",
        yield: 4,
        factors: {
          sun: {
            low: -20,
            medium: 0,
            high: 30,
          },
          wind: {
            low: 0,
            medium: -10,
            high: -20,
          },
        },
      };
      const crops = [
        { crop: corn, numCrops: 5 },
        { crop: pumpkin, numCrops: 2 },
      ];
      const environmentFactors = {
        sun: "high",
        wind: "medium",
      };
      expect(getTotalProfit({ crops }, environmentFactors)).toBe(43.22);
    });
  
    test("Calculate total profit with enviromentFactors 0 amount", () => {
      const corn = {
        name: "corn",
        yield: 3,
        factors: {
          sun: {
            low: -50,
            medium: 0,
            high: 50,
          },
          wind: {
            low: 0,
            medium: -30,
            high: -60,
          },
        },
      };
      const crops = [{ crop: corn, numCrops: 0 }];
      const environmentFactors = {
        sun: "high",
        wind: "low",
      };
      expect(getTotalProfit({ crops }, environmentFactors)).toBe(0);
    });
  });