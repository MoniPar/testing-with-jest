/**
 * @jest-environment jsdom
*/

const buttonClick = require("../button");

// runs before each test is run - creates a mock DOM
beforeEach( () => {
    // add in the node fs module which allows us to open, read and write files
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
    // document.body.innerHTML = "<p id='par'></p>";
});

describe("DOM tests", () => {
    test("expects p content to change", () => {
        buttonClick();
        expect(document.getElementById("par").innerHTML).toEqual("You Clicked");
    });
    test("h1 should exist", () => {
        expect(document.getElementsByTagName("h1").length).toBe(1);
    });
}); 