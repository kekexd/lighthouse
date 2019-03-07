var input = process.argv[2];

if (input){
  console.log(reverse(input));
}

function reverse(orignal) {
  //var orignal = input;
  return orignal.split('').reverse().join('');
}
