let user = {
  name: "Nischal",
  age: 21,
};
console.log(user.name);

user.name = "Vishnu";
console.log(user.name);
console.log("Hello world");

let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "Nischal",
  retire: (date: Date) => {
    console.log(date);
  },
};
employee.retire(new Date());
console.log(employee.name);
