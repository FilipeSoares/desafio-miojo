const validator = require('../validator');

module.exports.minimumTime = (time, minorHourGlass, majorHourGlass) => {

    validator.validate(time, minorHourGlass, majorHourGlass);
    
    let index = 0;
    let originalMinor = minorHourGlass;
    let originalMajor = majorHourGlass;
    let elapsed = 0;

    do {

        if ( index%2 ){
            minorHourGlass = minorHourGlass-majorHourGlass;
            elapsed = elapsed+majorHourGlass;
            majorHourGlass = originalMajor;
        } else {
            majorHourGlass = majorHourGlass-minorHourGlass;
            elapsed = elapsed+minorHourGlass;
            minorHourGlass = originalMinor;
        }

        index++;

    } while (!(minorHourGlass==time || majorHourGlass==time)) 

    return (elapsed+time);
    
};
