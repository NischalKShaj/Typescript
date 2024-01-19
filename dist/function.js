"use strict";
// number type
function add(num) {
    return num + 2;
}
add(5);
// string type
function upper(str) {
    return str.toUpperCase();
}
upper("hello");
// with multiple arguments and datatypes
function signup(name, email, isPaid) {
    return { name, email, isPaid };
}
console.log(signup("nischal", "nischalkshaj5@gmail.com", false));
// function with multiple arguements and default parameters are set
let login = (name, email, isPaid = false) => {
    return { name, email, isPaid };
};
console.log(login("nischal", "nischalkshaj"));
// a concern in ts we should mention the type of return data type so that, that value will be returned
function addTwo(num) {
    // return "hello";   /* remove the comment to check the error encountering */
    return num + 2;
}
// here mutiple datatype are being returnd so how to remove the concern
function getVal(myVal) {
    if (myVal) {
        return true;
    }
    return "200 OK";
}
console.log(getVal(5));
let myFunc = addTwo(5);
console.log(myFunc);
// use of void return type
function consoleError(errmsg) {
    console.log(errmsg);
}
consoleError("error");
// use of never mainly used to handle errors
// function handleError(errmsg: string): never {
//   throw new Error(errmsg);
// }
// handleError("error solved");
// testing one more funciton
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022) {
        return income * 2;
    }
    return income * 3;
}
console.log(calculateTax(10000));
console.log(calculateTax(20000, 2023));
