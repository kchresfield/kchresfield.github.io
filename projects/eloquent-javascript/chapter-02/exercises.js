
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(num) {
for (var i=0; i<num; i++){
     console.log('#'.repeat(i+1));
     }
} 
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz(num1, num2) {
  for (var i= num1; i <= num2 ; i++){
    if(i%15 === 0){
        console.log('fizzbuzz');
    }else if (i%3 === 0){
        console.log('fizz');
    }else if (i%5 === 0){
        console.log('buzz')
    }else{
        console.log(i);
    }
}
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(numBoardSize) {
var board='';
for (var i= 0; i < numBoardSize; i++){
  for (var j= 0; j < numBoardSize; j++){
    if((i+j) % 2 === 0){
      board += ' ';
    }else{
      board += '#';
    }
  }board += '\n';
}

console.log(board);
}



////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}