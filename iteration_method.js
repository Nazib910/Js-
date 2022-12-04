// forEach method 

let fish = ["piranha", "barracuda", "eel", "koi"];

fish.forEach(fish => {
    console.log(fish);
})


// looping through the length of the array

for (let i = 0; i< fish.length; i++){
    console.log(fish[i]);
}

// forEach()
let fishh = ["piranha", "barracuda", "cod", "eel"];

fish.forEach(singleFishh => {
    console.log(singleFishh);
})

// map() method  

let car = ["volvo", "bmw", "audi", "ferrari"];

let printcar = car.map(car => {
    console.log(car);
})

// filter method  

let seaCreatures = ["shark", "whale", "squid", "starfish", "narwhal" ];

let filteredList = seaCreatures.filter(creature => {
    return creature[0] === "s";
});

// reduce method

let numbers = [ 42, 23, 16, 15, 4, 8];

let sum = numbers.reduce((a, b) => {
    return a + b;
})

// log

console.log(filteredList);

console.log(sum);