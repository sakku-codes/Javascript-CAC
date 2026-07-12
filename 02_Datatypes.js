// Datatypes are of two types : 

// Primitives :

let name = "Saksham"; //String
let rollno = 99; //number
let isStudent = true; //boolean
let univ_rollno = 2300271530099n; //bigint- chhotu n is important for the bigint
let job = null; //null - no value
let company_name = undefined; //undefined - no value assigned till
let mySym = Symbol("key");


// typeof is used to print the type of the variable


console.log(typeof(name));
console.log(typeof(rollno));
console.log(typeof(isStudent));
console.log(typeof(univ_rollno));
console.log(typeof(job));
console.log(typeof(company_name));
console.log(typeof(mySym));


// non - primitives(reference types) :


// Array : 

const marvel_Avengers = ["Spiderman", "Thor", "hulk", "captain_America", "flash"];

console.log(typeof(marvel_Avengers));
console.log(marvel_Avengers);

// object :


let myObj = {
    name : "Saksham Garg",
    age  : 22,
    college_name : "AKGEC",
    companyName : "Google",
    "working-hours" : 7
};

console.log(myObj["college_name"]); //[]format
console.log(myObj["working-hours"]); // always used in [""] this format due to its declaration
console.log(myObj.college_name); //. format

// function :

let Greet_Function = function(){
    console.log("Hello to the Viewers, this is my git repository that is stroring all my javascript codes forever.");
    
}

Greet_Function();

// Stack & Heap storage Story: 

// the primitive datatypes are always get stored in the stack memory that means that always a copy of them is provided so the any change 
// made in them is always in the copy not in the original value.

let my_name = name;
my_name = "Saksham Garg";


console.log(name); //this is still Saksham since a copy of this is stored in the my_name
console.log(my_name); //this is Saksham garg


// now let try this in the Non-primitive datatype 

let new_myObj = myObj;

new_myObj.name = "Saksham";

//both get changed because in the heap memory a reference of the varaible adderess is given so any change made is made at the 
// location where the original variable is stored.

console.log(myObj);
console.log(new_myObj);

