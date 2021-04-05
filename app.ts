function add(n1: number, n2: number) {
  return n1 + n2;
}

//any function that doesn't return anything returns the 'void' type
//you can still return something though, as long as the return statement isn't used for anything
function printResult(num: number): void {
  console.log("Result: " + num);
}

printResult(add(5, 12));

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

//Creating a function type
let combineValues: (a: number, b: number) => number;

combineValues = add;

console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
  console.log(result);
});
