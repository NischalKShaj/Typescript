"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log("Animal sound");
    }
}
class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    bark() {
        console.log(`${this.name} of the breed ${this.breed} barks!`);
    }
}
const myDog = new Dog("Tony", "Doberman");
myDog.bark();
