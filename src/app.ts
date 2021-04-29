//interfaces are used to create a structure for objects
//different from type because interfaces can only be used to describe the structure of an object
//interfaces are clearer because of this for defining object types
//can implement an interface within a class
//interfaces are often used to share structure amongst different classes
//different from abstract classes because abstract classes have concrete implementation and overriding
interface Greetable {
  name: string;

  greet(phrase: string): void;
}

//can implement multiple interfaces (separated by comma) as opposed to extends where you can only inherit one
//can create more methods and properties within this class (and even use it as extends) but now it needs to include the Greetable structure
class Person implements Greetable {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  }
}

//can also say user1: Person. but this works too because Person is based on the Greetable interface
let user1: Greetable;

user1 = new Person("Colton");

user1.greet("Hi there - I am");
console.log(user1);
