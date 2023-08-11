/* converters.js */
   
 
   
  module.exports.fahrenheitToCelsius = fahrenheit=> {
    return (fahrenheit - 32) * (5/9);
  };

  const celsiusToFahrenheit=function(celsius){
    return celsius*(9/5)+32;
  }
  module.exports.celsiusToFahrenheit=celsiusToFahrenheit;