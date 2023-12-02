import { getInput } from "../utils/index.js";
export function SumOfPossibleIds (input) {
    const inputSplittedInLines = input.split(/\r?\n/);
    let sumOfIds = 0;
    for(let i = 0; i<inputSplittedInLines.length; i++) {
        const lineSplittedByColons = inputSplittedInLines[i].split(":");
        const lineSplittedBySemicolons = lineSplittedByColons[1].split(";");
        const lineSplittedBySemicolonsAndCommas = lineSplittedBySemicolons.map(semiColonSection => semiColonSection.split(","))
        let biggestRed = 0;
        let biggestGreen = 0;
        let biggestBlue = 0;
        for(let section of lineSplittedBySemicolonsAndCommas) {
            for(let numberAndColor of section) {
                let [_, number, color] = numberAndColor.split(" ");
                number = parseInt(number)
                if(color === "red" && number > biggestRed) {
                    biggestRed = number;
                }
                if(color === "green" && number > biggestGreen) {
                    biggestGreen = number;
                }
                if(color === "blue" && number > biggestBlue) {
                    biggestBlue = number;
                }
            }
          
        }
        if(biggestRed <= 12 && biggestGreen <= 13 && biggestBlue <= 14) {
            sumOfIds += i+1;
        }
    }
    return sumOfIds;
}
export function getSumOfThePowerSets (input) {
    const inputSplittedInLines = input.split(/\r?\n/);
    let sumOfProducts = 0;
    for(let i = 0; i<inputSplittedInLines.length; i++) {
        const lineSplittedByColons = inputSplittedInLines[i].split(":");
        const lineSplittedBySemicolons = lineSplittedByColons[1].split(";");
        const lineSplittedBySemicolonsAndCommas = lineSplittedBySemicolons.map(semiColonSection => semiColonSection.split(","))
        let biggestRed = 0;
        let biggestGreen = 0;
        let biggestBlue = 0;
        for(let section of lineSplittedBySemicolonsAndCommas) {
            for(let numberAndColor of section) {
                let [_, number, color] = numberAndColor.split(" ");
                number = parseInt(number)
                if(color === "red" && number > biggestRed) {
                    biggestRed = number;
                }
                if(color === "green" && number > biggestGreen) {
                    biggestGreen = number;
                }
                if(color === "blue" && number > biggestBlue) {
                    biggestBlue = number;
                }
            }
        }
        sumOfProducts += biggestRed*biggestBlue*biggestGreen;
    }
    return sumOfProducts;
}
if (process.env.NODE_ENV !== 'test') {
    const input = getInput(import.meta.url);
    console.log("1: What is the sum of all correct ids? " + SumOfPossibleIds(input))
    console.log("2: What is the sum of the products of the minimum number of cubes of each color in each game? " + getSumOfThePowerSets(input))
}