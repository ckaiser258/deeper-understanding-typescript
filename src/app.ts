type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

//creating an intersection type that must have the properties of both Admin and Employee
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;
//in union types, the types they have in common are the intersection type
//ex: Universal is of type number because it is the only thing the two have in common, but could be more
type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
  //type guarding:
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  //type guarding with 'in':
  console.log(`Name: ${emp.name}`);
  if ("privileges" in emp) {
    console.log(`Privileges: ${emp.privileges}`);
  }
  if ("startDate" in emp) {
    console.log(`Start Date: ${emp.startDate}`);
  }
}

printEmployeeInformation({ name: "Manu", startDate: new Date() });

class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }

  loadCargo(amount: number) {
    console.log(`Loading cargo ... ${amount}`);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  //type guarding with instanceof
  //this only works with classes because javascript supports this. it doesn't support interfaces (they aren't actually compiled)
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

//a discriminated union is a common property across every object that makes up a union which describes the object
interface Bird {
  //setting a 'type' here (this property can be named anything, but is usually 'type' or 'kind') allows us to use discriminated union
  //for type guarding
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

//both Bird and Horse have a type property
type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    //we get autocomplete here
    case "bird":
      speed = animal.flyingSpeed;
      break;
    //and here since typescript knows there are limited options for 'type'
    case "horse":
      speed = animal.runningSpeed;
  }
  console.log(`Moving at speed: ${speed}`);
}

moveAnimal({ type: "bird", flyingSpeed: 10 });

//typescript doesn't read specific html elements, so we need to tell it the exact type
//HTMLInputElement is available because we're including 'dom' in the lib in tsconfig
// const userInputElement = <HTMLInputElement>document.getElementById("user-input");
//typecasting with angle brackets like this can class with React if you're using that, so below might be a better option
// const userInputElement = document.getElementById(
//   "user-input"
// ) as HTMLInputElement;

// userInputElement.value = "Hi there!";

const userInputElement = document.getElementById("user-input");

//can also do below if you're not sure element will exist
if (userInputElement) {
  (userInputElement as HTMLInputElement).value = "Hi there!";
}
