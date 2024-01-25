"use strict";
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    introduce() {
        console.log(`Hi I am ${this.firstName} ${this.lastName} and I am a software developer`);
        this.tellMyAge();
    }
    tellMyAge() {
        console.log(`I am ${this.age} years old and I will be ${this.age + 1} next month`);
    }
}
const person1 = new Person("Nischal", "K Shaj", 21);
person1.introduce();
