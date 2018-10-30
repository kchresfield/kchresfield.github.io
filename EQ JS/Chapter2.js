// Exercise Looping a Triangle
for (var i='#'; i.length < 8; i += '#'){
     console.log(i);
     }

// Exercise FizzBuzz
for (var i= 0; i < 101 ; i++){
    if(i%3 === 0 && i%5 === 0){
        console.log('FizzBuzz');
    }else if (i%3 === 0){
        console.log('Fizz');
    }else if (i%5 === 0){
        console.log('Buzz')
    }else{
        console.log(i);
    }
}

// Exercise Chessboard
var chessboard='';
var bindingSize=8;
for (var i= 0; i < bindingSize; i++){
  for (var j= 0; j < bindingSize; j++){
    if((i+j) %2 === 0){
      chessboard +='#';
    }else{
      chessboard += ' ';
    }
  }chessboard += '\n';
}

console.log(chessboard);

    