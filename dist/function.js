"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(num) {
    return num + 2;
}
add(5);
function upper(str) {
    return str.toUpperCase();
}
upper("hello");
function signup(name, email, isPaid) {
    return { name, email, isPaid };
}
console.log(signup("nischal", "nischalkshaj5@gmail.com", false));
let login = (name, email, isPaid = false) => {
    return { name, email, isPaid };
};
console.log(login("nischal", "nischalkshaj"));
function addTwo(num) {
    return num + 2;
}
function getVal(myVal) {
    if (myVal) {
        return true;
    }
    return "200 OK";
}
console.log(getVal(5));
let myFunc = addTwo(5);
console.log(myFunc);
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
