var list = [];
//var input = process.argv.slice(2);

// console.log(input);
//var sortedList = [];
function makeList(num) {
  list.push(num);
  return list;
  //console.log(list)
}
//console.log(list)
//console.log('list: ' + makeList(input));
// console.log('add first number ' + makeList(12))
// console.log('add second number ' + makeList(5))
// console.log('add third number ' + makeList(9))

//exports.makeList = makeList;


//console.log(list)

function sortList() {
  var sortedList = list.sort(function(a, b){return a - b;});
  return sortedList;
  // return function (sortedList){
  //         return sortedList;
  //         }
}
//console.log(sortList(list));
//var exportList = sortList;

//console.log(exportList);
//exports.exportList = exportList;

module.exports = {
  makeList: makeList,
  sortList: sortList
}
//module.exports.makeList = makeList;
