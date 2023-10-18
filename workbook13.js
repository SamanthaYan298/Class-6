// 13 Functions
// 13-1-0 Functional Commenting
// 13-1-1
var chips = chipBox("Doritos",5,"Pringles",4);
var calculation = 0;

/**
 * @desc calculate the total numbers of doritos and pringles 
 * @param {*} optionOne is Doritos
 * @param {*} numberOfOptionOne is the number of Dorito
 * @param {*} optionTwo is Pringles
 * @param {*} numberOfOptionTwo is the number of Pringles
 * @returns the types of chips and total numbers of each types of chips
 */
function chipBox(optionOne, numberOfOptionOne, optionTwo, numberOfOptionTwo) {
    calculation = numberOfOptionOne + numberOfOptionTwo;

    return "I have " + numberOfOptionOne +" " + optionOne + " and " + numberOfOptionTwo + " " + optionTwo + "." + "This gives me a total of " + calculation + " chips.";
}

console.log(chips);

// 13-2-0 Functions with returns
// 13-2-1 
var x = myFunction;

/**
 * @desc the multiplied function
 * @param {*} a is the first number
 * @param {*} b is the second number
 * @returns the multiplied value of the first number and second number
 */
function myFunction(a,b) {
    return a * b;
}

console.log(x); // ab

// 13-2-2
var shopping = myShoppingList(12,4);

/**
 * @desc the multiplied function
 * @param {*} quantity is the first value
 * @param {*} price is the second value
 * @returns the total cost of shopping
 */
function myShoppingList(quantity,price) {
    return quantity * price;
}

console.log(shopping); // 48

// 13-2-3
var x = myFunction(5,6);
var d = 5;
var z = addingFive(x,d);

/**
 * @desc the multiplied function
 * @param {*} a is the first number
 * @param {*} b is the second number
 * @returns the reslut of a multiplied by b
 */
function myFunction(a,b) {
    return a * b;
}

/**
 * @desc adding two values
 * @param {*} g is the first value
 * @param {*} h is the second value
 * @returns the result of adding two values
 */
function addingFive(g,h) {
    return g + h;
}

console.log(x); // 30
console.log(z); // 35

// 13-2-5
/**
 * @desc the multiplied function
 * @param {*} a is the first number
 * @param {*} b is the second number
 * @returns the reslut of a multiplied by b
 */
function myFunction(a,b) {
    return a * b;
}

/**
 * @desc adding two values
 * @param {*} g is the first value
 * @param {*} h is the second value
 * @returns the result of adding two values
 */
function addingFive(g,h) {
    return g + h;
}

var x = myFunction(5,6);
var d = 5;
var z = addingFive(x,d);

console.log(x); // 30
console.log(z); // 35

// 13-2-6
/**
 * @desc provide an introduction of one person
 * @param {*} name is the name of the person
 * @param {*} age is the age of the person
 * @returns the sentence of a personal introduction
 */
function sentenceFunction(name,age) {
    return "My name is " + name + " and I am " + age + " years old.";
};

var personOne = sentenceFunction("George Smith",25);

console.log(personOne);

// 13-2-7
var firstName = nameFix("george");
var personOne = sentenceFunction(firstName,25);

/**
 * @desc the introduction of one person
 * @param {*} firstName is the first name of the perosn
 * @param {*} age how old is the person
 * @returns the personal introduction
 */
function sentenceFunction(firstName,age) {
    return "My name is " + firstName + " and I am " + age + " years old.";
}

/**
 * @desc make the first letter of the value as capital
 * @param {*} firstName is the first name of the person
 * @returns capitalize the first letter
 */
function nameFix(firstName) {
    return firstName[0].toUpperCase() + firstName.substring(1);
}

console.log(personOne);

// 13-3-0 Functions without returns
// 13-3-1
var number = 10;
var sentence = "";

/**
 * @desc try to guess if digit is equal to 10
 * @param {*} digit is the number need to be guessed
 */
function info(digit) {
    if(digit == 10){
    console.log("You guessed right");
} else { 
    console.log("You did not guess correctly");
}
}

info(number);

// 13-3-2
var hobby = "gardening";
var city = "vancouver";

/**
 * @desc check which activity the person like 
 * @param {*} activity is the hobby of the person
 * @param {*} location where the activity is located
 */
function place(activity, location) {
    if (activity == "gardening") {
        console.log("I live in " + location[0].toUpperCase() + location.slice(1) + " and I like " + activity + ".");
    } else {
        console.log("Not the right hobby.")
    }
}

place(hobby,city);

// 13-3-3
var firstName = "Steven";
var age = 14;
var country = "Canada";

var MINIMUM_AGE = 16;
var LAW_IN_COUNTRY = "Canada";

/**
 * @desc check whether Steven can get his licence or not
 * @param {*} name is the person's name
 * @param {*} year how old is the person
 * @param {*} location where is the person living now
 */
function drive(name,year,location) {
    if(year >= MINIMUM_AGE && location == LAW_IN_COUNTRY) {
        console.log(name + " you are able to get your licence.");
    } else {
        console.log(name + " you are too young.");
    }
}

drive(firstName,age,country);

// 13-3-4
function findGrade(name,marks) {
    if(marks >= 85 && marks<= 100) {
        console.log(`${name} you got an A.`);
    } else if(marks >= 70 && marks <= 85) {
        console.log(`${name} you got an B.`);
    } else if(marks >= 50 && marks <= 70) {
        console.log(`${name} you got an C.`);
    } else if(marks >= 0 && marks <= 50) {
        console.log(`${name} you have failed.`);
    } else {
        console.log(`Invalid mark of ${marks}.`);
    }
}

findGrade("Sarah", 91); // Sarah you got an A.
findGrade("George", 85); // George you got an A.
findGrade("Sam", 73); // Sam you got an B.
findGrade("Emily", 53); // Emily you got an C.
findGrade("Tom", 20); // Tom you have failed.
findGrade("Wilson", 120); // Invalid mark of 120.

// 13-3-5
/**
 * @desc check which operation passed
 * @param {*} num1 is the first number
 * @param {*} num2 is the second number
 * @param {*} operator the types of the operation
 */
function evaluateNumbers(num1,num2,operator) {
    if (operator == "add") {
        console.log("Sum " + num1 + " and " + num2 + " is.");
    } else if (operator == "subtract") {
        console.log("Difference of " + num1 + " and " + num2 + " is.");
    } else if (operator == "multiply") {
        console.log("Product of " + num1 + " and " + num2 + " is.");
    } else if (operator == "divide") {
        console.log("Division of " + num1 + " and " + num2 + " is.");
    } else if (operator == "modulus") {
        console.log("Modulus of " + num1 + " and " + num2 + " is.");
    } else {
        console.log(operator + " is a invalid operation.");
    }
} 

evaluateNumbers(15,10,"add"); // Sum 15 and 10 is.
evaluateNumbers(20,8,"subtract"); // Difference of 20 and 8 is.
evaluateNumbers(12,4,"multiply"); // Product of 12 and 4 is.
evaluateNumbers(28,7,"divide"); // Division of 28 and 7 is.
evaluateNumbers(22,3,"modulus"); // Modulus of 22 and 3 is.
evaluateNumbers(31,3,"square"); // square is a invalid operation.