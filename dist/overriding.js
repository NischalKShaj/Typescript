"use strict";
class Persons {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        console.log(`Hi I am ${this.name}`);
    }
}
class Student extends Persons {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
    sayHello() {
        console.log(`Hi my name is ${this.name} and i am ${this.age} years old`);
    }
}
const std = new Student("Nischal", 21);
const person = new Persons("Nischal");
std.sayHello();
person.sayHello();
