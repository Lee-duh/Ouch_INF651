//1 Varibles and Data types
console.log("1. Variables and Data Types.")

const nickname="Lyda";
const age = 21;
const isStudent = true;

console.log("Name: ", nickname, "Type: ", typeof nickname );
console.log("Age: ", age, "Type: ", typeof age);
console.log("Is Student: ", isStudent, "Type: ", typeof isStudent);

//2 Basic Arithmetic Operations
console.log("\n2. Basic Arithmetic Operations.")
const num1 = 20;
const num2 = 5;

console.log("Addition: ", num1 + num2);
console.log("Subtraction: ", num1 - num2);
console.log("Multiplication: ", num1 * num2);
console.log("Division: ", num1 / num2);

//3 Working with strings
console.log("\n3. Working with Strings.")
const sentence = "Hello World."

console.log("String: ", sentence);
console.log("Length: ", sentence.length);
console.log("First character: ", sentence[0]);
console.log("Last character: ", sentence[sentence.length -1]);

//4 Math Object
console.log("\n4. Math Object.");
const num3 = -10;

console.log("Number: ", num3);
console.log("Square root of absolute value: ", Math.sqrt(Math.abs(num3)));
console.log("Number squared: ", num3 * num3);
console.log("Absolute value: ", Math.abs(num3));

//5 Boolean logic and comparison operators
console.log("\n5. Boolean logic and comparison operators.");

const firstNum = 10;
const secondNum = 20;

console.log("Firat number: ", firstNum);
console.log("Second number: ", secondNum);
console.log("First number is greater: ", firstNum > secondNum);
console.log("First number is less: ", firstNum < secondNum);
console.log("First number is equal: ", firstNum === secondNum);

//6 Logical operators
console.log("\n6. Logical operators.");

const value1 = true;
const value2 = false;

console.log("AND (&&): ", value1 && value2);
console.log("OR (||): ", value1 || value2);
console.log("NOT (!value1): ", !value1);
console.log("NOT (!value2): ", !value2);

//7 using template literals
console.log("\n7. Using template literals.")

const firstName = "Phallyda"
const lastName = "Ouch";

console.log(`Hello, My name is ${firstName} ${lastName}. I'm ${age} years old.`);

