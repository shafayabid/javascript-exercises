const convertToCelsius = function(fahrenheit) {

  let ans = (fahrenheit -32) / 1.8

  return Math.round(ans * 10) / 10

};

const convertToFahrenheit = function(celcius) {

  let ans = (celcius * (9/5)) +32

  return Math.round(ans * 10) / 10

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
