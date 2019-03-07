/*
 * Write a loop that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * Note: you may not use the built-in Array join function.
 */

var conceptList = ["gists", "types", "operators", "iteration", "problem solving"];

 // a custom function written by you (you must define it too!)
var concepts = joinList(conceptList);
// Write your code here...

function joinList(conceptList){
  var our_string = '';
  for (var i = 0; i < conceptList.length; i++){
    our_string += conceptList[i] + ', ';
  }
  our_string = our_string.slice(0, -2);
  return our_string;
}

console.log("Today I learned about " + concepts + ".");

