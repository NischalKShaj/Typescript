// normal generic functions //
function generics<T>(val: T): T {
  return val;
}
const jersy: number = 10;
const named: string = "Nischal";
console.log(generics(jersy));
console.log(generics(named));

// generic functions for arrays //
const printArray = <T>(arr: T[]): T[] => {
  return arr;
};
const nums: number[] = [1, 2, 3, 4, 5];
const players: string[] = ["Nischal", "Vishnu"];
console.log(printArray(nums));
console.log(printArray(players));

// generic functions for interface //
interface Pair<T, U> {
  first: T;
  second: U;
}

const swap = <T, U>(pair: Pair<T, U>): Pair<U, T> => {
  return { first: pair.second, second: pair.first };
};
const original: Pair<number, string> = { first: 42, second: "Hello" };
const swaped: Pair<string, number> = swap(original);
console.log(original);
console.log(swaped);

// generic funtions in parameters //
interface Database {
  id: number;
  name: string;
}

let dbConnect = <T, U extends Database>(val1: T, val2: U): object => {
  return {
    val1,
    val2,
  };
};
let detail = dbConnect(1, { id: 123, name: "Nischal" });
console.log(detail);

// generic class //
interface Quiz {
  name: string;
  score: number;
  type: string;
}

interface Course {
  name: string;
  author: string;
  duration: string | number;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];
  addToCart(product: T) {
    this.cart.push(product);
  }
}

const quizSeller = new Sellable<Quiz>();
const courseSeller = new Sellable<Course>();

const qProduct: Quiz = {
  name: "Leetcode",
  score: 50,
  type: "Coding Challenge",
};
const cProduct: Course = {
  name: "Coding with mosh",
  author: "Mosh Hamedani",
  duration: "3 weeks",
  subject: "Typescript",
};
quizSeller.addToCart(qProduct);
courseSeller.addToCart(cProduct);

console.log(quizSeller.cart);
console.log(courseSeller.cart);
