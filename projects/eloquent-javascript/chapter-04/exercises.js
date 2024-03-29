////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/*
function range(start, end, increment=1){
  var rangeList=[];
  if(start === undefined || end === undefined){
    return;
  }else{
    for(var i = start; i <= end; i += increment){
      rangeList.push(i);
    }
  } 
  return rangeList;
}
*/

function range(start, end, increment=1){
  let rangeList=[];
  if(start === end){
    return rangeList;
  }
  else if(increment>0){
    for(let i=start; i<= end; i += increment){
      rangeList.push(i);
    }
  }
    // else (increment <0);
    // for (let i=end; i>= start; i -= increment)
  return rangeList;
}





////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(arra) { 
  var sumList = 0;
    for (let i = 0; i < arra.length; i++){
      sumList += arra[i];
    }
    return sumList;
}


////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(arrExample) {
  let reversedArr=[];
    for(let i=arrExample.length-1; i > -1; i--){
      reversedArr.push(arrExample[i]);
    }
  return reversedArr;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(arrExTwo) {

  for(let i=0; i <Math.floor(arrExTwo.length/ 2); i++){
    let reversedArrTwo = arrExTwo[i];
    arrExTwo[i] = arrExTwo[arrExTwo.length-i-1];
    arrExTwo[arrExTwo.length-i-1] = reversedArrTwo;
  }return arrExTwo;
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  // create list object
  let list = {};
  // access array elements starting at the end
  for(let i = array.length - 1; i > - 1; i--){

  // set array element to value property
    if(i === array.length - 1){
      list.value = array[i];
      
      // set a rest property on current object
      list.rest = null;
    } else { 
      
      // if last element is already a object, make new object shell
      list = {value: array[i], rest: list};
    }
  }
  // return list or object
  return list;  
} 
////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {
let arr = [];
for (let node = list; node; node=node.rest){
  arr.push(node.value);
}return arr;
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(element, list) {
  return {value: element, rest:list};
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, num) {
if(list === undefined || list === null){
  return;
}else if (num === 0){
  return list.value;
}else{
  return nth(list.rest,num-1);
}
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(val1, val2) {

  if (val1 === val2) {
    return true;
  }else if (typeof val1 === "object" && val1 !== null && typeof val2 === "object" && val2 !== null) {
      if (Object.keys(val2).length !== Object.keys(val1).length)
              return false;

    for (var prop in val1) {
      if (val2.hasOwnProperty(prop)) {
        if (!deepEqual(val1[prop], val2[prop]))
          return false;
      }else{
        return false;
      }
    }

    return true;
  }
  else 
    return false;
} 
/* var type1= (Object.prototype.toString.call(val1));
var type2= (Object.prototype.toString.call(val2));


if (val1 === val2){
  return true;
}else if(val1 !== null && val2 !== null || type1 === '[object Object]' || type2 === '[object Object]'){
    return false;
}

} */

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
}