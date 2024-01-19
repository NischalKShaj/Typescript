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
