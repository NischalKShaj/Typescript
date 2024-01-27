"use strict";
function is_Fish(pet) {
    return pet.swim !== undefined;
}
function pet_Food(pet) {
    if (is_Fish(pet)) {
        pet.swim();
        return "Fish food";
    }
    else {
        pet.fly();
        return "Bird food";
    }
}
const fish = {
    swim() {
        console.log("swimming.....");
    },
};
const bird = {
    fly() {
        console.log("flying....");
    },
};
console.log(pet_Food(fish));
console.log(pet_Food(bird));
