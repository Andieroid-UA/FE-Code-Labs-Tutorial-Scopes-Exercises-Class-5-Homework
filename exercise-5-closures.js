/*
const myName = 'Andie'

function printName() {
    console.log(myName)
}

printName()
*/
/*
let myName = 'Andie'

function printName() {
    console.log(myName)
}

myName = 'Andie'

printName()

myName = 'Andres'

printName()
*/
////////////////////////
/*
function outerFunction(outerVariable) {
    const outer2 = "Hi"
    return function innerFunction(innerVariable) {
        console.log('Outer Variable: ' + outerVariable)
        console.log('Inner Variable: ' + innerVariable)
        console.log(outer2)
    }
}
*/
/////////////////////////////

function outerFunction(url) {
fetch(url).then(() => {
    console.log(url)
    })
}

const newFunction = outerFunction('outside')
newFunction('inside')