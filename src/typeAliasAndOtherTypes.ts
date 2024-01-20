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

// Union types
function kgToLbs(weight: number | string): number {
  if (typeof weight === "number") {
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.2;
  }
}
const result = kgToLbs(10);
const res = kgToLbs("10");
console.log(res, result);

// interception types
type Draggable = {
  drag: () => void;
};
type Resizable = {
  resize: () => void;
};
type UIWidget = Draggable &
  Resizable & {
    textSize: number;
    backgroundColor: string;
  };

let textBox: UIWidget = {
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
function greet(name: string | null | undefined) {
  if (name) {
    console.log(name.toUpperCase());
  } else {
    console.log("No value passed");
  }
}
greet("nischal");
greet(null);
greet(undefined);
