function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  }
  return n1 + n2;
}

let number1: number;
number1 = 5;
//Typescript has type inference, so it automatically knows the below is a number
//The above is an option for if you'd like to declare a variable later
const number2 = 2.8;
const printResult = true;
let resultPhrase = "Result is: ";
//resultPhrase = 0 would cause an error here since Typescript knows resultPhrase is supposed to be a string due to type inference

add(number1, number2, printResult, resultPhrase);
