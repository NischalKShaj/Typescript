"use strict";
//exhaustiveness checking with never
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
// Uncommenting the following line would result in a TypeScript compilation error,
// as it represents a case that should never be reached.
// const invalidShape: Shapes = { kind: 'invalid', invalidProperty: 42 };
// console.log(area(invalidShape));
