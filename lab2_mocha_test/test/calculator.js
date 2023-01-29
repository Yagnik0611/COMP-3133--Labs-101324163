const assert = require("chai").assert;
const describe = require("mocha").describe;
const it = require("mocha").it;
const calculator = require("../app/calculator");

describe("Test Calculator", function() {
  it("add(5, 2) expected result 7 PASS", function() {
    const result = calculator.add(5, 2);
    assert.equal(result, 7);
  });

  it("add(5, 2) expected result 7 PASS", function() {
    const result = calculator.add(5, 2);
    assert.equal(result, 8);
  });

  it("sub(5, 2) expected result 3 PASS", function() {
    const result = calculator.sub(5, 2);
    assert.equal(result, 3);
  });

  it("sub(5, 2) expected result 3 PASS", function() {
    const result = calculator.add(5, 2);
    assert.equal(result, 8);
  });
  
  it("mul(5, 2) expected result 10 PASS", function() {
    const result = calculator.mul(5, 2);
    assert.equal(result, 10);
  });

  it("mul(5, 2) expected result 10 PASS", function() {
    const result = calculator.add(5, 2);
    assert.equal(result, 11);

  });
  
  it("div(10, 2) expected result 5 PASS", function() {
    const result = calculator.div(10, 2);
    assert.equal(result, 5);
  });

  it("div(10, 2) expected result 5 PASS", function() {
    const result = calculator.div(10, 2);
    assert.equal(result, 4);
  });


});
