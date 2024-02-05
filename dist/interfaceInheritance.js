"use strict";
class Students {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(`Hi I am ${this.name} and I am ${this.age} years old`);
    }
}
const stds = new Students("Nischal", 21);
stds.sayHello();
