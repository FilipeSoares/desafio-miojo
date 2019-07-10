const assert = require('assert').strict;
const calculator = require('./calculator');

assert.equal(10, calculator.minimumTime(3, 5, 7));
assert.equal(44, calculator.minimumTime(14, 15, 22));