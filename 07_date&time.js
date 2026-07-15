//Date with Javascript

//the start of the date is from 01 january 1970 for the javascript as defined

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());


// let mynewDate = new Date(2026, 0, 15);
let mynewDate = new Date("2203-01-15");
console.log(mynewDate.toDateString());

console.log(mynewDate.toLocaleString());

// how to calculate the time difference between any time defines by you and the time now 

let nowTime = Date.now();//this time is in miliseconds now to make in seconds or hours we have to divide it but use math.floor function to prevent decimal number

console.log(mynewDate.getTime()-nowTime);


console.log(`Now time in hours is ${Math.floor(nowTime/3600000)} from 1-01-1970`);




