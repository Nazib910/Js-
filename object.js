//  simple object literals

const gimli = {
    name: "gimli",
    race: "dwarf",
    weapon: "axe",
    greet: function() {
        return `hi my name is ${this.name}!`;
    },
};

// two ways to access an object dot notation and bracket notation

gimli.weapon;

gimli["weapon"];

gimli.greet();
    

// gimli.age = 139;

gimli["age"] = 139;

gimli["weapon"] = "battle axe";
// gimli.weapon = "battle axe";

gimli.fight = function(){
    return `gimli attacks with an ${this.weapon}.`;
}


// to delete an object property theres delete keyword

delete gimli.weapon;

// looping through using for...in

// for(let key in gimli){
//     console.log(gimli[key]);
// }

// log
object.keys(gimli);

// console.log(gimli);