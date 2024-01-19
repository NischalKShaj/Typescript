// number type
function add(num: number) {
  return num + 2;
}
add(5);

// string type
function upper(str: string) {
  return str.toUpperCase();
}
upper("hello");

// with multiple arguments and datatypes
function signup(name: string, email: string, isPaid: boolean) {
  return { name, email, isPaid };
}
console.log(signup("nischal", "nischalkshaj5@gmail.com", false));

// function with multiple arguements and default parameters are set
let login = (name: string, email: string, isPaid: boolean = false) => {
  return { name, email, isPaid };
};
console.log(login("nischal", "nischalkshaj"));

// a concern in ts we should mention the type of return data type so that, that value will be returned
function addTwo(num: number): number {
  // return "hello";   /* remove the comment to check the error encountering */
  return num + 2;
}

// here mutiple datatype are being returnd so how to remove the concern
function getVal(myVal: number): boolean | string {
  if (myVal) {
    return true;
  }
  return "200 OK";
}

console.log(getVal(5));

let myFunc = addTwo(5);
console.log(myFunc);

// use of void return type
function consoleError(errmsg: string): void {
  console.log(errmsg);
}

// use of never mainly used to handle errors
function handleError(errmsg: string): never {
  throw new Error(errmsg);
}

export {};
