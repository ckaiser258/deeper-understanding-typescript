class Department {
  // private readonly id: string
  // private name: string;
  //Making employees private means you can't modify the employees array in any way besides using methods defined in this class
  //Making it protected means you can access it but only in other classes that inherit from this class
  protected employees: string[] = [];

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

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    //any time you add a constructor to a class that inherits from another class, you need to add super()
    //super calls the constructor of the base class (Department), so requires any arguments in that constructor if they exist
    super(id, "IT");
    //'this' can only be used after calling super()
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }
  //Can add methods for inherited classes as well
  addReport(text: string) {
    this.reports.push(text);
  }
  //Can override methods and properties defined in the class being inherited from
  addEmployee(name: string) {
    if (name === "Colton") {
      return;
    }
    this.employees.push(name);
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment("d1", ["Colton"]);
it.addEmployee("Colton");
it.addEmployee("Max");

it.describe();
it.printEmployeeInformation();

console.log(it);

const accounting = new AccountingDepartment("d2", []);

accounting.addReport("Something went wrong...");

accounting.addEmployee("Colton");
accounting.addEmployee("Max");

accounting.printReports();
accounting.printEmployeeInformation();

// const accountingCopy = { name: "DUMMY", describe: accounting.describe };

// accountingCopy.describe();
//Would return 'Department: undefined' if there wasn't a name property and describe() didn't have a this parameter defined as an argument in it's definition
//because the 'this' keyword always points to what called it, and there would be no name variable on accountingCopy
