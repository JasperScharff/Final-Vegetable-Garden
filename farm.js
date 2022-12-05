const getCostsForCrop = (inputYield, resultWind, resultSun) => {
  return inputYield * (resultWind / 100 + 1) * (resultSun / 100 + 1);
};

const calculateYield = (wind, sun, inputyield) => {
  // De volledige herhalende if statements in deze functie zetten
  if (environmentFactors.wind === "little") {
    const wind = input.factor.wind.little;
    const sun = input.factor.sun.low;

    totaleOpbrengstLittleWind =
      input.yield * (wind / 100 + 1) * (sun / 100 + 1);
    console.log(totaleOpbrengstLittleWind);
  } else if (environmentFactors.wind === "medium") {
    const wind = input.factor.wind.medium;
    const sun = input.factor.sun.low;

    totaleOpbrengstMediumWind = getCostsForCrop(inputYield, wind, sun);
    console.log(totaleOpbrengstMediumWind);
  } else if (environmentFactors.wind === "much") {
    const wind = input.factor.wind.much;
    const sun = input.factor.sun.low;

    totaleOpbrengstMuchWind = input.yield * (wind / 100 + 1) * (sun / 100 + 1);
    console.log(totaleOpbrengstMuchWind);
  }
};

const getYieldForPlant = (input, environmentFactors) => {
  console.log("Get yield from crop value: ", input.yield); //   plantOutput = 30;

  if (environmentFactors == undefined) {
    return input.yield;
  }

  // als er wel environmentFactors zijn
  console.log("The enviromental factors: ", environmentFactors);
  if (environmentFactors.sun === "low") {
    calculateYield(wind, sun, inputyield);
  } else if (environmentFactors.sun === "medium") {
    if (environmentFactors.wind === "little") {
      const resultLittleWind = input.factor.wind.little;
      const resultMediumSun = input.factor.sun.medium;

      totaleOpbrengstMediumWind = getCostsForCrop(
        inputYield,
        resultLittleWind,
        resultMediumSun
      );
    } else if (environmentFactors.wind === "medium") {
      const resultMediumWind = input.factor.wind.medium;
      const resultMediumSun = input.factor.sun.medium;

      totaleOpbrengstMediumWind = getCostsForCrop(
        inputYield,
        resultMediumWind,
        resultMediumSun
      );

      console.log(totaleOpbrengstMediumWind);
    } else if (environmentFactors.wind === "much") {
      const resultMuchWind = input.factor.wind.much;
      const resultMediumSun = input.factor.sun.medium;

      totaleOpbrengstMediumWind = getCostsForCrop(
        inputYield,
        resultMuchWind,
        resultMediumSun
      );
    }
  } else if (environmentFactors.sun === "high") {
    if (environmentFactors.wind === "little") {
      const resultLittleWind = input.factor.wind.little;
      const resultHighSun = input.factor.sun.high;

      totaleOpbrengstMediumWind = getCostsForCrop(
        inputYield,
        resultLittleWind,
        resultHighSun
      );

      console.log(totaleOpbrengstLittleWind);
    } else if (environmentFactors.wind === "medium") {
      const resultMediumWind = input.factor.wind.medium;
      const resultHighSun = input.factor.sun.high;

      totaleOpbrengstMediumWind = getCostsForCrop(
        inputYield,
        resultMediumWind,
        resultHighSun
      );

      console.log(totaleOpbrengstMediumWind);
    } else if (environmentFactors.wind === "much") {
      const resultMuchWind = input.factor.wind.much;
      const resultHighSun = input.factor.sun.high;

      totaleOpbrengstMediumWind = getCostsForCrop(
        inputYield,
        resultMuchWind,
        resultHighSun
      );
    }
  }
};

const getYieldForCrop = (input, environmentFactors) => {
  return getYieldForPlant(input, environmentFactors) * input.numCrops;
};

const getTotalYield = (input) => {
  console.log("Input:", input);
  console.log("Input.crop:", input.crop);
  const crops = input.crops;
  //   const cropsYield = crops.map((crop) => console.log("Crop na de map:", crop));
  //   cropsYield.reduce((acc, cur) => acc + cur);
  let returnWaarde = 0;

  for (let key in crops) {
    console.log(crops[key]);
    if (crops.numCrops !== 0) {
      const totalYieldCrops = getYieldForCrop(crops[key]);
      console.log("Total Yield for crops", totalYieldCrops);
      returnWaarde += totalYieldCrops;
    } else {
      returnWaarde = 0;
    }
  }
  console.log("Total amount from Yield", returnWaarde);
  return returnWaarde;
  //   crops.forEach((element) => console.log(element));
};

module.exports = {
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
};
