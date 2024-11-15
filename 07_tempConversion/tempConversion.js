const convertToCelsius = function(tempF) {
  return Math.round((tempF - 32) * 5/9 , 1);
};

const convertToFahrenheit = function(tempC) {
  return Math.round(tempC * 9/5 +32 , 1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
