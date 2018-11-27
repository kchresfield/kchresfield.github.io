/*
 VARIABLES:

To hold things in memory during the life-cycle of a program, we can use 
variables.  Variables are named identifiers that can point to values of a 
particular type, like a Number, String, Boolean, Array, Object or another data-
type. Variables are called so because once created, we can CHANGE the value 
(and type of value) to which they point.

1. To create a variable we use the keyword, var, followed by a name 
(id or alias) for our variable.

2. There are 2 phases of using variables: declaration and initialization 
(or assignment).
*/

// 1. declaration //
var myName;

/*
At the declaration phase, the variable myName is undefined because we have NOT
initialized it to anything
*/
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

/* NOTE: We can assign and re-assign anything to a variable - we cannot do this 
with constants */

var myVariable = 1;
var myVariable = true;
var myVariable = "someString";


/* 
LET and CONST
Like var, let is another statement used to declare a variable, however the
variable will be block scoped. The keyword const is another statement used to 
decalre a variable and like let, its scope is block scoped.
where it is declared. const must be assigned at declaration and cannot be reassigned. , however the variable 
name (identifier) cannot be reassigned. Neither let or const are hoisted to the top of their block.
*/
var exampleA = 'varA';
function letConstExample(){
  let exampleA = 'letA';
  const constB = 'constB';
  console.log(exampleA);           //Logs letA to the console.
  console.log(constB);             //Logs constB to the console.
}
letConstExample();
console.log(exampleA);             //Logs varA to the console.

/*
HOISTING
Variables exist and are only accessible within the context of their scope. 
Similarly, variable declarations are hoisted to the top of their scope. If the 
variables are defined within a function, it is hoisted to the top of their 
function. If the variables are outside of a function it is hoisted to the top of
the global scope. When variable declarations are hoisted, their value does not 
get hoisted with them. 
Function declarations are also hoisted to the top of their scope, however 
function expressions are not.
*/
// Example //

function whatWillBeDefined () {
console.log ("Ice Cream Flavor: " + flavor);
var flavor = "Dulce de Leche";
console.log ("Secondary Flavor: " + flavor);
}

whatWillBeDefined ();
//"Ice Cream Flavor :" undefined
//"Secondary Flavor : Dulce de Leche"

/*The variable declaration for flavor will be hoisted to the top of the function
scope without a value. When the first console.log is hit, flavor is not yet
given a value, therefore it will log undefined. When the second console.log is
hit, the variable flavor had already been defined with a value of 
"Dulce de Leche" and will print that to the console.
*/
