// Write your tests here!
const expect = require("chai").expect;
const substitution = require("../src/substitution");

//check for additionl tests required


//should return false if the substitution alphabet is missing

describe("substitution", () => {
  it("should return false if substitution alphabet missing", () => {
    const expected = false;
    const actual = substitution("false", );
    expect(actual).to.be.false;
  
  });



})