// TYPESCRIPT

// CORE TYPES

// NUMBER 	NO DIFFERENTIATION INTEGERS OR FLOATS
// STRING  	ALL TEXT VALUES
// BOOLEAN 	TRUE FALSE… NO TRUTHY OR FALSY VALUES
// OBJECT 	ANY SPECIFIC TYPE OF OBJECT ARE POSSIBLE
// ARRAY 		ANY JS ARRAY TYPE CAN BE FLEXIBLE OR STRICT (REGARDING THE ELEMENT TYPE)

// NEW CORE TYPES 

// TUPLE		 FIXED-LENGTH ARRAY
// ENUM 		AUTOMATICALLY ENUMERATED GLOBAL CONSTANT IDENTIFIERS
// ANY		SORE ANY KIND IF VALUE, NO SPECIFIC TYPE ASSIGNMENT

// Properties

// n1: number  n1: string  n1:boolean

// Typeof

// typeof number1 console.log → number  

// Type Casing

// Primitive types are all lowercase (string, number, boolean)

// Variables

// let number1 : number;
// Number1: 5

// Objects

// Object types can be created for nested objects

// {} This is an object
// ; use of semicolon

// Const person : {
// name: string;
// age: number;
// Tags: string [ ]
// } = {
// name : ‘Maximilian’
// Tags: [‘offer’, ‘new’]
//  }

// Array

// Let favoriteActivities: any[];
// favoriteActivities = [“Im string”, 6]



// Tuple 
// const person : {
// Role: [number, string]
// }

// person.role[1] = 10

// Enum 

// Enum {ADMIN = “ADMIN”, READ_ONLY= 2, AUTHOR}

// const person : {
// role : Role.ADMIN
// }

// if(person.role === Role. AUTHOR){ console.lo(“is author”) }



// UNION TYPES 

// Function combine ( input1 : number | string, input2: number | string | result: string) 

// Allow you to be flexible in the parameters,  usually you need to check the type before doing logic.


// LITERAL TYPES

// +Input     converts to number
// I can add as parameter the result type which is expected or which specific result value is expected.

// TYPE ALIASES

// type Combinable = number | string;

// Function combine ( input1 :Combinable, input2: Combinable| result: string) 



// type User = { name: string; age: number };
 
// function greet(user: User) {
//  console.log('Hi, I am ' + user.name);
// }
 
// function isOlder(user: User, checkAge: number) {
//  return checkAge > user.age;
// }


// FUNCTION

// You can use Void or Undefined like a type

// Function add ( n1: number, n2: number) {return n1 + n2}
// Function add ( n1: number) : void {console.log(‘Result” + num) }
// Function add ( n1: number) : undefined {return undefined }

// Function type

// Allows to describe wich type of function specifically we want to use somewhere. Callback? variable?

// Let combineValues: (a: number, b: number) => number

// Callback function

// Function AddAndHandle(n1: number, n2: number, cb: (num: number) => void){
// Const result = n1 + n2;
// cb(result)
// }

// addAndHandle(10,20,(result: number) => {}

// Callback functions can return something, even if the argument on which they're passed does NOT expect a returned value.


// function sendRequest(data: string, cb: (response: any) => void) {
//  // ... sending a request with "data"
//  return cb({data: 'Hi there!'});
// }
 
// sendRequest('Send this!', (response) => {
//  console.log(response);
//  return true;
//  });

// Unknown Type

// If you want to redeclare a variable with a different type, it will be an error.

// Never Type

// Never produces a return value…  (no undefined, no null)

// Watch mode

// Command for continuous compile          tsc app.ts –watch

// Compiling the Entire Project

// Command to initialize project                  tsc -–init 
// The project create tsconfig.json


// Command to compile all files in the project        tsc

// To create automatically the js files based on ts files



// Including & excluding files 

// Go to tsconfig.json and behind everything write 

// },
// “exclude”: [
// ‘myFile.ts”,
// “Node_modules” → would be the default (don't add)
// ]
// “include”: [
// ‘myFile.ts”,
// “Node_modules” 
// ]

// Target compilation

// Which target js wanted to compile the code, change for adapt to browsers

// Lib [ ] which objects we want 

// Allows : true,   use when you don’t wanna use typescript at all

// sourceMap: true  connect js with inputs

// ourDir and rootDir : where the created files will be store

// Example rootDir : ./src    every ts file will be there


// JavaScript

// Npm start

// Let, const are equal

// Functions

// Const add = (a: number, b :number) => a + b;

// Const printOutput: (a: number | string) => void = output => console.log(output)

// If (button) { button.addEventListener( “click”, event => console.log(event));

// Spread operator …

// Const hobbies = [ “sports”, “cooking”]
// Const activeHobbies = [“Hiking”, …hobbies];

// activeHobbies.push(...hobbies);


// Rest operator …

// Allow to merge all incoming values into in array

// Const add = (...numbers : number [ ] => {
//   Return numbers.reduce((curResult, curValue) => {
//      Return curResult + curValue;
// },0);
// };

// Const adddedNumbers = add (5,10,2,3.7)
// Console.log (addedNumbers)


// Destructuring

// Allow to pull out the element in order of the array or object like a copy

// Const [ hobby1, hobby2, … remainingHobbies] = hobbies

// – pull out  this hobbies of  hobbies 

// Const { firstName, age } = person
 
// – pull out  this properties of  object person 



// Const { firstName: userName, age } = person → Overwrote
