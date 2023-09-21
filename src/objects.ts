// type aliase
type Employee = {
  readonly id: number;
  name: string;
  fax?: number;
  info: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: "",
  info: (date: Date) => console.log(date),
};

employee.name = "Asad";

// Union |
function kgToLbs(weight: number | string): number {
  if (typeof weight === "number") return weight * 2.2;
  else return parseInt(weight) * 2.2;
}

kgToLbs(3);
kgToLbs("4kg");

// Type Intersection &
type Draggable = {
  drag: () => void;
};
type Resizeable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizeable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

// Type Literal
type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = "cm" | "inch";
let metric: Metric = "cm";

// Nullable Types
function greet(name: string | null | undefined): void {
  if (name) {
    console.log(name.toUpperCase());
  } else {
    console.log("Hola!");
  }
}

greet(undefined);
