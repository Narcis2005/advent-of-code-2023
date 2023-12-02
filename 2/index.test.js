import { SumOfPossibleIds, getSumOfThePowerSets } from "."

const input = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`

describe("Sum of Ids", ()=> {
    it("should return the sum of all ids where the configuration 12red, 13green and 14blues is possible", () => {
        expect(SumOfPossibleIds(input)).toEqual(8);
    })
    it("should return the sum of the products of the minimum number of cubes in each game", () => {
        expect(getSumOfThePowerSets(input)).toEqual(2286)
    })
})