// Write your tests here!
const expect = require("chai").expect;
const polybius = require("../src/polybius");



describe("polybius", () => {
it("should return true if encoded correctly", () => {
  const expected = "13431551";
  const actual = polybius("love", 1);
  expect(actual).to.equal(expected);

})
it("returns false when given alphabet isn't 26 ", () => {
  const expected = "5511";
  const actual = polybius("za", 1 );
  expect(actual).to.equal(expected);
});
})
it("should return false if coding is correct ", () => {
  const expected = "1454425144";
  const actual = polybius("quiet", 1 );
  expect(actual).to.equal(expected);
});



