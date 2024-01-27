"use strict";
// normal generic functions //
function generics(val) {
    return val;
}
const jersy = 10;
const named = "Nischal";
console.log(generics(jersy));
console.log(generics(named));
// generic functions for arrays //
const printArray = (arr) => {
    return arr;
};
const nums = [1, 2, 3, 4, 5];
const players = ["Nischal", "Vishnu"];
console.log(printArray(nums));
console.log(printArray(players));
const swap = (pair) => {
    return { first: pair.second, second: pair.first };
};
const original = { first: 42, second: "Hello" };
const swaped = swap(original);
console.log(original);
console.log(swaped);
let dbConnect = (val1, val2) => {
    return {
        val1,
        val2,
    };
};
let detail = dbConnect(1, { id: 123, name: "Nischal" });
console.log(detail);
