/*// Global scope Example:
let game = 'Sonic'; //global variable

console.log(game);

function title() {
    console.log(`${game}`);
}

title();

if(true) {
    console.log(`${game}`); // Sonic goes into the console
}

///////////////////////////////////////

*/
/*// local Scope
function a() {
    let game = 'Sonic'; //local variable
}

console.log(game); //not defined

OR like this...

if(true) {
    console.log(game); //not defined in if statement, only defined in function
}
*/

///////////////////////////////////////
// local Scope that WORKS
function a() {
    let game = 'Sonic'; //local variable
}

a();

if(true) {
    let game = 'Mario';
    console.log(game); // Mario goes into the console
}