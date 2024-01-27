type Fish = { swim(): void };
type Bird = { fly(): void };

function is_Fish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function pet_Food(pet: Fish | Bird): string {
  if (is_Fish(pet)) {
    pet.swim();
    return "Fish food";
  } else {
    pet.fly();
    return "Bird food";
  }
}
const fish: Fish = {
  swim(): void {
    console.log("swimming.....");
  },
};
const bird: Bird = {
  fly(): void {
    console.log("flying....");
  },
};
console.log(pet_Food(fish as Fish));
console.log(pet_Food(bird as Bird));
