let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
  //unknown is different than 'any' because if this was outside an if statement,
  //it would break since userInput might not be a string (userName) is guaranteed to be a string
  //when using 'any', that wouldn't break
  userName = userInput;
}
