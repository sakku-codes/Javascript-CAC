const name = "Saksham";
const repoCount = 2;

// String Interpolation

console.log(`hello the viewers I am ${name} and welcome to my git repo this is my ${repoCount}nd repository to the github and I promise daily consistency to me from now ThankU`);

// how to decalare the String like an object

let gameName = new String("Sakku-codes");

// now we can use all the methods of the string object through . operator

console.log(gameName.charAt(4));
console.log(gameName.concat(" boyyyy"));

console.log(gameName.toUpperCase()); //don't update the original string

let newName = new String("    Saksham    !     ")
 
console.log(newName.trim()); //removes the empty spaces from the start and the end

console.log(newName.slice(5,8));
console.log(newName);

console.log(newName.slice(-(newName.length))); // splice can't print backwards



// console.log(newName.splice(5,8));
// console.log(newName); //splice changes the og string but not the slice and it doesn't work in the string it works for the array only






