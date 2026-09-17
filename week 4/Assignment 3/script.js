"use strict";

//1. Type conversion
console.log("1. Type conversion")

//create a variable that stores a number as a string.
const numberString = "13";

//convert it to a number using Number()
const convertedNum = Number(numberString)

//Log the original value and its data type
console.log("Original value: ", numberString);
console.log("Original.type: ", typeof numberString);

//log the converted value and its data type
console.log("Converted value: ", convertedNum);
console.log("Converted type: ", typeof convertedNum);

//add 10 to the converted number and log the result
console.log("Added 10: ", convertedNum + 10);

//what I understood: Number() converts a string containing a number into a number
//after conversion, I can use the value for mathematical calculations

//2. Type Coercion
console.log("\n2. Type coercion");

//create one string variable contiaining a number
const stringNum = "6";

//create one number variable
const regularNum = 4;

//use them with + - *
//then log the actual results and their data types
console.log("Addition: ", stringNum + regularNum);
console.log("Addition type: ", typeof (stringNum + regularNum));

console.log("Subtraction: ", stringNum - regularNum);
console.log("Subtraction type: ", typeof(stringNum - regularNum));

console.log("Multiplication: ", stringNum * regularNum);
console.log("Multiplication type: ", typeof(stringNum * regularNum));

//What I understood: JavaScript uses type coercion to convert values automatically
//The + operator joins strings, while - and * convert numeric stings into numbers.

//3. True or False Values
console.log("\n3. True and false Value");

//create variables containing, a non empty string, 
//an empty string, 0, a positive number, null, undefined
const nonEmptyString = "Hello";
const emptyString = "";
const zero = 0;
const posNum = 12;
const emptyValue = null;
const undefinedValue = undefined;

//use Boolean() to check whether each value become true or false
//log the results
console.log("Non-empty string: ", Boolean(nonEmptyString));
console.log("Empty string: ", Boolean(emptyString));
console.log("Zero: ", Boolean(zero));
console.log("Positive Number: ", Boolean(posNum));
console.log("Null: : ", Boolean(emptyValue));
console.log("Undefined: ", Boolean(undefinedValue));

//What I understand: Boolean() converts a value into true or false.
//non-empty string and positive number are true, while empty strings,
//zero, null, and undefined are false

//4. if/else
console.log("\n4. if/else");

//create an age variable
//if the age is 18 or older, display "You are eligible"
//otherwise display "You are not eligible yet."
const firstAge = 23;
const secondAge = 17;

if (firstAge >= 18){
    console.log("Age: ", firstAge);
    console.log("You are eligible.");
}
else{
    console.log("Age: ", firstAge);
    console.log("You are not eligible yet.");
}

if (secondAge >= 18){
    console.log("Age: ", secondAge);
    console.log("You are eligible.");
}
else{
    console.log("Age: ", secondAge);
    console.log("You are not eligible yet.");
}

//what I understood: The if/else statement checks whether a condition is true or false.
// if the age is 18 or older, the if block runs; otherwise, the else block runs.

//5. else if
console.log("\n5. else if");

//create a grade checker
//log the score and grade
const firstScore = 93;
const secondScore = 81;
const thirdScore = 77;

function checkGrade (score){
    let grade;

    if(score >= 90 && score <= 100){
        grade = "A";
    } else if (score >= 80){
        grade = "B";
    } else if (score >= 70){
        grade = "C";
    } else if (score >= 60){
        grade = "D";
    } else {
        grade = "F";
    }

    console.log("Score: ", score, "Grade: ", grade);
}

checkGrade(firstScore);
checkGrade(secondScore);
checkGrade(thirdScore);

//what I understood: the else if statement checks multiple conditions in order
//once a condition is true, JavaScript runs that block and skips the remaining ones

//6. switch
console.log("\n6. Switch");

//create a campus service program
//create a variable named service and use one of these values
const firstService = "library";
const secondService = "technology";
const unknownService = "cafeteria";

//use a switch statement to display a message for each service
//also use a break, include a default case
function showService(service){
    switch(service){
        case "library":
            console.log("Library: Find books and study materials.");
            break;
        
        case "tutoring":
            console.log("Tutoring: Get help with your classes.");
            break;
        
        case "parking":
            console.log("Parking: Find campus parking information."); 
            break;
        
        case "technology":
            console.log("technology: Get help with computers and software.");
            break;

        default:
            console.log("Unknown service.");    
    }
}

showService(firstService);
showService(secondService);
showService(unknownService);

//what I understood: a switch statement compares a value with different cases
//the break statement stops a matching case from continuing, and default runs
//when no case matches

//7. Ternary operator
console.log("\n7. Ternary Operator");

//create a variable named isLoggedIn
let isLoggedIn = true;

//use a ternary operator to display
console.log(
    isLoggedIn ? "Welcome back!" : "Please log in."
);

isLoggedIn = false;

console.log(
    isLoggedIn ? "Welcome back!" : "Please log in."
);

//what I understood: the ternary operator is a shorter way to write a simple if/else statement
//it checks a condition and returns one value if true or another if false

//8. Student Status Program
console.log("\n8. Student Status Program")

//create a variables for: student name, age, score, major, enrollment status
const studentName = "Phallyda Ouch"
const studentAge = 21;
const studentScore = 87;
const studentMajor = "Computer Science";
const isEnrolled = true;

//then check whether the student is 18 or older
let isAdult = studentAge >= 18;
let adultStatus = isAdult ? "Yes" : "No";

//use if/else to determine the grade
let studentGrade;
if (studentScore >= 90 && studentGrade <= 100){
    studentGrade = "A";
} else if (studentScore >= 80){
    studentGrade = "B";
} else if (studentScore >= 70){
    studentGrade = "C";
} else if (studentGrade >= 60){
    studentGrade = "D";
} else {
    studentGrade = "F";
}

//use a ternary operator to display "Enrolled" or "Not Enrolled"
let enrollmentStatus = isEnrolled ? "Enrolled" : "Not Enrolled";

//use a template literal to display a final summary
console.log(`
    Student: ${studentName}
    Age: ${studentAge}
    Major: ${studentMajor}
    Adult: ${adultStatus}
    Score: ${studentScore}
    Grade: ${studentGrade}
    Status: ${enrollmentStatus}`);

//what I understood: I can comnine variables, if/else, and the ternary operator
//to determine a student's grade, age status, and enrollment status as well.
//A templete literal makes it easier to display multiple values in one summary.

//9. Strict Mode
console.log("\n9. Strict Mode");
console.log("Strict mode is enabled.");

//what I understood: strict mode makes JavaScript follow stricter rules and helps catch some errors
//it prevents certain mistakes, such as creating variables without let, const, or var.
