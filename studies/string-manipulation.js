/* WITH OPERATORS
Strings can be combined by adding a '+' sign. When combining strings this way,
the spaces must also be included into the equation. Wihouth including spaces,
the message will not read correctly. In addition to the addition symbol. 
Javascript has codes for string to format the way a string are written. 

Code        Output
____        ____________________________
\'          A single quote
\"          A double quote
\\          A printed backslash
\n          A new line will start
\r          Carriage return
\t          Indents the text
\b          Backspace
\f          Form feed
*/
// Example //

var myName = 'My name is:\n\t Kaelyn\n and I am from:\n\t New York';
console.log(myName);
/* Logs this to the console:
My name is:
	 Kaelyn
and I am from:
	 New York
*/

/* WITH STRING METHODS
When a string is assigned to a variable, string methods (preforming certain
duties) will change the value of a string. Since strings are an immutable value,
the original variable is not changed. The methods are constructs of the 
underlying javascript language and do not need to be declared. Some methods 
include:

Method                   Output
______________          _______________________________________________________
.slice()                Removed part of the string and returns a new string.
.split()                Splits a string and turns it into an array.
.toLowerCase()          Converts all uppercase letter in a string to lower case.
.toString()             Returns the valuse of a given string.
*/
// Example //

var name = 'KAELYN';
console.log(name.toLowerCase()); // Will log 'kaelyn' to the console.
console.log(name.slice(1));      // Will log 'AELYN' to the console.