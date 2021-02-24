// Write your tests here!
//should return false if the substitution alphabet is not exactly 26 characters


const expect = require("chai").expect;
const caesar = require("../src/caesar");

//check for additionl tests required do 3 more

describe("caesar", () => {
it("should return false", () => {
  const expected = false;
  const actual = caesar("it is fun , ");
  expect(actual).to.equal(expected);

})
it("should loop around from the letter a from z", () => {
  const expected = "ab";
  const actual = caesar("za", 1 );
  expect(actual).to.equal(expected);
});
})

