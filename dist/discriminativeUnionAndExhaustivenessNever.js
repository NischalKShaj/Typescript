"use strict";
function area(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side ** 2;
        case "rectangle":
            return shape.length * shape.width;
        default:
            const _exhaustivenessCheck = shape;
            return _exhaustivenessCheck;
    }
}
const circles = { kind: "circle", radius: 3 };
console.log(area(circles));
