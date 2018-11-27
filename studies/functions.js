/* TWO PHASES FOR USING A FUNCTION
First a function must be declared/ defined, next the function must be called 
somewhere in the code.
*/
// Example //

 function exampleFunc(parameter){
     return parameter *2;
 }
 exampleFunc(5);


/* PARAMETERS VS ARGUMENTS PASSED TO A FUNCTION
Parameters are what's inside of the parenthesis once a function is declared.
Parameters act as placeholders for the arguements that will actually be passed 
through a function. When a function is called, arguments will be used and are
formatted like the parameters at the top of the function
// Example //
*/

function firstFunction(parameterA, parameterB){
    return 'Parameter A has a value of:' + parameterA + 'and B is:' + parameterB;
}

firstFunction('argument1', 'argument2');     //Calling the function


/* SYNTAX FOR A NAMED FUNCTION
// Example //

var firstFunction = function(parameterA , parameterB, parameterC){
    return parameterA + parameterB + parameterC;
}

console.log(firstFunction(argumentA, argumentB, argumentC))
*/

/* HOW TO ASSIGN A FUNCTION TO A VARIABLE
To assign a function to a variable, we can use an assignment operator making the
function a function expression.
*/
// Example //

var functionVariable = function(parameter){
    return true;
};
functionVariable();

/* HOW TO SPECIFY INPUTS AND OUTPUTS
Functions can opt to have inputs by including parameters. Similarly, they can
optionally return an outputs by including a return value.
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
the local scope while global scope variables can be called in the local and 
global scope.
*/
// Example //
function scopeFunctionExample(){
    var color = 'blue';
//  console.log(type);              //Will log an error message because type cannot be reached in the local scope.
        function typeOfColor(){
            let type = 'light';
            console.log(color);     // Will log 'blue'
        }
        typeOfColor();
}
scopeFunctionExample();



/* CLOSURES
Closures make it possible for functions to have variables that are private.
They have access to globally scoped variables even after global functions have
been closed.
*/
// Example //

function anotherFuncAboutPets() {
  var pet = 'Chester';
  function petNoise() {
    console.log(pet);
  }
  return petNoise;
}

var anotherPets = anotherFuncAboutPets();
anotherPets();