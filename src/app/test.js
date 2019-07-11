const assert = require('assert').strict;
const calculator = require('./calculator');

assert.equal(10, calculator.minimumTime(3, 5, 7));
assert.equal(44, calculator.minimumTime(14, 15, 22));

assert.equal("O tempo das ampulhetas deve ser maior que o tempo de preparo!", calculator.minimumTime(14, 13, 22));
assert.equal("O tempo das ampulhetas deve ser maior que o tempo de preparo!", calculator.minimumTime(14, 15, 10));

let max = Number.MAX_SAFE_INTEGER+1;
assert.equal(`O tempo de preparo deve ser um valor entre 1 e ${max-1}`, calculator.minimumTime(max, 15, 22));
assert.equal(`O tempo das ampulhetas deve ser um valor entre 1 e ${max-1}`, calculator.minimumTime(14, max, 22));
assert.equal(`O tempo das ampulhetas deve ser um valor entre 1 e ${max-1}`, calculator.minimumTime(14, 15, max));

assert.equal("Não é possível o preparo com os parâmetros informados!", calculator.minimumTime(2, 15, 23));
assert.equal("Não é possível o preparo com os parâmetros informados!", calculator.minimumTime(3, 14, 22));
assert.equal("Não é possível o preparo com os parâmetros informados!", calculator.minimumTime(2, 6, 51));