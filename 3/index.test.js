import { sumOfAdiacentProducts, sumOfAllNumbersAdiacentToSymbol } from "."

const input = `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`

describe("Numbers adiacent to symbols in engine schematic", () => {
    it("should return the sum of all numbers adiacent to symbols", () => {
        expect(sumOfAllNumbersAdiacentToSymbol(input)).toEqual(4361)
    })
    it("should return the sum of all 2 adiacent products", () => {
        expect(sumOfAdiacentProducts(input)).toEqual(467835);
    })
})