module.exports.validate = (time, minorHourGlass, majorHourGlass) => {

    let max = Number.MAX_SAFE_INTEGER;

    if ( !(time > 0 && time <= Number.MAX_SAFE_INTEGER) ) {
        throw new Error(`O tempo de preparo deve ser um valor entre 1 e ${max}`);
    }
    
    if ( !(minorHourGlass > 0 && minorHourGlass <= Number.MAX_SAFE_INTEGER) || !(majorHourGlass > 0 && majorHourGlass <= Number.MAX_SAFE_INTEGER)) {
        throw new Error(`O tempo das ampulhetas deve ser um valor entre 1 e ${max}`);
    }
    
    if ( (time > minorHourGlass) || (time > majorHourGlass) ) {
        throw new Error("O tempo das ampulhetas deve ser maior que o tempo de preparo!");
    }

    let pattern = [time, minorHourGlass, majorHourGlass].map(number => number%2).toString().replace(/\D/g, "");
    if ( pattern=="001" || pattern=="100" || pattern=="011" ){
        throw new Error("Não é possível o preparo com os parâmetros informados!");
    } 
};
