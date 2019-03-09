var assert = require("chai").assert;
var aloLuhn = require("./aloLuhn");
//console.log(aloLuhn)

describe("aloLuhn", function() {
  it("should return true if credit card number is valid", function() {
    var num = "79927398713";
    var result = aloLuhn(num);
    assert.isTrue(result);
  });

  it("should return false if credit card number is invalid", function() {
    var num = "21324";
    assert.isFalse(aloLuhn(num));
  });

  // it("should return true if a phrase is a palindrome", function() {
  //   var phrase = "a man a plan a canal panama";
  //   assert.isTrue(isPalindrome(phrase));
  // });

  // it("should return false if a phrase is NOT a palindrome", function() {
  //   var phrase = "this is not a palindrome"
  //   assert.isFalse(isPalindrome(phrase));
  // });
});