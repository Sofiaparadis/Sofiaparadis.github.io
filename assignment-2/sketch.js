// Greeting!
let name = prompt("Hello, what is your name?");
alert("Welcome " + name + ", it's a pleasure to greet you!");
let age = prompt("May I ask how old you are?");
let yob = 2025 - age;
alert("In that case, you must have been born around " + yob + ", right?:)");

// Numerical input
let numInput = prompt("Please enter an integer value:"); // this value is a String
let num1 = Number(numInput); // convert it to a number

let numInput2 = prompt("Please enter a second integer value:"); // this value is a String
let num2 = Number(numInput2); // convert it to a number

// Do something with it
alert("Let me show you what I can do with the numbers " + num1 + " and " + num2);

// name all math
let sum = num1 + num2;
let diff = num1 - num2;
let prod = num1 * num2;
let quot = num1 / num2;
let mod = num1 % num2;
let max = Math.max(num1, num2);
let min = Math.min(num1, num2);

// now alert
alert(num1 + " + " + num2 + " = " + sum);
alert(num1 + " - " + num2 + " = " + diff);
alert(num1 + " * " + num2 + " = " + prod);
alert(num1 + " / " + num2 + " = " + quot);
alert(num1 + " % " + num2 + " = " + mod);
alert("The max of " + num1 + " and " + num2 + " is " + max);
alert("The min of " + num1 + " and " + num2 + " is " + min);

//now prompt again
let numInput3 = prompt("Please enter a value with a decimal part:"); // this value is a String
let num3 = Number(numInput3); // convert it to a number

//Part 2 of naming
alert("Let me show you what I can do with the number " + num3 + ":");
let negative = -num3;
let sine = Math.sin(num3);
let cosine = Math.cos(num3);
let power = Math.pow(num3, 10);
let sqrt = Math.sqrt(num3);
let rounded = Math.round(num3);
let floor = Math.floor(num3);
let ceiling = Math.ceil(num3);
let absolute = Math.abs(num3);

// now alert again
alert("The negative of " + num3 + " is " + negative);
alert("The sine of " + num3 + " radians is " + sine);
alert("The cosine of " + num3 + " radians is " + cosine);
alert(num3 + " ^10= " + power);
alert("Square root of " + num3 + " = " + sqrt);
alert("Rounded " + num3 + " = " + rounded);
alert("Floor of " + num3 + " = " + floor);
alert("Ceiling of " + num3 + " = " + ceiling);
alert("Absolute value of  " + num3 + " = " + absolute);

alert("Thanks for chatting with me " + name + "! Have a great day!");

// end
