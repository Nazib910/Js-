//  a simple exam of if statements 

const balance = 600;
const jeans = 40;
const phone = 600;

if (jeans <= balance) {
    console.log("You have enough money to purchase the item!!");
} else {
    console.log("you do not have enough money in your acc to buy this item");
}


// else if statement

let grade = 87;

if (grade >= 90) {
    console.log("A");
} else if (grade >= 80) {
    console.log ("B");
} else if (grade >= 70) {
    console.log ("C");
} else if (grade >= 60) {
    console.log ("D");
} else {
    console.log ("F");
}

// ternery operator 

let age = 20;

const oldEnough = (age >= 21)? "you may enter." : "you may not enter.";

console.log(oldEnough);