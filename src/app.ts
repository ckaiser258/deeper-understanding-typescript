class Department {
  // private readonly id: string
  // private name: string;
  //Making employees private means you can't modify the employees array in any way besides using methods defined in this class
  private employees: string[] = [];

  //can also define identifiers within the constructor arguments itself
  //by using readonly, something is never allowed to be changed after it's constructed
  constructor(private readonly id: string, public name: string) {
    // no longer need these because they're in the constructor
    // this.id = id
    // this.name = n;
  }

  describe(this: Department) {
    //passing this: Department makes sure 'this' will always refer to an instance of the Department class or an object with the exact structure
    //prevents bugs because now you can't call this method on anything that doesn't have a name property
    console.log(`Department: ((${this.id})) ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("d1", "Accounting");
accounting.addEmployee("Colton");
accounting.addEmployee("Max");

accounting.describe();
accounting.printEmployeeInformation();

// const accountingCopy = { name: "DUMMY", describe: accounting.describe };

// accountingCopy.describe();
//Would return 'Department: undefined' if there wasn't a name property and describe() didn't have a this parameter defined as an argument in it's definition
//because the 'this' keyword always points to what called it, and there would be no name variable on accountingCopy
