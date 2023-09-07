/*
hello();

function hello() {
    console.log("Hello");
}

////////////////////////////////////////////////////////////////

//Declaration
let game;
console.log(game);

//Initialization
game = "Super Mario";
console.log(game);// Super Mario

console.log(num); //not defined
*/
////////////////////////////////////////////////////////////////

//var author;
//console.log(author); //undefined with var

//let author = 'C.S. Lewis'; // reference error with let

////////////////////////////////////////////////////////////////

lion("Aslan");

function lion(name) {
    console.log(`The lion's name is ${name}`); //function declariation
}

//Versus

lion("Simba");

let lion = function(name) {
    console.log(`The lion's name is ${name}`); //function expression or initiliazation
}

////////////////////////////////////////////////////////////////