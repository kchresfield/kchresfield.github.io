// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-kchresfield');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 */

var maleCount = function(array) {
    var allMales =  array.filter(function(element){
        if(element.gender === 'male'){
            return element;
        }
    });
    return allMales.length ;
};

var femaleCount = function(array){
    let arrFem = _.reduce(array, function(previousValue, val, i){
        if (val.gender === 'female'){
            return previousValue +=1;
        }
        else{
            return previousValue;
        }
    }, 0);
    return arrFem;
};


var oldestCustomer = function(array){
    let oldPeople = _.reduce(array, function(previousValue, val, i){
        if ( val.age > previousValue.age){
            return val;
        }
        else{
            return previousValue;
        }
    });
    return oldPeople.name;
};

var youngestCustomer= function(array){
    let youngPeople = _.reduce(array, function(previousValue, val, i){
        if ( val.age < previousValue.age){
            return val;
        }
        else{
            return previousValue;
        }
    });
    return youngPeople.name;
};

var averageBalance = function(customers){
    let arrOfBal = _.pluck(customers, 'balance'); //Plucks values in each balance and sets to new array
    let onlyNums=[];                            //Empty array to puch balance values without $ or ,
    for( let i=0; i< arrOfBal.length; i++){
        onlyNums.push(parseFloat(arrOfBal[i].replace(/\$|,/g, ''))) ; //Loops through string of balance arrays and pushes them to empty array as a number
    }
    
    let total= ((onlyNums.reduce((sum, current, i) => { return sum+current})) / onlyNums.length);
    return total;
   
};

var firstLetterCount = function(array, letter){
    let first = _.filter(array, function(e){
        return e.name[0].toLowerCase() === letter.toLowerCase();
    });
    return first.length;
};

var friendFirstLetterCount = function(array, customer, letter){
    var counter = 0;
    _.each(array, function(e,i,a){  
        //iterate through array of customers
        if(customer === e.name){
        _.filter(e.friends, function(v, k, o){
            if(v.name[0].toLowerCase() === letter.toLowerCase()){
                counter+=1;
            }
        });
        
    }});
    return counter;
};

var friendsCount = function(customers, name){
    let arrFriends= [];
    _.each(customers, function(e,i,a){
        for (let i=0; i<e.friends.length; i++){
            if(name === e.friends[i].name){
                arrFriends.push(e.name);
            }
        }
    });
    return arrFriends;
};


var topThreeTags = function(customers) {
    var arrOfTags = _.map(customers, function(value) {
        return value.tags;
    });  
    arrOfTags = arrOfTags.reduce(function(seed, element, index) {
        return seed.concat(element);
    }, []);

    var counters = [];
    var highestTagList = [];
    
      
    _.each(arrOfTags, function(tag, index, collection) {
        var counterForTags = counters.filter(function(element, index, collection) {
            return element.tag === tag;
        });
        if (counterForTags.length > 0) {
            counterForTags[0].count++;
        } else {
            counters.push({ tag: tag, count: 1 });
        }
    });

    function findHighestTag(counters) {
        var highestIndex = 0;
        var highest = counters.reduce(function(highestTag, counterForTags, index) {
            if (counterForTags.count > highestTag.count) {
                highestIndex = index;
                return counterForTags;
            } else {
                return highestTag;
            }          
        });
        counters.splice(highestIndex, 1);
        return highest;
    }
    
    var highest = findHighestTag(counters);
    highestTagList.push(highest.tag);
    
    highest = findHighestTag(counters);
    highestTagList.push(highest.tag);
    
    highest = findHighestTag(counters);
    highestTagList.push(highest.tag);
    
    return highestTagList;
};
    

var genderCount= function(array){
    let male = 0;
    let female = 0;
    let transgender = 0;
    let Obj = {};
    customers.reduce(function(seed, customer, index, customers) {
        if (customer.gender === 'female') {
            female += 1;
        } else if (customer.gender === 'male') {
            male += 1;
        } else if (customer.gender === 'transgender') {
            transgender += 1;
        }
    }, 0);
    Obj.male = male;
    Obj.female = female;
    Obj.transgender = transgender;
    return Obj;
};
 // npm start --prefix ./projects/let-s-get-functional
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
