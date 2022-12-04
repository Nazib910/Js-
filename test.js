
// Simple operator

let a, b, c ;
a = 2; b = 5;
c = a + b;
document.getElementById("demo").innerHTML = c;

let x, d, v ;
x = 5; d = 9; 
v = x * d;
document.getElementById("demo2").innerHTML = v;

// how function work!!!

function sleep(Name, time){
    console.log( Name + " is sleeping till " + time)
}

sleep("Hashem", "3pm");
sleep("Zayed", "9am");
sleep("Jabal", "4am");

function Displaydate(){
    document.getElementById("demo3").innerHTML = Date();
}

// Difference between object and string!!! 

let i = ("john");
let h = new String("john");

console.log(i == h);

// text Replacement!!!!

function myFunction(){
    let text = document.getElementById("demo4").innerHTML;
    document.getElementById("demo4").innerHTML = 
text.replace("microsoft", "Windows");
}

// Turning an string into array by split

let m = "HELLO WORLD"

console.log(m.split(""));

// String interpolation using backticks

let n = `bangladesh has a total population`;

let k = 17;

let j = 1;

let country = `so ${n + ` ` + (k+j)}`;

console.log(country);


// Array for loop

const fruits = ["banana", "apple", "orange", "mango"];

for (i = 0; i < fruits.length; i++){
    console.log(i);
    console.log();
}

// Date works only if written on browsers console

// let today = new Date();

// console.log("todays date is  " = today );
 
// Createing html tags with javascript

// let p = document.createElement("P");

// let t = document.createTextNode("Hello World!!!!!!");

// p.appendChild(t);

// document.body.appendChild(p);

let name = prompt("Whats Your name??????");

console.log(alert = "hellooo!!!!" + name +"!");


// splitting string

const stringg = "HELLO THERE";

const newString = stringg.split(" ");

console.log(newString);
