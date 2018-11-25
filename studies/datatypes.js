/* NUMBERS
In JavaScript, numbers are a simple data type that allowers programmers to 
manuiplate numerical values that include all real numbers. In Boolean operations
they can also have a value of true or false. Any number, positive or negative, 
will have a value of 'true', while 0 will return false.
*/
// Example //
var x= 1; // Variable x now has a numerical value of 1.

/* STRINGS
String literals are a group of text inclosed in '' or "" marks. Strings can 
consist of numbers and letters, as long as they are within the quotes. If quotes
are needed in a string, this can be accomplished by including a backslash to 
escape the string.
*/
// Example //
var x= "Tommy said \" Stop Talking. \" "; 
// Variable x has a value of, Tommy said "Stop Talking."

/* BOOLEANS
Boolean statements can have a value of true or false. Boolean logic is used in 
conjunction with control flow. If a condition is met (true or false), then 
another set of code will execute.
*/
// Example //
console.log(Boolean(0));    // Returns false
console.log(Boolean(1));    // Returns true
var x = -2;
if (x === -2){
    return "Its a number" ;
}else{
    return "Its not a number";      //Returns a statement as a result of the code 
    }                               //being true or false 


/* ARRAYS
Arrays are a complex data type that contain a  collection of values. The values
are between two square brackets. The information stored is seperated by a comma 
and each item has a number index assigned to it, depending on its order in the 
array. An array's index begins at zero. Similarly, to access that information, 
one needs its assigned index number.
*/
// Example //
var a= [1,2,3,4,5];
//     [0,1,2,3,4]  are the array's index numbers, respectively. //

/* OBJECTS
Objects are similar to arrays, however their information is accessed by keys,
which are formatted as string. Each key has an assosiated property that can have
the form of a simple or a complex data type. The key- value properties are
stored between two curley brackets, {} .
*/
// Example //
var b = {
    "letters" : "a b c",
    "number"  : 3 ,
    "virture" : true 
}; 

/* FUNCTIONS
Functions are made of names, parameters, a return statement and arguements. 
Each function has a name in which it can be called, parameters which tell the
function how to run, and an argument that is ran through the function and 
tested in the function body. The return value determines the value the function returns
*/
// Example //
/* function name(argument){
    function body
    return statement
}
*/ 

/* UNDEFINED
Undefined is a value. If a variable has been defined but has not been assigned 
a value, it will have a value of 'undefined'. 
*/
// Example //
var c = 3; // Variable c has a value of 3.
var d;     // Variable d has a value of undefined.

/* NULL 
Similar to undefined, null represents a valuse that has neither a value, nor
has not been defined. */

// Example //
var e = null;
console.log(e); //Returns a null.


/* NaN
NaN stands for 'Not-a-Number'. If an arithmatic function is used with a value
that is not a number, NaN will be returned.
*/
// Example //

var f = fish * 2;
console.log(f); // Will return a NaN statement


/* INFINITY and -INFINITY
The value of ∞ is represented as 'Infinity', with a capital I. Likewise, -∞ is 
represented with the text '-Infinity'.
*/
console.log(Infinity * -1); // Returns -Infinity

/* PRIMITIVE vs COMPLEX DATA TYPES
Primitive Data Type- These data types cannot change their value without it being
reassigned, therefore being immutable. If a function is acted upon the value, 
the new value will not be automatically updated. Primitive values are copied by
value, not refrence. Immutable values include strings, booleans, numbers, null,
and undefined.
Complex Data Type- These data types can change their value from line to line
without reassignment. They copy the first refrence and manipulate it instead of 
copying the same value that was initially declared. Complex data types include 
objects, arrays, and functions.
*/
// Example //
var g= 'how are you';
g + "?";
console.log(g);          // Returns 'how are you', not 'how are you?'

var h= ['how are you'];
h.push('?');
console.log(h.join(''));          // Returns ['how are you?']

