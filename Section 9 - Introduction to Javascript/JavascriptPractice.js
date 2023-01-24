// Save your name to a variable
var myName = "Wicaksa";

// Create a prompt that asks user for name and saves it to variable
var yourName = prompt("What is your namne?");

// Show popup to user with username
alert("Hello " + yourName + "!");

// Practice 1: Switch the values of variables a and b
function test() {
    var a = "3";
    var b = "8";

    var temp = a;
    var a = b;
    var b = temp;

    console.log("a is " + a);
    console.log("b is " + b);
}

// Capitalize the user's first name properly
var userName = prompt("What is your name?");
userName.toLowerCase();
userName.charAt(0).toUpperCase + userName.slice(1);

// Convert dog age to human age
// humanAge = (dogAge - 2) * 4 + 21
var dogAge = prompt("How old is your dog?");
humanAge =  ((dogAge - 2) * 4) + 21;

alert("Your dog is " + humanAge + " years old in human age.");

// Functions
function getMilk() {   
      console.log("leaveHouse");
      console.log("moveRight");
      console.log("moveRight");
      console.log("moveUp");
      console.log("moveUp");
      console.log("moveUp");
      console.log("moveUp");
      console.log("moveRight");
      console.log("moveRight");
      console.log("moveLeft");
      console.log("moveLeft");
      console.log("moveDown");
      console.log("moveDown");
      console.log("moveDown");
      console.log("moveDown");
      console.log("moveLeft");
      console.log("moveLeft");
      console.log("enterHouse");
}

// Calculate BMI
// The first parameter should be the weight and the second should be the height.

/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal 20 when it's rounded to the nearest whole number.

*/

function  bmiCalculator(w, h) {
    return Math.round((w) / (h**2));
}
