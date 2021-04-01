//type aliases (custom types):
type Combinable = number | string; //union types are helpful when something can take more than one type of values
//below is a union type combined with a literal type. resultConversion needs to be one of these two options
//this prevents us from accidentally typing in the wrong thing
type ConversionDescriptor = "as-number" | "as-text";

function combine(
  input1: Combinable,
  input2: Combinable,
  //below is a union type combined with a literal type. resultConversion needs to be one of these two options
  //this prevents us from accidentally typing in the wrong thing
  resultConversion: ConversionDescriptor
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
