const removeFromArray = function(array, ...args) {
    const newArray = [];

    array.forEach((item) => { 
        if (!args.includes(item)) {
            newArray.push(item);
        }
    });
    return newArray;
};

// removeFromArray(420, 69, 42, 21, 999, "what if i throw a string in there?");
removeFromArray([1, 2, 3, 4], 3);
// removeFromArray([1, 2, 3, 4], 3, 2);




// Do not edit below this line
module.exports = removeFromArray;
