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
