// isArray is an boolean method to know if an object is array or not 

let fish = [
    "piranha", 
    "whale",
    "sea fish",
    "sea horse",
]

// splice method has three parameters splice(index number,number of items to remove,items to add)
// Adding with splice

fish.splice(4,0,"eel");

// Removing with splice

fish.splice(1,2,"eeel");

// the reverse method which is as the name suggests reverse the order in which the array is written

fish.reverse();

// fill method replaces all the elements in the value with a static value

fish.fill("shark", 1, 3,);

// sort

fish.sort();


//console 

console.log(Array.isArray(fish));

console.log(fish);


