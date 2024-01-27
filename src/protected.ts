class Animal {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
  protected makeSound(): void {
    console.log("Animal sound");
  }
}
class Dog extends Animal {
  private breed: string;
  constructor(name: string, breed: string) {
    super(name);
    this.breed = breed;
  }
  public bark(): void {
    console.log(`${this.name} of the breed ${this.breed} barks!`);
  }
}
const myDog = new Dog("Tony","Doberman");
myDog.bark();

