import { getInput } from "../utils/index.js";
export function sumOfAllNumbersAdiacentToSymbol(input) {
    const inputSplittedInLines = input.split(/\r?\n/);
    let sum = 0;
    for(let i = 0; i<inputSplittedInLines.length; i++) {
        let currentNumber = 0;
        let isAdiacentToSymbol = false;
        for(let j = 0; j<inputSplittedInLines[i].length; j++) {
            if(!isNaN(inputSplittedInLines[i][j])) {
                currentNumber = currentNumber * 10 + parseInt(inputSplittedInLines[i][j]);
                if(typeof inputSplittedInLines?.[i]?.[j-1] === "string" && inputSplittedInLines?.[i]?.[j-1] !== "." && isNaN(inputSplittedInLines?.[i]?.[j-1]) ||
                typeof inputSplittedInLines?.[i-1]?.[j-1] === "string" && inputSplittedInLines?.[i-1]?.[j-1] !== "." && isNaN(inputSplittedInLines?.[i-1]?.[j-1]) ||
                typeof inputSplittedInLines?.[i+1]?.[j-1] === "string" && inputSplittedInLines?.[i+1]?.[j-1] !== "." && isNaN(inputSplittedInLines?.[i+1]?.[j-1]) ||
                typeof inputSplittedInLines?.[i+1]?.[j] === "string" && inputSplittedInLines?.[i+1]?.[j] !== "." && isNaN(inputSplittedInLines?.[i+1]?.[j]) ||
                typeof inputSplittedInLines?.[i-1]?.[j] === "string" && inputSplittedInLines?.[i-1]?.[j] !== "." && isNaN(inputSplittedInLines?.[i-1]?.[j]) ||
                typeof inputSplittedInLines?.[i]?.[j+1] === "string" && inputSplittedInLines?.[i]?.[j+1] !== "." && isNaN(inputSplittedInLines?.[i]?.[j+1]) ||
                typeof inputSplittedInLines?.[i+1]?.[j+1] === "string" && inputSplittedInLines?.[i+1]?.[j+1] !== "." && isNaN(inputSplittedInLines?.[i+1]?.[j+1]) ||
                typeof inputSplittedInLines?.[i-1]?.[j+1] === "string" && inputSplittedInLines?.[i-1]?.[j+1] !== "." && isNaN(inputSplittedInLines?.[i-1]?.[j+1]) ) {
                    isAdiacentToSymbol = true;
                }
            }
            else{
                if(isAdiacentToSymbol) {
                    sum+=currentNumber;
                }
                isAdiacentToSymbol = false;
                currentNumber = 0;
            }
           
        }
        if(isAdiacentToSymbol) {
            sum+=currentNumber;
        }
        isAdiacentToSymbol = false;
        currentNumber = 0;
    }
    return sum;
}
export function sumOfAdiacentProducts (input) {
    const inputSplittedInLines = input.split(/\r?\n/);
    let map = {}
    for(let i = 0; i<inputSplittedInLines.length; i++) {
        let currentNumber = 0;
        let productCoordinates = "";
        for(let j = 0; j<inputSplittedInLines[i].length; j++) {
            if(!isNaN(inputSplittedInLines[i][j])) {
                currentNumber = currentNumber * 10 + parseInt(inputSplittedInLines[i][j]);
                if(inputSplittedInLines?.[i]?.[j-1] === "*" ) {
                    productCoordinates=`${i}_${j-1}`;
                }
                if(inputSplittedInLines?.[i-1]?.[j-1] === "*") {
                    productCoordinates=`${i-1}_${j-1}`;
                }
                if(inputSplittedInLines?.[i+1]?.[j-1] === "*") {
                    productCoordinates=`${i+1}_${j-1}`;
                }
                if(inputSplittedInLines?.[i+1]?.[j] === "*") {
                    productCoordinates=`${i+1}_${j}`;
                }
                if(inputSplittedInLines?.[i-1]?.[j] === "*") {
                    productCoordinates=`${i-1}_${j}`;
                }
                if(inputSplittedInLines?.[i]?.[j+1] === "*") {
                    productCoordinates=`${i}_${j+1}`;
                } 
                if(inputSplittedInLines?.[i+1]?.[j+1] === "*") {
                    productCoordinates=`${i+1}_${j+1}`;
                } 
                if(inputSplittedInLines?.[i-1]?.[j+1] === "*")  {
                    productCoordinates=`${i-1}_${j+1}`;
                }
            }
            else{
                if(productCoordinates !== "") {
                    if(map[productCoordinates] == null){
                        map[productCoordinates] = [currentNumber]
                    }
                    else {
                        map[productCoordinates].push(currentNumber);
                    }
                }
                productCoordinates = "";
                currentNumber = 0;
            }
           
        }
        if(productCoordinates !== "") {
            if(map[productCoordinates] == null){
                map[productCoordinates] = [currentNumber]
            }
            else {
                map[productCoordinates].push(currentNumber);
            }
        }
        productCoordinates = "";
        currentNumber = 0;
    }
    let sum = 0;
    for(let multiplicationCoordinates in map) {
        if(map[multiplicationCoordinates].length > 1) {
            sum += map[multiplicationCoordinates].reduce((a,b) => {return a*b}, 1)
        }
    }
    return sum;

}
if (process.env.NODE_ENV !== 'test') {
    const input = getInput(import.meta.url);
    console.log("1: What is the sum of all numbers adiacent to a symbol? " + sumOfAllNumbersAdiacentToSymbol(input))
    console.log("2: What is the sum of all 2 adiacent products? " + sumOfAdiacentProducts(input))
}