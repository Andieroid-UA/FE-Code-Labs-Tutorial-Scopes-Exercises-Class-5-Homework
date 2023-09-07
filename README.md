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

### What is Hoisting?
Hoisting is JS default behavior where Variables and Function declarations are moved to teh top of their scope before code execution.

Hosting moves declarations only. Initializations/assignments are left in place.

In short, lift. Pulls up declarations. Not initilazations or expressions.

### Declaration
The var and function are declaration statements—they declare or define variables and functions. These statements define identifiers (variable and function names) that can be used elsewhere in your program and assign values to those identifiers.

let game;
console.log(game); //undefined

### Initialization
Initialization is the means of assigning an initial value to a variable. So undefined is the initial value of a declared variable. Seeing this though various times; var thing = "code"; The variable thing is initialized with "code" .

game = "Super Mario";
console.log(game);// Super Mario

### JS Variable Lifecycle
I. Declaration - let author;
II. Initialization - author = 'C.S. Lewis';
III. Usage - console.log(author)

### Closures
A closure is a feature of JavaScript that allows inner functions to access the outer scope of a function. Closure helps in binding a function to its outer boundary and is created automatically whenever a function is created. A block is also treated as a scope since ES6.

Anything on the inside has access to the things on the outside, access to it's parent scope, it's parent's parent and so on...

-----------------------------------------------------------------
## **Tasks for JS Hoisting**
1. What is the expected outcome of the following:

book('The Magicians Nephew');

function book(title) {
    console.log(`the book is called ${title}`);
}

Andie's Response: It will update the console to read "the book is called The Magicians Nephew" because it is a function being declaired

Correct Answer: correct, except "The" is capitalized.

"The book is called The Magicians Nephew"


2. What is the expected outcome of the following? How would you fix this?

console.log(book);

let book = 'The Silver Chair';

Andie's Response: It will post an undefined since it's trying to find the book title, but it's a function expression/initialization so it can't grab the information beneath it. Need to swap around.

let book = 'The Silver Chair';
console.log(book);

Correct Answer: Yes but it will put a reference error. It cannot access book before intitialization. Create variables first:

let book = "The Silver Chair"
console.log(book);

## **Tasks for Understanding JavaScript Scope**
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
