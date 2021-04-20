class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    //passing this: Department makes sure 'this' will always refer to an instance of the Department class
    //prevents bugs because now you can't call this method on anything that doesn't have a name property
    console.log(`Department: ${this.name}`);
  }
}

const accounting = new Department("Accounting");

console.log(accounting);

accounting.describe();

const accountingCopy = { name: "DUMMY", describe: accounting.describe };

accountingCopy.describe();
//Would return 'Department: undefined' if there wasn't a name property and describe() didn't have a this parameter defined as an argument in it's definition
//because the 'this' keyword always points to what called it, and there would be no name variable on accountingCopy
