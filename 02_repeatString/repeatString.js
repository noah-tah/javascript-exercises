const repeatString = function(string, num) {
    if (num < 0) {
        console.log('ERROR');
        return 'ERROR';
    }
    let stringToReturn = "";
    for (i = 0 ; i < num; i++) {
        stringToReturn += string;
    }
    return stringToReturn;
};

repeatString('hey', 3);

repeatString('hello', 10);

repeatString('hi', 1);

repeatString('bye', 0);

repeatString('goodbye', -1);

repeatString('odin', Math.random());

repeatString('', 10);
// Do not edit below this line
module.exports = repeatString;
