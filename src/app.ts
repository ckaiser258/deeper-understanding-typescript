//interfaces are used to create a structure for objects
//different from type because interfaces can only be used to describe the structure of an object
//interfaces are clearer because of this for defining object types
//can implement an interface within a class
interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}

let user1: Person;

user1 = {
  name: "Colton",
  age: 30,
  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  },
};

user1.greet("Hi there - I am");
