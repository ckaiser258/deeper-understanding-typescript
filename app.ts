//union types are helpful when something can take more than one type of values
function combine(
  input1: number | string,
  input2: number | string,
  //below is a union type combined with a literal type. resultConversion needs to be one of these two options
  //this prevents us from accidentally typing in the wrong thing
  resultConversion: "as-number" | "as-text"
) {
  let result;

  //input1 + input2 will not work outside of our if statement because typescript doesn't know that the + operator works on both types in the union type
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine(`30`, `26`, "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);
