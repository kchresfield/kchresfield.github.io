/* TWO PHASES FOR USING A FUNCTION
First a function must be declared/ defined, next the function must be called 
somewhere in the code.
*/

/* PARAMETERS VS ARGUMENTS PASSED TO A FUNCTION
Parameters are what's inside of the parenthesis once a function is declared.
Parameters act as placeholders for the arguements that will actually be passed 
through a function. When a function is called, arguments will be used and are
formatted like the parameters at the top of the function
// Example //

function firstFunction(parameterA, parameterB) { ... }

firstFunction(argument, argument)     //Calling the function
*/

/* SYNTAX FOR A NAMED FUNCTION
var firstFunction = function(parameterA , parameterB, parameterC){
    return parameterA + parameterB + parameterC;
}

console.log(firstFunction(argumentA, argumentB, argumentC))
*/

/* HOW TO ASSIGN A FUNCTION TO A VARIABLE
To assign a function to a variable, one must use an assighment operator to exit
a variable with a defined value.
*/

/* HOW TO SPECIFY INPUTS AND OUTPUTS
Functions can opt to have inputs by including parameters. Sinilarly, they can
optionally return putputs by including a return value.
// Example //
Input: function firstFunction(inputs){}
Output: function firstFunction{
    return 5;
}
*/

/* SCOPE
Scopes identify which variables or constants are accessible in your code. There 
are two different scopes where variables can be accessed, the global scope and 
the function/ local scope. Variables in the local scope can only be accessed in
the local scope while global scope variables can be called in the local scope.
*/

/* CLOSURES
Closures make it possible for functions to have variables that are private.
They have access to globally scoped variables even after global functions have
been closed.
*/