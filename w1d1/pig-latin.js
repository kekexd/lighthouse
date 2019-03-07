function read_input(){
  var args = process.argv.slice(2);
  return args;
}
var input = read_input();

function pig_latin(input){
  var result = '';
  for(var i = 0; i < input.length; i++){
    var firstCh = input[i].slice(0, 1);
    var remain = input[i].slice(1);

    var output = remain + firstCh + 'ay';
    result += output + ' ';
  }
  return result;
}

console.log(pig_latin(input));