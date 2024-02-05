//  file to show the animal details and sound

// class zoo or the base class
class ZooAnimals {
  constructor(public name: string, public age: number) {}

  displayInfo(): void {
    console.log(
      `This is a zoo name: ${this.name} and this zoo is ${this.age}years old`
    );
  }
}
// class mamals which is the extended class
class Mamals extends ZooAnimals {
  constructor(name: string, age: number, public color: string) {
    super(name, age);
  }
  displayInfo(): void {
    console.log(
      `This is a mammal its name is ${this.name} and it is ${this.age} years old  and its fur color is ${this.color}`
    );
  }
}
// class bird which is also another extended class
class Birds extends ZooAnimals {
  constructor(name: string, age: number, public featherColor: string) {
    super(name, age);
  }
  displayInfo(): void {
    console.log(
      `This is a bird its name is ${this.name} and it is ${this.age} years old and its feathre color is ${this.featherColor}`
    );
  }
}
// class reptile which is also another extended class
class Reptile extends ZooAnimals {
  constructor(name: string, age: number, public scaleType: string) {
    super(name, age);
  }
  displayInfo(): void {
    console.log(
      `This is a reptile its name is ${this.name} and it is ${this.age} years old and its skin type is${this.scaleType} `
    );
  }
}
const zoo = new ZooAnimals("TVM Zoo", 45);
const mamals = new Mamals("Lion", 5, "Golden");
const birds = new Birds("Blu Macaw", 3, "Blue");
const reptile = new Reptile("Aligator", 2, "Rough");
zoo.displayInfo();
mamals.displayInfo();
birds.displayInfo();
reptile.displayInfo();
