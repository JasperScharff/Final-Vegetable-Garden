const getYieldForPlant = (input, environmentFactors) => {
  console.log("Get yield from crop value: ", input.yield); //   plantOutput = 30;

  if (environmentFactors !== undefined) {
    // als er wel environmentFactors zijn
    console.log("The enviromental factors: ", environmentFactors);
    if (environmentFactors.sun === "low") {
      if (environmentFactors.wind === "little") {
        //   console.log(
        //     "Low sun x aantal opbrengst",
        //     input.factor.sun.low * input.yield
        //   );
        //   console.log(
        //     "Little wind x aantal opbrengst",
        //     input.factor.wind.little * input.yield
        //   );
        // //   console.log("Wind is low percentage", input.factor.wind.little);
        //   console.log("Sun is low percentage", input.factor.sun.low);
        const resultLittleWind = input.factor.wind.little;
        const resultLowSun = input.factor.sun.low;

        totaleOpbrengstLittleWind =
          input.yield * (resultLittleWind / 100 + 1) * (resultLowSun / 100 + 1);
        console.log(totaleOpbrengstLittleWind);
      } else if (environmentFactors.wind === "medium") {
        const resultMediumWind = input.factor.wind.medium;
        const resultLowSun = input.factor.sun.low;

        totaleOpbrengstMediumWind =
          input.yield * (resultMediumWind / 100 + 1) * (resultLowSun / 100 + 1);
        console.log(totaleOpbrengstMediumWind);
      } else if (environmentFactors.wind === "much") {
        const resultMuchWind = input.factor.wind.much;
        const resultLowSun = input.factor.sun.low;

        totaleOpbrengstMuchWind =
          input.yield * (resultMuchWind / 100 + 1) * (resultLowSun / 100 + 1);
        console.log(totaleOpbrengstMuchWind);
      }
    } else if (environmentFactors.sun === "medium") {
        if (environmentFactors.wind === "little") {
            //   console.log(
            //     "Low sun x aantal opbrengst",
            //     input.factor.sun.low * input.yield
            //   );
            //   console.log(
            //     "Little wind x aantal opbrengst",
            //     input.factor.wind.little * input.yield
            //   );
            // //   console.log("Wind is low percentage", input.factor.wind.little);
            //   console.log("Sun is low percentage", input.factor.sun.low);
            const resultLittleWind = input.factor.wind.little;
            const resultMediumSun = input.factor.sun.medium;
    
            totaleOpbrengstLittleWind =
              input.yield * (resultLittleWind / 100 + 1) * (resultMediumSun / 100 + 1);
            console.log(totaleOpbrengstLittleWind);
          } else if (environmentFactors.wind === "medium") {
            const resultMediumWind = input.factor.wind.medium;
            const resultMediumSun = input.factor.sun.medium;
    
            totaleOpbrengstMediumWind =
              input.yield * (resultMediumWind / 100 + 1) * (resultMediumSun / 100 + 1);
            console.log(totaleOpbrengstMediumWind);
          } else if (environmentFactors.wind === "much") {
            const resultMuchWind = input.factor.wind.much;
            const resultMediumSun = input.factor.sun.medium;
    
            totaleOpbrengstMuchWind =
              input.yield * (resultMuchWind / 100 + 1) * (resultMediumSun / 100 + 1);
            console.log(totaleOpbrengstMuchWind);
          }
    } else if (environmentFactors.sun === "high") {
        if (environmentFactors.wind === "little") {
            //   console.log(
            //     "Low sun x aantal opbrengst",
            //     input.factor.sun.low * input.yield
            //   );
            //   console.log(
            //     "Little wind x aantal opbrengst",
            //     input.factor.wind.little * input.yield
            //   );
            // //   console.log("Wind is low percentage", input.factor.wind.little);
            //   console.log("Sun is low percentage", input.factor.sun.low);
            const resultLittleWind = input.factor.wind.little;
            const resultHighSun = input.factor.sun.high;
    
            totaleOpbrengstLittleWind =
              input.yield * (resultLittleWind / 100 + 1) * (resultHighSun / 100 + 1);
            console.log(totaleOpbrengstLittleWind);
          } else if (environmentFactors.wind === "medium") {
            const resultMediumWind = input.factor.wind.medium;
            const resultHighSun = input.factor.sun.high;
    
            totaleOpbrengstMediumWind =
              input.yield * (resultMediumWind / 100 + 1) * (resultHighSun / 100 + 1);
            console.log(totaleOpbrengstMediumWind);
          } else if (environmentFactors.wind === "much") {
            const resultMuchWind = input.factor.wind.much;
            const resultHighSun = input.factor.sun.high;
    
            totaleOpbrengstMuchWind =
              input.yield * (resultMuchWind / 100 + 1) * (resultHighSun / 100 + 1);
            console.log(totaleOpbrengstMuchWind);
          }
    }
  }
};
const getYieldForCrop = (input) => {
  const outputVariabele = input.crop.yield * input.numCrops;
  console.log("Get yield for crop output:", outputVariabele);
  return outputVariabele;
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
