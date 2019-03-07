var countdownGenerator = function (x) {
  /* your code here */
  var id = x + 1;

  return function(){
    id -= 1;
    if(id > 0){
      console.log('T-minus ' + id + '...')
    }
    if(id === 0){
      console.log('Blast Off!')
    }
    if(id < 0){
     console.log('Rockets already gone, bub!')
    }
  }



};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!