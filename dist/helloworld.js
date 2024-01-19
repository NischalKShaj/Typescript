"use strict";
let user = {
  name: "Nischal",
  age: 21,
};
console.log(user.name);
user.name = "Vishnu";
console.log(user.name);
console.log("Hello world");
let employee = {
  id: 1,
  name: "Nischal",
  retire: (date) => {
    console.log(date);
  },
};
employee.retire(new Date());
console.log(employee.name);
