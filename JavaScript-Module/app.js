/* app.js */ 

const radius = 5;
const sideLength = 10;

// Option 1: import the entire shape-area.js module here.
 //const areaFunctions=require('./shape-area.js')

 //const areaFunctions = 'replace_me';

// Option 2: import circleArea and squareArea with object destructuring

//  const { circleArea, squareArea } = require("./shape-area.js")

// use the imported .circleArea() and .squareArea() methods here
import { circleArea,squareArea } from './shape-area.js';

// const areaOfCircle =areaFunctions.circleArea(radius) ; //1st way
// console.log(areaOfCircle)

const areaOfcircle =circleArea(radius) ; //2nd way
console.log(areaOfcircle)


const areaOfSquare = areaFunctions.squareArea(sideLength); //1st way
console.log(areaOfSquare)

const areaOfsquare = squareArea(sideLength); //2nd way
console.log(areaOfsquare)