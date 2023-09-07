//console.log(globalVar)

/*
import { exportedVar } from "./moduleScript.js"

console.log(exportedVar)
*/

function test() {
    const c = 2

    if(true) {
        const c = 3
    }
    console.log(c)
}

test()