type Animals = Dog | Cat;

interface Dog {
  kind: "dog";
  bark(): void;
}
interface Cat {
  kind: "cat";
  meow(): void;
}

function makeSound(animal: Animals): void {
  if (animal.kind === "dog") {
    animal.bark();
    console.log("barking");
  } else {
    animal.meow();
    console.log("mewing");
  }
}
let cat: Cat = { kind: "cat", meow(): void {} };
makeSound(cat);
