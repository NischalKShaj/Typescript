"use strict";
// file to show the working of the union datatypes
let account = { name: "Nischal", id: 12345 };
console.log(account);
account = { username: "NKS", id: 12345 };
console.log(account);
// using union with function
let getId = (id) => {
    if (typeof id === "string") {
        id = id.toLowerCase();
        console.log(id);
    }
    else {
        id = id.toExponential(2); //Returns a string containing a number represented in exponential notation.
        console.log(id);
    }
};
getId("NIS123");
getId(123);
// using union along with array
const data = [1, 2, "Nischal"];
for (let value of data) {
    console.log(value);
}
