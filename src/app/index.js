const calculator = require('./calculator');

let args = process.argv.slice(2);

if (args.length!=3){
    throw new Error("Os parâmetros de tempo de preparo e tempo das ampulhetas devem ser passados!");
}

let time = parseInt(args[0]);
let hourglasses = args.slice(1).map(item => parseInt(item)).sort();
let minorHourGlass = parseInt(hourglasses[0]);
let majorHourGlass = parseInt(hourglasses[1]);

let result = calculator.minimumTime(time, minorHourGlass, majorHourGlass);

console.log(result);
