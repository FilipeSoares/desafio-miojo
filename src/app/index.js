const calculator = require('./calculator');

let args = process.argv.slice(2);

if (args.length!=3){
    throw new Error("Os parâmetros de tempo de preparo e tempo das ampulhetas devem ser passados!");
}

let time = parseInt(args[0]);

let hourglasses = args.slice(1).map(item => parseInt(item)).sort();
let minorHourGlass = parseInt(hourglasses[0]);
let majorHourGlass = parseInt(hourglasses[1]);

if ( !(time >= 0 && time <= Number.MAX_SAFE_INTEGER) ) {
    throw new Error("O tempo de preparo deve ser um valor entre 0 e 9007199254740991");
}

if ( !(minorHourGlass >= 0 && minorHourGlass <= Number.MAX_SAFE_INTEGER) || !(majorHourGlass >= 0 && majorHourGlass <= Number.MAX_SAFE_INTEGER)) {
    throw new Error("O tempo das ampulhetas deve ser um valor entre 0 e 9007199254740991");
}

if ( (time > minorHourGlass) || (time > majorHourGlass) ) {
    throw new Error("O tempo das ampulhetas deve ser maior que o tempo de preparo!");
}

calculator.minimumTime(time, minorHourGlass, majorHourGlass);