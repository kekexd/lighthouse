var n = process.argv[2]
function random (){
  return Math.floor(Math.random() * (6)) + 1
}
var output = '';
for (var i = 0; i < n; i++) {
  var num = random() + ", "
  output += num
}
output = output.replace(/,\s*$/, "")
console.log("rolled " + n + " dice: " + output)
