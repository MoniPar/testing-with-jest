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
        // test("should raise an error if one parameter is missing", () => {
        //     expect(() => addition(a, 89)).toThrowError("Both arguments must be numbers");
        // });
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
// null as one or both parameters
// undefined as a parameter
// does it work with floating point numbers?

// https://www.jstwister.com/post/unit-testing-beginners-guide-testing-functions/