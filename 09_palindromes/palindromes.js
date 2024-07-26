// needs to working with symbols
// needs to work with uppercase
// needs to work with multiple words
const palindromes = function(string) {
  const alphanumerical = 'abcdefghijklmnpqrstuvwxyz0123456789';
  let cleanedString = string
    .toLowerCase()
    .split('')
    .filter((character) => alphanumerical.includes(character))
    .join('')

  let reversedString = cleanedString.split('').reverse().join('');

  if (reversedString === cleanedString) {
    return true;
  } else {
    return false;
  };

};

// Do not edit below this line
module.exports = palindromes;
