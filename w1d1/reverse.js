function read_input(){
  var args = process.argv.slice(2);
  return args;
}

function reverse(input){
  var newStr ='';
  for(var i = 0; i < input.length; i++){
    for(var j = input[i].length - 1; j >= 0; j--){
      newStr += input[i][j];
    }
    newStr += '\n';
  }
  return newStr.slice(0, -1);
}

var input = read_input();
console.log(reverse(input));