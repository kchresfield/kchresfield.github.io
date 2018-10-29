/* IF STATEMENT
If statements are the start to any conditional code. The rest of the code will
be based off the condition and weather it is true or not. Following the If 
statement are the curley brackets {} which will contain the body of the code.
*/

/* ELSE-IF
Else if statements are additional conditional blocks of code written after the
if statement. Following the else if statement is a condition between two 
paranthesis and a block of code that executes if the condition is true.
*/

/* ELSE
Else is the catch-all for if statements. If the condition is never met and if
statement and the else-if all return false, the else statement at the end of 
the chain will act as a default and its block of code will execute.
*/
// Example //
var a = 25

if (a > 100){
    console.log('The number is greater than 100!');  // This block will not run.
}else if (a > 50) {
    console.log('The number is greater than 50!');   // This block will not run.
}else{
    console.log('This number is 50 or smaller.');    // This block will run.
}


/* SWITCH
Switch statements are used when executing specific input values. The input value
must match the case's value. Switch statements start with the expression that is
being evaluated. Following in the code body, incased in two curley brackets {},
are the cases. The case will test the expression's value. If the case clause
matches the expression's value, the code associated with that case will be
executed. After each case a break statement is written, preventing the code from
continually running when a case clause is met. If not, the next case will be 
evaluated. Similar to an else statement, switch statements have a defualt
statement that acts as a catch-all if none of the case clauses are met.
*/
// Example //
var b = 'Sunny'

switch (b){
    case 'Rainy': 
        console.log("Today's a rainy day");
        break;
    case 'Sunny':
        console.log("Today's a sunny day");     //This block will execute.
        break;
    default:
        console.log("Today's neither rainy nor sunny");
}