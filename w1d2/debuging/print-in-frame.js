function printInFrame(list) {
  var list = list.split(' ');
  var longest = longestStr(list).length;
  var border = repeat('*', longest + 3);
  console.log(border);
  for (var i = 0; i < list.length; i++) {
    console.log('* ' + list[i] + repeat(' ', longest - list[i].length) + '*');
  }
  console.log(border);
}
function repeat(str, times) {
  var result = str;
  for (var i = 0; i < times; i++) {
    result += str;
  }
  return result;
}
function longestStr(list) {
// var longest = list.sort(function (a, b) { return b.length - a.length; })[0];
  var longest = list[0];
  for (var i = 0; i<list.length; i++) {
    console.log(list[i].length)
    if (list[i].length > longest.length){
      console.log("here")
      longest = list[i]
  }
  }
  console.log("test longest",longest)
  return longest;
}
// Test driver code, do not modify
printInFrame('May the force be with you');
printInFrame('Here\'s Johnny!');
printInFrame('Supercalifragalisticexpialadocious');
printInFrame('Lost, like tears in the rain');