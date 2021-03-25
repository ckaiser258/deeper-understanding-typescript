//Type inference is used on objects as well, so typescript automatically infers this:
// const person: {
//   name: string;
//   age: number;
// }
//when this is made:
const person = { name: "Colton", age: 28 };

console.log(person.name);
