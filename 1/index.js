import { getInput } from "../utils/index.js";

export function getSumOfCalibrationValues (input) {
    const inputSplittedInLines = input.split(/\r?\n/);
    let sum = 0;
    for(let i = 0; i<inputSplittedInLines.length; i++) {
        let firstDigit = -1;
        let currentDigit = -1;
        for(let j = 0; j<inputSplittedInLines[i].length; j++) {
            if(!isNaN(inputSplittedInLines[i][j])) {
                if(firstDigit === -1) {
                    firstDigit = inputSplittedInLines[i][j];
                }
                currentDigit = inputSplittedInLines[i][j];
            }
        }
        const calibrationValueForIthLine = `${firstDigit}${currentDigit}`;
        sum += parseInt(calibrationValueForIthLine);
    }
    return sum;
}
export function getTrueSumOfCalibrationValues (input) {
    const inputSplittedInLines = input.split(/\r?\n/);
    const digitsMap = {
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9
    }
    let sum = 0;
    for(let i = 0; i<inputSplittedInLines.length; i++) {
        let firstDigit = {digit: -1, index: -1};
        let lastDigit = {digit: -1, index: -1};
        //Looping through all digits
        for(let j = 0; j<Object.keys(digitsMap).length; j++) {
            //Checking if the digit exists
           if( inputSplittedInLines[i].indexOf(Object.keys(digitsMap)[j]) != -1) {
            let startIndex = 0;
            //The same digit might appear multiple times on the same line
            while(inputSplittedInLines[i].indexOf(Object.keys(digitsMap)[j], startIndex) != -1) {
                if(firstDigit.index === -1 || inputSplittedInLines[i].indexOf(Object.keys(digitsMap)[j], startIndex) < firstDigit.index) {
                    firstDigit.digit = digitsMap[Object.keys(digitsMap)[j]];
                    firstDigit.index = inputSplittedInLines[i].indexOf(Object.keys(digitsMap)[j], startIndex)
                }
                if(inputSplittedInLines[i].indexOf(Object.keys(digitsMap)[j], startIndex) > lastDigit.index) {
                    lastDigit.digit = digitsMap[Object.keys(digitsMap)[j]];
                    lastDigit.index = inputSplittedInLines[i].indexOf(Object.keys(digitsMap)[j], startIndex)
                }
                startIndex = inputSplittedInLines[i].indexOf(Object.keys(digitsMap)[j], startIndex) + Object.keys(digitsMap)[j].length;
            }
           }
        }

        for(let j = 0; j<inputSplittedInLines[i].length; j++) {
            if(!isNaN(inputSplittedInLines[i][j])) {
                if(firstDigit.index === -1 || j<firstDigit.index) {
                    firstDigit.digit = parseInt(inputSplittedInLines[i][j]);
                    firstDigit.index = j;
                }
                if(j > lastDigit.index) {
                    lastDigit.digit = parseInt(inputSplittedInLines[i][j]);
                    lastDigit.index = j;
                }
                
            }
        }
        const calibrationValueForIthLine = `${firstDigit.digit}${lastDigit.digit}`;
        sum += parseInt(calibrationValueForIthLine);
    }
    return sum;
}

if (process.env.NODE_ENV !== 'test') {
    const input = getInput(import.meta.url);
    console.log("1: What is the sum of all calibration values? " + getSumOfCalibrationValues(input))
    console.log("2: What is the true sum of all calibration values, including digits written in character? " + getTrueSumOfCalibrationValues(input))
}