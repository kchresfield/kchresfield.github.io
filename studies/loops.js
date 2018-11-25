/* WHILE, FOR, FOR-IN
Loops are used to run over a specific code a number of times. Loops contain a
counter, an exit condition, and an incrementor or iterator. After the loop, a
code is ran.
While- While loops run while a condition is true. Once the condition is met, or
when the condition returns false, the while loop stops.
For In- For loops run as many times as a the author specifies. 
In- Typically used to loop over objects and arrays, where numbers are sometimes
of no use.

Loop            Format
____            ______________________________________
While           while (condition) { ... }
For             for ((counter variable) ; (looping condition) ; (counter)) {...}
For In          for ((variable) in (object)){ ... }
*/

/* FORMAT FOR LOOPING
A loop will continue to cycle until a condition is met. For a while loop, the
number of loops is not defined, it will continue until the condition is met. For
loops will loop through an array or string for the enterity of its length.
For loops also contain a counter, which controls increments of the loop. For
loops can increment forwards and backwards by any amount.
For-in loops will cycle through an object the number of elements in the object have
been cycled. 
*/
// Examples //
for (var a = 0 ; a < 10 ; a++){ }     // This loop will start at 0 and run its 
                                      // function 10 times.
                                      
for (var b = 10 ; a > 0 ; a -= 2) { } // This loop will start at 10 and its
                                      // function will run 5 times.

/* LOOP OVER AN ARRAY
Using an array's index values, and the .length function, one can loop over an 
array while not knowing the actual length of the array.
*/ 

// Example //
let anArray = [1,2,3,4];
for (var i = 0 ; i< anArray.length ; i++ ) { 
    console.log(i*2);                           //Logs [2,4,6,8] to the console
}  
for (var i = anArray.length-1 ; i > -1 ; i--) {
    console.log(i*2);                           //Logs [8,6,4,2] to the console
}


/* LOOP OVER AN OBJECT
To loop over an object, we would need to utalize a for-in loop. The for-in loop 
would need to call the object in the statement. Since there are no numbers
associated with objects (only keys), the loop can only go foward.
*/
let thisObject = {
    'value1' : 1,
    'value2' : 2,
    'value3' : 3
};
for (var key in thisObject) {           // This will loop over the the object
     console.log(thisObject[key]);       // thisObject and will return the values
                                        // listed in thisObject [1,2,3]
}
