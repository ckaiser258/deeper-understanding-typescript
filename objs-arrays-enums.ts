//Type inference is used on objects as well, so typescript automatically infers this:
// const person: {
//   name: string;
//   age: number;
// }
//when this is made:
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; //this is a tuple. typescript knows this property needs to have exactly this structure
// } = {
//   name: "Colton",
//   age: 28,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };

//Below gives ADMIN a value of 5, READ_ONLY a value of 6, and AUTHOR a value of 7
//can customize each as well with whatever you want (even strings etc.)
//useful when you want constants assigned that might be hard to remember down the road
enum Role {
  ADMIN = 5,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Colton",
  age: 28,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

// person.role.push("admin"); //this does NOT cause an error if role is a tuple, an unfortunate problem in typescript
//person.role[1] = 10 //error

//person.role = [0, 'admin', 'user']
//THIS causes an error however (which we want) whereas pushing does not

//remember, typescript can infer that this is of type string[] just from assigning it to an array of strings
//explicitly telling it the type like below is used often for when the variable might be changed
let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase()); //since typescript knows hobby will be a string, we get intellisense for any string ahead of time
  //hobby.map() throws an error ahead of time!
}

if (person.role === Role.ADMIN) {
  console.log("is an admin");
}
