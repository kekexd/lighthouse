function read_input(){
  var args = process.argv.slice(2);
  return args[0];
}

function obfuscate(input){
  if(!input){
    return 'No input';
  }
  for (var i = 0; i < input.length; i++){
    if(input[i] === 'a'){
      input = replaceAt(input, i, '4');
    }
    if(input.charAt(i) === 'e'){
      input = replaceAt(input, i, '3');
    }
    if(input.charAt(i) === 'o'){
      input = replaceAt(input, i, '0');
    }
    if(input.charAt(i) === 'l'){
      input = replaceAt(input, i, '1');
    }

  }
  return input;
}

function replaceAt(str, index, replace) {
  return str.substr(0, index) + replace + str.substr(index + 1);
}

var input = read_input();
console.log(obfuscate(input));
