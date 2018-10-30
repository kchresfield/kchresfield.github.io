/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(animals, names){
    for(var i= 0; i< animals.length; i++){ //Looks through the array
        if(names === animals[i].name){     // If 
            return animals[i];
        } 
    }
    return null;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(animals, names, replacement){
    for (var i=0; i< animals.length; i++){
        if (names === animals[i].name){
            animals[i] = replacement;
            return;
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, names){
    for(var i=0 ; i < animals.length; i++){
        if(animals[i].name === names){
            animals.splice(i,1);         // Splice can remove entire object, do not need to call the animal[i] because that's the array.
        }
        
    }

}
//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animals, animal){
    for (var i = 0; i < animals.length; i++){
        if (animals[i].name === animal.name){
            return;
        }
    }if(animal.name.length > 0 && animal.species.length >0){
            animals.push(animal);
        }

    //Check if animal.name.length >0
    //Check if animal.species.length>0
    //Check if animal.name != animals.name
    //Adds animal to animals if all conditions pass.
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
