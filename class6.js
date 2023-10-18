/** Example 1 - function problem with no return
 * Initialise the variable number to the value of 6
 * 
 * Setup a function that is called info and has the parameter digit.
 * Inside the if statement add a if statement that checks to see 
 * if digit is equal to 3.
 * If it is then console log out the sentence: You guessed right
 * Else then console log out: You did not guess correctly
 * Write a functional comment.
 * 
 * Call the function info and pass the variable number in the brackets.
 * 
 * Write a single line comment as to what will be displayed.
 */

var number = 6;

/** Let other developers know what the function is exactly doing
 * @desc Seeing if the number guess is right
 * @param {*} digit a number guessed
 */
function info(digit) {
    if(digit == 3) {
      console.log("You guessed right"); // no, skip
    } else { 
      console.log("You did not guess correctly");
    }
}
info(number); // pass this number to thye function "info", function will take the number as the variable "digit"





/** Example 2 - function problem with no return
 * initialise the variable number to a randomly 
 * generated whole number less than the number 20
 * 
 * setup a function called random number that takes in 
 * one parameter called digit 
 * in the function console log out the sentence (backticks);
 * The number that was generated was the number_digit_.
 * add a functional comment.
 * 
 * call the function random number that passes the 
 * variable number
 */
var number = Math.floor(Math.random() * 20);

/**
 * @desc Tell us what random number was given
 * @param {*} digit a number
 */

function randomNumber(digit) {
    console.log(`The number that was generated was number ${digit}.`);
}
randomNumber(number);





/** Example 3
 * setup a function called is valid number that has no parameter
 * In the function
 * Initialise the variable check to the value of abc123
 * 
 * Then in the function still write a if/else statement
 * The if statement will check if the value in check is not a number.
 * If it is then console log out: _check_ is not a number
 * 
 * Else then console log out: _check_is a valid number
 * Add functional comment.
 * 
 * Call the function is valid number
 * Write a single line comment as to what will be outputted
 */

/** Calling a function without parameter
 * @desc checking to see if a value is a number or not
 */
function isValidNumber() {
    var check = "abc123";

    if(isNaN(check)) { // NaN (boolean) is to check if it is not a number
        console.log(`${check} is not a number.`);
    } else {
        console.log(`${check} is a valid number.`);
    }
}
isValidNumber();





// Example: Getting length of a string in JavaScript
var sentence = "welcome!";

console.log(sentence.length); // there are 8 characters

var sentenceLength = sentence.length; // actually tell you how many characters you have

if(sentenceLength > 10) { //if the number is less, it only shows the number; if it is more than, it will show "Message aproved"
    console.log("Message Approved!");
}