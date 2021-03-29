//Type inference is used on objects as well, so typescript automatically infers this:
// const person: {
//   name: string;
//   age: number;
// }
//when this is made:
const person = { name: "Colton", age: 28, hobbies: ["Sports", "Cooking"] };

//remember, typescript can infer that this is of type string[] just from assigning it to an array of strings
//explicitly telling it the type like below is used often for when the variable might be changed
let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase()); //since typescript knows hobby will be a string, we get intellisense for any string ahead of time
  //hobby.map() throws an error ahead of time!
}
