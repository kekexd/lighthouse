var words = ["ground", "control", "to", "major", "tom"];


function map(arr, doThis){
  var output = [];
  arr.forEach(function(element){
    var res = doThis(element);
    output.push(res);
  })
  return output;
}

//map(words)

var result1 = map(words, function (word) {
  return word.length;
});

var result2 = map(words, function(word) {
  return word.toUpperCase();
});

var result3 = map(words, function(word) {
  return word.split('').reverse().join('');
});

console.log(result1);
console.log(result2);
console.log(result3);
