/* water-limits.js */
const converters = require('./converter.js');
 
const freezingPointC = 0;
const boilingPointC = 100;
 
const freezingPointF = converters.celsiusToFahrenheit(freezingPointC);
const boilingPointF = converters.celsiusToFahrenheit(boilingPointC);
 
console.log(`The freezing point of water in Fahrenheit is ${freezingPointF}`);
console.log(`The boiling point of water in Fahrenheit is ${boilingPointF}`);

const freezingPointf = 32;
const boilingPointf = 212;

const freezingPointc = converters.fahrenheitToCelsius(freezingPointf);
const boilingPointc = converters. fahrenheitToCelsius(boilingPointf);
 
console.log(`The freezing point of water in Celsius is ${freezingPointc}`);
console.log(`The boiling point of water in Celsius is ${boilingPointc}`);