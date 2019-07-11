const assert = require('assert').strict;
const calculator = require('./calculator');

assert.equal(10, calculator.minimumTime(3, 5, 7));
assert.equal(44, calculator.minimumTime(14, 15, 22));

assert.throws(() => calculator.minimumTime(14, 13, 22), Error, "O tempo das ampulhetas deve ser maior que o tempo de preparo!");
assert.throws(() => calculator.minimumTime(14, 15, 10), Error, "O tempo das ampulhetas deve ser maior que o tempo de preparo!");

let max = Number.MAX_SAFE_INTEGER+1;
assert.throws(() => calculator.minimumTime(max, 15, 22), Error, `O tempo de preparo deve ser um valor entre 0 e ${max}`);
assert.throws(() => calculator.minimumTime(14, max, 22), Error, `O tempo das ampulhetas deve ser um valor entre 0 e ${max}`);
assert.throws(() => calculator.minimumTime(14, 15, max), Error, `O tempo das ampulhetas deve ser um valor entre 0 e ${max}`);