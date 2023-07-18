const addition = require("../calc");

describe("Calculator", () => {
    describe("Addition function", () => {
        test("should return 42 for 20 + 22", () => {
            expect(addition(20, 22)).toBe(42);
        });
        test("should return 666 for 444 + 222", () => {
            expect(addition(444, 222)).toBe(666);
        });
        test("does not equal to 42", () => {
            expect(addition(20, 22)).not.toBe(4);
        });
        test("should add two positive numbers together and return the result", () => {
            expect(addition(4, 104)).toBe(108);
        });
        test("should add two negative numbers together and return the result", () => {
            expect(addition(-4, -104)).toBe(-108);
        });
        test("should add 1 positive and 1 negative number together and return the result", () => {
            expect(addition(-4, 104)).toBe(100);
        });
        test("should add 1 positive and 0 together and return the result", () => {
            expect(addition(4, 0)).toBe(4);
        });
        test("should add 1 negative and 0 together and return the result", () => {
            expect(addition(0, -104)).toBe(-104);
        });
        test("should raise an error if one of the inputs is not a number", () => {
            expect(() => addition("0", -104)).toThrowError("Both arguments must be numbers");
        });
        test("should raise an error if one parameter is null", () => {
            expect(() => addition('null', 89)).toThrowError("Both arguments must be numbers");
        });
        test("should raise an error if both parameters are null", () => {
            expect(() => addition('null', 'null')).toThrowError("Both arguments must be numbers");
        });
        test("should add floating point numbers and return the result", () => {
            expect(addition(0.2, 4.75)).toBeCloseTo(4.95);
        });
        test("should raise an error if one parameter is undefined", () => {
            expect(() => addition('undefined', 89)).toThrowError("Both arguments must be numbers");
        });
        test("should raise an error if both parameters are undefined", () => {
            expect(() => addition('undefined', 'undefined')).toThrowError("Both arguments must be numbers");
        });
    });
    describe("Subtraction function", () => {
        
    });
    describe("Multiplication function", () => {
        
    });
    describe("Division function", () => {
        
    });
});

// Potential Test Ideas
// test for no parameters
// test for missing paramenter
// undefined as a parameter


// https://www.jstwister.com/post/unit-testing-beginners-guide-testing-functions/