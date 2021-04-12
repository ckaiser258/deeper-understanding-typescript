let userInput: unknown;
let userName: string;

const button = document.querySelector("button");
//since we have strictBindCallApply on, clickHandler.bind(null) would throw an error since clickHandler() needs an argument
button?.addEventListener("click", clickHandler.bind(null, "You're welcome!"));

function clickHandler(message: string) {
  console.log("Clicked! " + message);
}

userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
  //unknown is different than 'any' because if this was outside an if statement,
  //it would break since userInput might not be a string (userName) is guaranteed to be a string
  //when using 'any', that wouldn't break
  userName = userInput;
}

function generateError(message: string, code: number): never {
  //since this function will NEVER return anything (only returns an error and crashes the script)
  //it should be set to the never type as opposed to void
  throw { message: message, errorCode: code };
}

const result = generateError("An error occured", 500);

console.log(result);
