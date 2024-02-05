interface Citizen {
  name: string;
  sayHello(): void;
}

class Students implements Citizen {
  constructor(public name: string, public age: number) {}
  sayHello(): void {
    console.log(`Hi I am ${this.name} and I am ${this.age} years old`);
  }
}
const stds = new Students("Nischal", 21);
stds.sayHello();
