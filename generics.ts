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

// create our own generic as a function
//extends object is adding a constraint which makes that type need to be an object (can be used with any types, including ones you make)
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Colton", hobbies: ["Sports"] }, { age: 28 });
//since we've made merge() a generic function, typescript knows it will return the two specific objects passed into it
//and won't complain about grabbing a property that exists on the new object being returned
// if we did merge(objA: object, objB: object), typescript wouldn't let us access "age" on this because
//all it would know is that two random objects are being returned
console.log(mergedObj.age);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = `Got 1 element.`;
  } else if (element.length > 1) {
    descriptionText = `Got ${element.length} elements.`;
  }
  return [element, descriptionText];
}

console.log(countAndDescribe(["Sports", "Cooking"]));

//can use keyof to tell typescript you will be accessing a property on an object
//this allows us to make sure we're trying to access a property that exists on the object
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return `Value: ${obj[key]}`;
}

extractAndConvert({ name: "Max" }, "name");

// generic classes
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Max");
textStorage.addItem("Manu");
textStorage.removeItem("Max");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// const maxObj = { name: "Max" }
// objStorage.addItem(maxObj);
// objStorage.addItem({ name: "Manu" });
// objStorage.removeItem({ name: "Max" });
// console.log(objStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  // Partial<CourseGoal> tells typescript that courseGoal will eventually be an object of type CourseGoal
  // now every property in courseGoal is optional
  // now we're allowed to initialize courseGoal as an empty object and add to it from there
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  // need 'as CourseGoal' because we need to return a CourseGoal and not a Partial<CourseGoal>
  return courseGoal as CourseGoal;
}

const names2: Readonly<string[]> = ["Colton", "Anna"];
// putting Readonly makes this variable unable to be changed
// so the below won't work
// can use this with objects etc. as well
// names2.push('Manu')
// names2.pop()
