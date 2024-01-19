// Alias

type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};
let employees: Employee = {
  id: 1,
  name: "Nschal",
  retire: (date: Date) => {
    console.log(date);
  },
};
employees.retire(new Date());
console.log(employees.name);
