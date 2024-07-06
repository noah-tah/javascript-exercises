const convertToCelsius = function(temperatureInFahrenheit) {
  // F to C C = 5/9(F-32);
  let a = 5 / 9;
  let b = temperatureInFahrenheit - 32;
  let c = a * b;
  if (c === 0) {
    return c;
  } else {
    return parseFloat(c.toFixed(1));
  }
};

const convertToFahrenheit = function(temperatureInCelsius) {
  let a = 9 / 5;
  let b = a * temperatureInCelsius;
  let c = b + 32;
  if (c === 0) {
    return c;
  } else {
    return parseFloat(c.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
