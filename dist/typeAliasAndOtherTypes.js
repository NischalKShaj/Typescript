"use strict";
// Alias
let employees = {
  id: 1,
  name: "Nschal",
  retire: (date) => {
    console.log(date);
  },
};
employees.retire(new Date());
console.log(employees.name);
// Union types
function kgToLbs(weight) {
  if (typeof weight === "number") {
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.2;
  }
}
const result = kgToLbs(10);
const res = kgToLbs("10");
console.log(res, result);
let textBox = {
  drag: () => {
    console.log("dragging....");
  },
  resize: () => {
    console.log("resizing...");
  },
  textSize: 16,
  backgroundColor: "Crimson",
};
console.log(textBox.textSize);
console.log(textBox.backgroundColor);
// Nullable types
function greet(name) {
  if (name) {
    console.log(name.toUpperCase());
  } else {
    console.log("No value passed");
  }
}
greet("nischal");
greet(null);
greet(undefined);
