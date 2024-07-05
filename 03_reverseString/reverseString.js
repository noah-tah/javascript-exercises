const reverseString = function(string) {
    let stringLength = string.length;
    let reversedString = '';
    for (let i = stringLength - 1; i >= 0; i--) {
        let currentChar = string[i];
        reversedString += currentChar;
    }
    return reversedString;
}; reverseString("hello") // Do not edit below this line
module.exports = reverseString;
