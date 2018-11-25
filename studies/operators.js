/* ASSIGNMENT OPERATORS
Operators assign from right to left using an equal sign '='. In conjunction
with arithemetic operators, a value can be assigned while an arithmetic
computation is preformed.
*/
// Example //
var a = 0;   // The value of 0 is now assigned to the variable a.
var b;
b += 2;  // The value of 2 is added and assigned to variable b.

/* ARITHMETIC OPERATORS
Arithmetic operators include any mathmatical computations done in basic math.

Operator            Computation
________            _______________________
 +                  Addition
 -                  Subtraction
 *                  Multiplication
 /                  Division
 %                  Remainder from division
 ++                 Increment
 --                 Decrement
*/

/* COMPARISON OPERATORS
Comparison operators compare contents to see if the content and the type of 
content match (depending on the comparison operator). If the abstract comparison
is used (==), it is testing to see if the content or value is the same.
If the strict comparison Is used (===), it is comparing the content and if data
type is the same.
*/
// Example //
5 == '5'   // Returns true, because the values are the same.
5 === '5'  // Returns false, because the data type is not the same.

/* LOGICAL OPERATORS
Logical operators are used in conjunction with boolean values. The logical
operators will manipulate the argument to change the truth-ness or false-ness 
of the expression.

Operator            Description
________            ___________
&&                  Checks if two statements follow a parameter
||                  Checks if one of two statements follow a parameter
!                   Negates an expression 
*/
// Example //
var b = 5
var c = 10

console.log(b > 0 && c > 0);  // Returns true because b and c are greater than 0
console.log(b > 8 || c > 8);  // Returns true because c is greater than 8
console.log(b && c != false );// Returns true because b and c are not 0


/* UNARY OPERATORS
Only work with one value at a time.

Operator            Function
________            ________
!                   Logical not operator, changes a truthy value to a falsy value
typeof()            Returns the type of datatype inclosed.
-                   Negates numbers and strings.
+                   Converts non-numbers to a number.
*/
// Example //
var word = 'banana';
console.log(typeof(word)); //Logs 'string' to the console.


/* TERNARY OPERATORS
Can be used in place of if-else statements and written on one line. The format 
for ternary operations is:
{(A condition) ? "(statement if condtion is true)" : "statement if false" }
*/

// Example //
function pet(animal) {
  return (animal ? 'dog' : 'fish');
}

console.log(pet(false));           //'fish' is logged to the console.