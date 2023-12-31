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
        /* local Scope that WORKS
        function a() {
            let game = 'Sonic'; //local variable
        }

        a();

        if(true) {
            let game = 'Mario';
            console.log(game); // Mario goes into the console
        }
        */
        /*
        function hello() {
            let greeting = 'hello';
        }

        console.log(greeting); //not defined

        if(true) {
            let greeting = 'hello';
        }
        console.log(greeting); //not defined
        */

        //If we use var here, the answer is 2, using let we get 10
        /*
        let x = 10;
        console.log(x); //10

        if(true) {
            let x = 2;
            console.log(x); //20
        }

        console.log(x); //10
        */
////////////////////////////////////////////////
    
    //Exercises 1-4
    let firstName = 'John';
    let lastName = 'Smith';
    let age = 28;
    let country = 'Canada';

    function user() {
        console.log(`${firstName} ${lastName} is ${age} years old and lives in ${country}.`);
    }

    //let firstName = 'James';//this will not work because it is already defined. This one is global the first is local since it's in the brackets

    user();

    let game = 'Sonic';

    if (true) {
        let game = 'Mario';
        console.log(game);
    }

    console.log(game);
