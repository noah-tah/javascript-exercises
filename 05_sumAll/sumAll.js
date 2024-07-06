const sumAll = function(a, b) {
    // ✕ returns ERROR with negative numbers (1 ms)
    // ✕ returns ERROR with non-number parameters
    // ✕ returns ERROR with non-number parameters
    if (!Number.isInteger(a)) {
        return "ERROR";
    }
    if (!Number.isInteger(b)){
        return "ERROR";
    }

    if (a < 0) {
        return "ERROR";
    }

    if (b < 0) {
        return "ERROR";
    }

    let sum = 0;
    if (a > b) {
        let temp = a;
        a = b;
        b = temp;
    }

    for (let i = a; i <= b; i++) {
       sum += i; 
    }
    return sum;


};
sumAll(4, 1);

// Do not edit below this line
module.exports = sumAll;
