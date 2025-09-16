// var global variable
var name1 = "Winston1";

// let local variable
let name2 = "Winston2";

// const immutable variable
const name3 = "Winston3";

console.log(name1, name2, name3);

// template literals
console.log(`Good morning, ${name1}`);

// Data types
const str = "Hello"; // string
const isActive = true; // bolean
const nothing = null; // null
const notAssigned = undefined; // undefined
let notAssigned1; // undefined
const age = 25; // integer
const bigNumber = 8888888888888888n; // big integer

const n1 = 1; // assignment
const n2 = "1"; 

// loose coercion
const value1 = n1 == n2;
console.log(value1)

// strict coercion
const value2 = n1 === n2;
console.log(value2);

// operators
const sum = 1 + 1;
const diff = 2 - 2;
const prod = 3 * 3;
const quo = 10 / 2;

// control statement
const score = 85;

if (score >- 90) {
    console.log("Grade: A");
} else if (score = 80) {
    console.log("Grade: B");
} else if (score >- 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

// switch statement
let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of the week!");
        break;
    case "Friday":
        console.log("Almost weekend!");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Just another weekend vibes!");
        break;
    default:
        console.log("Weekdays!"); 
}

// for loop
for (let i = 1; i <= 5; i++) {
    console.log(`For loop count: ${i}`);
}

// while loop
let count = 1;
while (count <= 3) {
    console.log("While loop count:", i);
    count++
}

// do while loop
let num = 5;
do {
    console.log("DO... while loop runs once");
    num++
} while (num < 5);

// break
for (let i = 1; 1 <= 10; i++) {
    if (i === 5) break;
    console.log("Break Example");
}

// continue
for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;
    console.log("Continue Example");
}

// for ... of
const fruits = ["Apple", "Banana", "Cherry"];
for (const fruit of fruits) {
    console.log(`Fruit: ${fruit}`);
}