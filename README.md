# FE-Code-Labs-Class-5-Exercises

## Learned about... 

### What is a Scope?
Set of code that has all your variables to find, and they are only accessable in that scope.

### Scopes and their types
- Global
- Module <-- will be dealing mostly with these
- Function
- Block (local) <-- will be dealing mostly with these

Any time you define a variable inside of something, like a function or if statement, it will be scoped into that function or if statement.

JS can break up global and module scopes into their own files.

Curly braces indicate blocks, hence block scopes. Function scopes are it's own block. If you use "var" (which you shouldn't) they are only function scoped!

"Let" and "const" are block-level scopes.

You should really use various... variable names. Otherwise if you include them in the same block and globally it could cause trouble.

### What is a Module?
Modules are a way to break up code into files into various different files, and import them into one another

You need to explicitly export the file to make it accessable elsewhere that is not inside of the document, otherwise it is stuck in that one defined document.

-----------------------------------------------------------------

**Tasks for Understanding JavaScript Scope**
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
