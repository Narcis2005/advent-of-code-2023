import { getSumOfCalibrationValues, getTrueSumOfCalibrationValues } from "."
const input = 
`1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`;

const input2 = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`
describe("getSumOfCalibrationValues", () => {
    it("should return the sum of all calibration values from each line", () => {
        expect(getSumOfCalibrationValues(input)).toEqual(142);
    })
    it("should return the true sum of all calibration values from each line, that includes the digits written as strings", () => {
        expect(getTrueSumOfCalibrationValues(input2)).toEqual(281);
    })
})