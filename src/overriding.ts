class Persons {
  constructor(protected name: string) {}
  sayHello(): void {
    console.log(`Hi I am ${this.name}`);
  }
}
class Student extends Persons {
  constructor(name: string, private age: number) {
    super(name);
  }
  sayHello(): void {
    console.log(`Hi my name is ${this.name} and i am ${this.age} years old`);
  }
}
const std = new Student("Nischal", 21);
const person = new Persons("Nischal");
std.sayHello();
person.sayHello();
