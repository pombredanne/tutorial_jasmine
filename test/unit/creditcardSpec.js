'use strict';

describe("CreditCard", function() {
  var creditcard;

  beforeEach(function() {
    creditcard = new CreditCard();
  });  


  it("should clean number by removing spaces and dashes", function() {
    expect(creditcard.cleanNumber("123 4-5")).toEqual("12345");
  });

  
  it("should validate number based on mod 10", function() {
    expect(creditcard.validNumber("4111 1111-11111111")).toBeTruthy();
    expect(creditcard.validNumber("4111111111111121")).toBeFalsy();
  });

});
