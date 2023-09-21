let n = 123_456_789;
let s = "Typescript";
let is = true;
let sample;
let nothing: null = null;
let undef: undefined;

// Array
let numbers: number[] = [1, 2, 3];

// Tuple
let tuple: [number, string] = [1, "one"];

// Enum (related constants)
enum Size {
  Small = 1,
  Medium,
  Large,
}

const enum OptimizeSize {
  Small,
  Medium,
  Large,
}

let mySize = Size.Medium;
let optimizeMySize = OptimizeSize.Large;

function calculateTax(income: number, taxYear?: number): number {
  if ((taxYear || 2019) < 2022) {
    return income * 1.2;
  }
  return income * 1.3;
}

calculateTax(100);

console.log(mySize);
