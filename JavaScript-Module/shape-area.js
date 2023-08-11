/* shape-area.js */
const PI = Math.PI;

function circleArea(r) {
  return PI * r * r;
}
function squareArea(side) {
  return side * side;
}


// module.exports.squareArea = squareArea;
// module.exports.circleArea = circleArea;
export {circleArea,squareArea}

