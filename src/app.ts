//interfaces are used to create a structure for objects or functions
//different from type because interfaces can only be used to describe the structure of an object
//interfaces are clearer because of this for defining object types
//can implement an interface within a class
//interfaces are often used to share structure amongst different classes
//different from abstract classes because abstract classes have concrete implementation and overriding

interface Named {
  //readonly makes it so this property can only be set once. cannot be changed after the object has been initialized
  readonly name?: string;
  //adding a '?' makes this property optional
  outputName?: string;
}
//interfaces can also extend others
//now anything based on the Greetable interface also needs a name property
//can also extend multiple interfaces by separating them with a comma
interface Greetable extends Named {
  //this can also be used on types
  greet(phrase: string): void;
}

//can implement multiple interfaces (separated by comma) as opposed to extends where you can only inherit one
//can create more methods and properties within this class (and even use it as extends) but now it needs to include the Greetable structure
class Person implements Greetable {
  //name is automatically readonly since Person is implementing Greetable
  name?: string;
  age = 30;

  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(`${phrase} ${this.name}`);
    } else {
      console.log("Hi!");
    }
  }
}

//can create interfaces for functions as well
interface Addfn {
  (a: number, b: number): number;
}

let add: Addfn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

//can also say user1: Person. but this works too because Person is based on the Greetable interface
let user1: Greetable;
//now we know that whatever is in user1 has to have at least what is in Greetable

//this would work as new Person() as well since name is an optional property
user1 = new Person("Colton");
// user1.name = 'Manu' //this will not work because name is a readonly property as defined in Greetable. So it can't be changed after initialized

user1.greet("Hi there - I am");
console.log(user1);
