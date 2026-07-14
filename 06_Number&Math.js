// there are two methods to declare the Number : 

const score = 400;
console.log(score);

const balance = new Number(2230.474); //like object declaration : can use various methods defined.
console.log(balance); //this is specially shown as number in the output,

// let us try the methods defined for the number object

console.log(balance.toExponential());
console.log(balance.toString().length); //now we can use all the methods defined for the strinfs with just a dot operator

console.log(balance.toFixed(1)); //givses the number of the decimal places to the number provided in the method after rounding off the value

console.log(balance.toPrecision(2)); //gives the value to the precision upto what we've provided in the method

console.log(balance.toString().endsWith(4)); //boolean value based on what we've provided in the method matches the value or not

const hundred = 10000000;

console.log(hundred.toLocaleString('en-IN'));

// **********************************************MATH************************************************************************

console.log(Math.abs(-4098)); //negative values become positive

console.log(Math.floor(49.99));

console.log(Math.ceil(49.99));

console.log((Math.random()*10) + 1); //gives random value always 0-1 values are there

const min = 10;
const max = 20;

// generic syntax to generate the values between the number 

console.log(Math.floor((Math.random()*(max-min)) + 1) + min);



