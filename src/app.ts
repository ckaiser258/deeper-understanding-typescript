const names: Array<string> = []; // this is a generic type (type connected to another type (Array and string))same as string[]
// now typescript knows there are going to only be strings in here so it will give us methods for strings
// names[0].split(" ");

//this promise will return a string
const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is done!");
  }, 2000);
  reject(() => {
    throw new Error("Error");
  });
});

promise.then((data) => {
  data.split(" ");
});
