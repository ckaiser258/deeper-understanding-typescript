//union types are helpful when something can take more than one type of values
function combine(input1: number | string, input2: number | string) {
  let result;

  //input1 + input2 will not work outside of our if statement because typescript doesn't know that the + operator works on both types in the union type
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(30, 26);
console.log(combinedAges);

const combinedNames = combine("Max", "Anna");
console.log(combinedNames);
