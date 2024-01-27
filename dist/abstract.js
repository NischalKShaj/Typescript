"use strict";
class Shape {
    display() {
        console.log(`Area : ${this.calculateArea()}`);
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}
const circle = new Circle(4);
circle.display();
