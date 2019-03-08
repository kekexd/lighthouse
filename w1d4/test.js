function makeIdGenerator() {
  var id = 0;

  // The following is the closure function
  return function() {
    // This inner function accesses and assigns the value of
    // the variable id, which was defined in the parent function
    id += 1;
    return id;
  }
}

// makeIdGenerator returns a function which is assigned to
// the variable nextId
var nextId = makeIdGenerator();// inner function

console.log("makeIDgen", makeIdGenerator); // outter function
console.log("makeIdReturn", makeIdGenerator()); // inner function

console.log("first",nextId()); // Logs: 1
console.log("first",nextId()); // Logs: 2
console.log("first",nextId()); // Logs: 3

var nextId2 = makeIdGenerator();// inner function #2

console.log("second",nextId2()); // Logs: 1
console.log("second",nextId2()); // Logs: 2

console.log("first",nextId()); // Logs: 4
console.log("second",nextId2()); // Logs: 3

