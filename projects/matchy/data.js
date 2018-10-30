/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
animal.species = "Bird";
animal['name'] = "Tweety";
animal.noises = [];
console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = []; 
noises[0] = 'Tweet!';
noises.push('Twop'); 
noises.unshift('Chirp');
noises[noises.length]= 'Flap';
console.log(noises);
console.log(noises.length);
console.log(noises.length-1);


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal.noises = noises              //Reassigned the array in the animal function to the noises array.
noises.push('Cockeladoodledoo');    // Added an additional noise to the array.
console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *   You can access with dot notation or bracket notation, using the key.
 * 2. What are the different ways of accessing elements on arrays?
 *  Bracket notation with the index number.
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
animals.push(animal);
console.log(animals);
var duck = {species: 'duck', name: 'Jerome', noises:['quack', 'honk', 'sneeze', 'woosh'], friends: friends};
animals.push(duck);
console.log(animals);
var kitten = {species: 'Kitten', name: 'Kitty', noises: ['meow', 'purr', 'zzz']};
var crab = {species: 'Crab', name: 'Mr. Crabby', noises: ['squabble', 'pinch', 'growl']};
animals.push(kitten);
animals.push(crab);
console.log(animals);
console.log(animals.length);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var friends= []; // I choose an array because its easy to associate a list and find the length of a list of strings in an array.
function getRandom(array){
    return Math.floor(Math.random()*array.length);
};
friends.push(animals[getRandom(animals)].name);
//getRandom(animals);
console.log(friends);
animals[0].friends=friends;
console.log(animals);




/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
