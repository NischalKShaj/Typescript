"use strict";
function makeSound(animal) {
    if (animal.kind === "dog") {
        animal.bark();
        console.log("barking");
    }
    else {
        animal.meow();
        console.log("mewing");
    }
}
let cat = { kind: "cat", meow() { } };
makeSound(cat);
