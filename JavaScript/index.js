function squareArea(side) {
    return side*side
}

module.exports.squareArea=squareArea

module.exports.circleArea=(radius)=>{
    return 3.14*radius*radius;
}

const rectangleArea=function (a,b) {
    return a*b;
}
module.exports.Area=rectangleArea
