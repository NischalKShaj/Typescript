"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    return { name: name, email: email, isPaid: isPaid };
}
console.log(signup("nischal", "nischalkshaj5@gmail.com", false));
// function with multiple arguements and default parameters are set
var login = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    return { name: name, email: email, isPaid: isPaid };
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
var myFunc = addTwo(5);
console.log(myFunc);
// use of void return type
function consoleError(errmsg) {
    console.log(errmsg);
}
// use of never mainly used to handle errors
function handleError(errmsg) {
    throw new Error(errmsg);
}
