

// Classes and OOP

// What’s Object-oriented programming OPP

// Work with (real-life) Entities in your Code

// Classes

// Class Department {

//    name : String;

//    constructor ( n : string ) {
//        This.name = n
//    }
// }

// Const accounting = new Department (“Accounting”)

// console.log(accounting);

// Constructor Functions & The “this” Keyword

// Class Department {

//    name : String;

//    constructor ( n : string ) {
//        This.name = n
//    }


//    describe( this : Department) {
//    console.log( Department : “ + this.name)
//    } 

// }

// Const accounting = new Department (“Accounting”)

// console.log(accounting);

// accounting.describe( );

// Const accountingCopy = { name : ‘s’, describe: accounting.describe}

// Private and Public Access

// Private Don't allow to access other method outside of the class 
// Public is the default and you can access outside a class method

// Class Department {

//    name : String;
//    private employees : string [ ] = [ ];

//    constructor ( n : string ) {
//        This.name = n
//    }


//    describe( this : Department) {
//    console.log( Department : “ + this.name)
//    } 

   
// addEmployee(employee: string) {
// this.employees.push(employee)
// }


// printEmployeeInformation( ){
// (console.log(this. employee.length)



// Const accounting = new Department (“Accounting”)

// console.log(accounting);

// accounting.describe( );

// accounting.addEmployee(“max”)

// accounting.printEmployeeInformation( );


// Shorthand initialization

// Class Department {

//    name : String;
//   private Id : String;
//    private employees : string [ ] = [ ];

//    constructor ( private id: string, public name : string ) {
//        This.name = n
//    }


//    describe( this : Department) {
//    console.log( `Department (${this.id}) : ${this.name}`);
//    } 

   
// addEmployee(employee: string) {
// this.employees.push(employee)
// }


// printEmployeeInformation( ){
// (console.log(this. employee.length)



// Const accounting = new Department (“Accounting”)

// console.log(accounting);

// accounting.describe( );

// accounting.addEmployee(“max”)

// accounting.printEmployeeInformation( );

// Readonly Properties

// Id for example shouldn't change after initialization

//   constructor ( private readonly id: string, public name : string ) {
//        This.name = n
//    }

// Inheritance

// Allows you to share some common functionality and yet create more specialized blueprints.

// Super calls the methods of the original class to used it, should be first of everything inside constructor 

// Class ITDepartment extends Department {

//    Admins : string [ ]
//      constructor ( id: string, public admins: string [ ]) {
//      Super ( id, “IT”);
//      This.admins = admins;

// }

// Class AccountingDepartment extends Department {
//      constructor (id: string, private reports: string [ ]) {
//       super( id, “AC”)
// }
//       addReport( text: string) {
// this.reports.push(text);
// }

// Overriding Properties

// To allow access to any class that extends main class 

// Class Department {

//    name : String;
//   private Id : String;
//    protected employees : string [ ] = [ ];










// Getters & Setters

// Property that execute a method  with complex logic

// Get needs return read a property

// Set needs values as arguments, set a property

// When you call it Access like a property by .

// Class 

// Class AccountingDepartment extends Department {
//    private lastReport : string

// Get mostRecentReport ( ){
//      If ( this.lastReport) {
//          Return this.lastReport;
// }
// Throw new Error ( ‘ No report found’)
// }


// console.log(accounting.mostRecetReport)
  

// Set mostRecentReport ( value : string ){
//      If ( ! value) {
//     Throw new Error ( ‘ Please pase a valid value!’)
//      this.addReport(value)
// }


// accounting.mostRecentReport = “ “;
  

// Static Methods & Properties

// access the method by .  you  don't have to call ( ),  would not be able to access in a non static method.
// A method you call directly on a class, not on an object created based on it


// Class Department {
//    Static fiscalYear = 2020;

// Static createEmployee ( name: string) {
// Return { name : name }

// }

// }

// Const employee1 = Department.createEmployee (“Max”)
// Console.log (employee1);


// ABSTRACT

// A class that cant be instantiated but has to be extended

// Enforce that all classes based on some other class share some common method or property but you don't have to provide the concrete value, instead inheritance class has to do that.

// Abstract Class Department {
//    Static fiscalYear = 2020;

// Static createEmployee ( name: string) {
// Return { name : name }

// Abstract describe ( this : Department) : void

// Private Constructor 

// Add private before constructor

// Class Department {
//    Static fiscalYear = 2020;
//    Private static instance : AccountingDepartment

// Static createEmployee ( name: string) {
// Return { name : name }

// Abstract describe ( this : Department) : void

// Static getInstance ( ){
//    If ( AccountDepartment.instance){
// Return this.instance;
// }
//  this.instance = new AccountingDepartment (“d2”, [ ])

// }


// Const accounting = AccountingDepartment.getInstance( );

// Singleton classes

// You only ever have one instance of a singleton class











// First Interface

// Describes the structure of a object, how looks like

// Interface Person {
// Name : string;
// Age : number;

// greet(phrase : string) : void:
// }

// let user1 : Person:


// user1 = {
// name: “Max”,
// age: 30,
// greet( phrase: string) {
// console.log(phrase + “ “ + this.name);
// };

// Interfaces in classes


// Interfaces are a pure TS feature and can't be instantiated.

// An interface can be used as a contract, a class then has to adhere to.
// Any object that should be treated as Greetable has to be object with a name
// and with a greet method.

// It's a bit like working with abstract classes, therefore, the difference being that an interface has no implementation details at all, whereas abstract classes can be a mixture of you have to overwrite these parts and I have concrete implementation parts. That's an important difference between interfaces and abstract classes.



// Interface Greetable {
// Name : string;
// Age : number;

// greet(phrase : string) : void:
// }

// Class Person implements Greetable , Anotherinterface{
// Name : string
// Age = 30;

// constructor ( n; string){
// This.name = n


//  }

// let user1 : Greetable


// user1 = {
// name: “Max”,
// age: 30,
// greet( phrase: string) {
// console.log(phrase + “ “ + this.name);
// };


// User1 = new Person (“Max”)


// ReadOnly


// Interface Greetable {
// readonly name : string;
// Age : number;

// greet(phrase : string) : void:
// }

// Inheritance in Interfaces

// Interface Named {
//   Readonly name: string;
// }

// Interface Greetable extends Named {
//   Greet (phrase : string) : void;
// }

// Interfaces as a Function Types


// Interfaces are used to define the structure of an object. Now, interfaces can also be used to define the structure of a function. So basically as a replacement for the function types you already learned about.


// You can create function types with interfaces.

// Interface AddFn {
// (a : number, b : number) : number;
// }

// Let add : AddFn

// Add = (n1: number, n2: number) => {
//     return n1 + n2
// }


// Optional Parameters & properties and methods

// ? Indicates optional

// Interface Named {
//   Readonly name?: string;
//  outputName? : string

// }

// Class Person implements Greetable , Anotherinterface{
// Name? : string
// Age = 30;

// }

// constructor ( n?; string){
// If (n) {
// This.name = n;
// }
//  }

// where the default value if not set is therefore undefined

// ADVANCED TYPES

// Intersection types

// Intersection types allow us to combine other types.

// Type combinable = string | number:
// Type numeric = number| boolean:

// Type universal = combinable & numeric;



// Objects

// Type Admin = {
//  Name: string:
// }

// Type employee = {
// stardate: Date:
// }:

// Type ElevatedEmployee = Admin & Employee;

// Const e1: ElevatedEmployee = {
//       Name : “Max”
//       startDate : new Date ( )
// };






// Type Guards

// = conditionals about types

// In the end, type guards is just a term that describes the idea or approach  of checking if a certain property  or method exists before you try to use it, or if you can do something with the type before you try to use it.

// With type guards you avoid runtime errors by checking types before you try to do something with the values.

// If ( privileges in employees) {
//   Console.log ( “privileges: “ + emp.privileges);
// }

// If ( loadCargo instanceOf Truck) {
//  Console.log ( “privileges: “ + emp.privileges);
// }
// }

// *instanceOf cant be used with interfaces, only in constructor function

// Discriminated Unions

// Now this is a discriminated union because we have one common property in every object that makes up our union, which describes that object, so that we can use this property that describes this object in our check to have 100% type safety and understand which properties are available for such an object and which properties are not.

// Type Casting

// To say It's that kind of element is, two ways:

// Const userInputElement = <HTMLInputElement> document.getElementById( “user-input”)

// With that, TypeScript knows that whatever we select here after the angled brackets will be of type HTMLInputElement.


// Const userInputElement =document.getElementById( “user-input”)! as HTMLInputElement

// And with that, you can pass this valuable extra information to TypeScript and make code like this work, even though TypeScript on its own would not be able to find out that this here yields an HTMLInputElement.

// And with that, you can pass this valuable extra information to TypeScript and make code like this work, even though TypeScript on its own would not be able to find out
// that this here yields an HTMLInputElement.



// Index properties 

// Interface ErrorContainer {
// [ prop : string ] : string;



// Const errorBag: ErrorContainer = {
//  Email: “ Not a valid email!”,
// Username : “ Must be a capital character”
// };



// Function Overloads

// Which simply means we can have multiple possible ways of calling a function with different parameters, for example, to then do something inside of that function.

// function add ( a: number, b: number) : number;

// Function add( a : string, b: number) : string; 


// Optional chaining

// ?
// Checks whether that exists before it tries.


// Const fetchedData = {
//     Id : “u1”
//    name: “Max”
//     Job: { title: “CEO”, description : “My own company”}

// console.log( fetchedData?.job?.totle);


// Nullish Coalescing

// Null or undefined?

// ?? → Nullish coalescing

// Const userInput = undefined;
// Const stroreData =nuserInput ?? “Default”
