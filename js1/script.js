// Printing hello world
// Adarsh, Samarjeet
// Outputting Text in console.
// 1.
console.log("Ayush Bansal");
// It is a function in js to display the text in the browser's console

// 2. Concatenating Strings

let firstName = "Frontend";
let lastName = "developer";

console.log(firstName + " " + lastName);
//firstName
//Frontend

//3.Printing multiple things/variables using the same console
console.log(firstName, lastName, "Ayush");

// 4. Mathematical Caluculations (part 1)
console.log(5 * 5);

//5. Mathematical Calculations (part 2)
let radius = 5;
let area = Math.PI * radius * radius;
console.log(area);

// 6. Boolean Expresssions
console.log(5 > 10);

// Data types
// 1. String

let fname = "Ayush Bansal";
console.log(typeof fname);

// 2. Number
let a = 10;
let b = -10;
let c = 10.1234;
console.log(typeof a);

// 3. Boolean
let isStudent = true;
console.log(typeof isStudent);

// 4. Null
let address = null;
// This variable stores a null value, indicating the absence
// of a value. It is commonly used to represent an intentionally
// empty value
console.log(address);

// 5. Undefined
let phoneNumber;
console.log(phoneNumber);
// This variable is declared but not assigned a value,
// resulting in an undefined data type, as it represents the
// absence of an assigned value.

// 6. Object
// An object datatype the represent a collection
//of key value pairs.
let person = {
  fullname: "Ayush Bansal",
  id: 5432,
  age: 22,
  isStudent: false,
  address: null,
};

console.log(person);

// 7. Array
let fruits = ["Apple", "Banana", "orange", 5];
// collection of similar type of data (only for Java)
console.log(fruits);
//JavaScript: represents an ordered collection of elements.

// 8. Date Object
let currentDate = new Date();
console.log(currentDate);

// 9. bigint
let largeNumber = 13245678908765432456789765432n;

// 10. Symbol

// Arithmetic Operators
// 1. Addition
let sum = 5 + 4;
console.log(sum);

// 2. Subtraction
let diff = 10 - 1;
console.log(diff);

// 3. Multiplication
let aa = 5 * 3;
console.log(aa);

// 4. Division
let aaa = 10 / 3;
console.log(aaa);
console.log(Math.round(aaa));

// Modulo (Remainder)
let aaaa = 10 % 3;
console.log(aaaa);

// Increment(++)
let num = 10;
// console.log(++num);
// Post increment and pre increment
// Post increment(num++): We first print it and and then increment it
// Pre increment(++num): We first increment and then print it

//Decrement (--)
console.log(--num);
console.log(num);

// Exponentiation(**)
let res = 5 ** 2;
console.log(res);

//Unary Plus
let num1 = +"abc";
console.log("Unary:", num1);

console.log("5" + "5");
console.log(5 + 5);
console.log(5 + "5");
console.log(5 + +"5");

// Unary Negation (-)

let num2 = 12;
let num3 = -num2;
console.log(num3);

// Conditionals

// If statement

let x = 1000;
if (x > 100) {
  console.log("x is greater than 100");
}

// If else statement
let age = 10;
if (age > 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a child");
}

// If-else If-else

let age1 = 5;

if (age1 > 60) {
  console.log("You are a senior citizen");
} else if (age1 > 18) {
  console.log("You are a young adult");
} else {
  console.log("You are a child.");
}

// Ternary Operator
let isRaining = true;
let weather = 5 > 2 ? "Take an Umbrella" : "Enjoy the weather";
// if(isRaining){
//     weather="Take an Umbrella";
// }else{
//     weather="Enjoy the weather";
// }
console.log(weather);

//Switch Statment
let day = 10;
let dayname;
switch (day) {
  case 1:
    dayname = "Monday";
    break;
  case 2:
    dayname = "Tuesday";
    break;
  case 3:
    dayname = "Wednesday";
    break;
  case 4:
    dayname = "Thursday";
    break;
  case 5:
    dayname = "Friday";
    break;
  default:
    dayname = "Unknown input";
}

console.log(dayname);

// Nested If statement

let ab = 5;
if (ab > 0) {
  if (ab % 2 == 0) {
    console.log("ab is a positive even number");
  } else {
    console.log("ab is a positive odd number");
  }
}

// Logical AND Operator (&&)
// if(condition1 && condition2 && condition3 && condition4){
// code
// }
let Myage = 25;
let hasLicense = false;
if (Myage > 18 && hasLicense) {
  console.log("You can drive.");
}

// Logical OR Operator (||) (pipe symbol)

let color = "blue";
if (color == "blue" || color == "Red") {
  console.log("the color is eithe blue or red");
}

// Nullish Coalescing Operator (??)
let username = null;
// absence of a value by the dev
let displayName = username ?? "Anonymous User";
console.log(displayName);



