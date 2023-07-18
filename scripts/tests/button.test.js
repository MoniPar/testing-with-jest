/**
 * @jest-environment jsdom
*/

const buttonClick = require("../button");

// runs before each test is run - creates a mock DOM
beforeEach( () => {
    document.body.innerHTML = "<p id='par'></p>";
});

describe("DOM tests", () => {
    test("expects p content to change", () => {
        buttonClick();
        expect(document.getElementById("par").innerHTML).toEqual("You Clicked");
    });
});