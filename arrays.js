// simple array construct

let ocean = [
    "pacific",
    "atlantic",
    "antarctic",
    "indian",
    "arctic",
];

// adding an item

ocean[5] = "seashore";

// pushing item into array

ocean.push("lobster1");
ocean.push("lobster2");
ocean.push("lobster4");
ocean.push("lobster3");
ocean.push("lobster5");

// Adding an item to the beginning of an array

ocean.unshift("Hello");

// removing an item from the beginning of the array

ocean.shift();

// removing an item from the End of the array

ocean.pop();

// modifying an array item or reassign

ocean[7] = "sealion";

// the splice method to modify an array
// splice method has three parameters splice(index number,number of items to remove,items to add)

ocean.splice(8, 1, "whale");

// looping through an array 

let shellfish = [
    "oyster",
    "shrimp",
    "clam",
    "mussel"
];


for (let i = 0; i < shellfish.length; i++) {
    console.log(i, shellfish[i]);
};

// creating for of newer loop system in javascript

let mammals = [
    "dolphin",
    "whale",
    "manatee",
];

for (let mammal of mammals) {
    console.log(mammal);
}


console.log(ocean);



// pop() and push() affect the end of an array, and shift() and unshift() affect the beginning of an array. An easy way to remember this is to keep in mind that shift() and unshift() will change all the index numbers of the returned array