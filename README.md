# FE-Code-Labs-Class-5-Exercises

Learned about Scopes and their types:
- Global
- Module <-- will be dealing mostly with these
- Function
- Block (local) <-- will be dealing mostly with these

What is a Scope?
"Set of code that has all your variables to find, and they are only accessable in that scope"


***Tasks for Understanding JavaScript Scope***
1. Create three variables in the global scope called firstName, lastName and age, and a function that logs them to the console in the following format e.g. 'John Smith is 25 years old'.

2. Move the variables into the local scope of the functino and add another variable this time called country, add this to our statement '...and lives in England'.

3. Outside of the function change the firstName to 'James', did you encounter a problem?

4. What will the following code return?

let game 'Sonic';

if(true) {
    let game = 'Mario';
    console.log(game);
}

console.log(game);
