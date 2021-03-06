//since we are creating an abstract method in this class, we need to have the abstract keyword in front of the class itself as well
//making a class abstract also means we can't instantiate Department itself. it's now only a class that's meant to be inherited from
abstract class Department {
  //static makes fiscalYear accessible without instantiating an instance of Department
  static fiscalYear = 2021;

  // private readonly id: string
  // private name: string;
  //Making employees private means you can't modify the employees array in any way besides using methods defined in this class
  //Making it protected means you can access it but only in other classes that inherit from this class
  protected employees: string[] = [];

  //can also define identifiers within the constructor arguments itself
  //by using readonly, something is never allowed to be changed after it's constructed
  constructor(protected readonly id: string, public name: string) {
    // no longer need these because they're in the constructor
    // this.id = id
    // this.name = n;
    console.log(Department.fiscalYear);
    //this.fiscalYear won't work because 'this' refers to the instance based on the class, but the static property
    //is not available on instances
  }

  //static methods are meant to be accessed directly on the class itself without instantiating it
  //ex: Department.createEmployee
  static createEmployee(name: string) {
    return { name: name };
  }

  //abstract methods are methods that you want to be used by instances of this base class,
  //but that will need their own implementation of it
  //so any instance created from Department will be forced to override the describe() function here
  abstract describe(this: Department): void;
  //abstract methods should not have curly braces and need a return type (void in this case)
  // {
  //passing this: Department makes sure 'this' will always refer to an instance of the Department class or an object with the exact structure
  //prevents bugs because now you can't call this method on anything that doesn't have a name property
  // console.log(`Department: ((${this.id})) ${this.name}`);
  // }

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

  describe() {
    console.log(`IT Department - ID: ${this.id}`);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  //getters are methods that allow us to access private properties outside the class in ways defined
  get mostRecentReport() {
    if (this.lastReport) {
      //getters need to return something
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  //setters allow us to modify private properties outside the class in ways defined
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value.");
    }
    this.addReport(value);
  }

  //creating a private constructor makes it so that you can't create an object based on this class (using the 'new' keyword)
  //can only create a new instance of this class by creating a method inside this class that does so (getInstance() below)
  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  //create a method that makes it so we can only have one instance of this class (since we have a private constructor)
  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("d2", []);
    return this.instance;
  }

  describe() {
    console.log(`Accounting Department - ID: ${this.id}`);
  }

  //Can add methods for inherited classes as well
  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
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

const employee1 = Department.createEmployee("Colton");
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment("d1", ["Colton"]);
it.addEmployee("Colton");
it.addEmployee("Max");

it.describe();
it.printEmployeeInformation();

console.log(it);

//since AccountingDepartment has a private constructor we cannot use the line below
// const accounting = new AccountingDepartment("d2", []);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
//both accounting and accounting2 are the same since only 1 instance can be created
console.log(accounting, accounting2);

//this calls the mostRecent report setter method defined in AccountingDepartment
//notice it does not need to be called with ()
accounting.mostRecentReport = "Year End Report";
accounting.addReport("Something went wrong...");

//this calls the mostRecent report getter method defined in AccountingDepartment
//notice it does not need to be called with ()
console.log(accounting.mostRecentReport);

accounting.addEmployee("Colton");
accounting.addEmployee("Max");

// accounting.printReports();
// accounting.printEmployeeInformation();
accounting.describe();

// const accountingCopy = { name: "DUMMY", describe: accounting.describe };

// accountingCopy.describe();
//Would return 'Department: undefined' if there wasn't a name property and describe() didn't have a this parameter defined as an argument in it's definition
//because the 'this' keyword always points to what called it, and there would be no name variable on accountingCopy
