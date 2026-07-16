const arr = [0,1,2,3,4];
// array is resizable 
const heroes = ["Shaktiman" , "nagraj"];

// various methods

// unshift  - add at the first
// push - add array at end
// pop - remove last elements
// shift - remove from the first
// join - converts array to string

// slice - doesn't change the original array
// splice - it changes the original array

// console.log(arr.slice(1,4));
const marvelHero = ["thor" , "Ironman" , "spiderman" , "batman"];

const hero = [...heroes , ...marvelHero]; //spread operator

console.log(hero);

const nums = [1,2,3,[4,5,[6,7,8,[9,10]]]];

console.log(nums.flat(Infinity));
console.log(Array.isArray("Saksham"));
console.log(Array.from("Saksham"));
//this method always return an empty array if not clearly define dwhat to do like:
// 
// Array.from({name : "Saksham"});
// here it can't understood that what to make arrya of like from key or from value

const score1 = 126;
const score2 = 156;
const score3 = 176;

console.log(Array.of(score1,score2,score3));









