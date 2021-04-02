function add(n1: number, n2: number) {
  return n1 + n2;
}

//any function that doesn't return anything returns the 'void' type
function printResult(num: number): void {
  console.log("Result: " + num);
}

printResult(add(5, 12));

//Creating a function type
let combineValues: (a: number, b: number) => number;

combineValues = add;

console.log(combineValues(8, 8));
