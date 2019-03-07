var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};


// **********************************

// 1. following and followed by

// function followedBy(){
//   var output = [];
//   //1. getting all the keys and putting it into array.
//   var myKeys = [];
//   for(var key in data){
//     myKeys.push(key);
//   }
//   //Logic for checking who is following us
//   for(var i = 0; i< myKeys.length; i++){
//     for(var key in data){
//       let follows = data[key].follows;
//       for(var k = 0; k < follows.length; k++){
//         if(key!==myKeys[i]){
//           if(myKeys[i]===follows[k]){
//             console.log("myKeys "+myKeys[i]);
//             console.log("followed by : key "+key);
//           }
//         }
//       }
//     }
//   } //var i for loop closes
// }
//followedBy();


function followsAndFollowedBy(obj){
  var followsIds = data[p]['follows'];
  for(var p in data){
    //console.log(followsIds)
    var follows = [];
    for(var f of followsIds){
      if(data.hasOwnProperty(f)){
        follows.push(data[f]['name'])
      } else follows.push('Not following anyone');

    }
    console.log(data[p]['name'] + ' is following: ' + follows);

    var followedBy = [];
    for(var k in data){
      //var followsIds = data[k]['follows'];
      for(var i = 0; i < followsIds.length; i++){
        if(followsIds[i] === p){
          followedBy.push(data[k]['name'])
        }
      }
    }
    console.log('and followed by: ' + followedBy + '\n')

  }
}

followsAndFollowedBy(data);

// **********************************

// 2. who follows the most people

function followsMost(obj){
  var followsMost = '';
  for(var p in data){
    var followsIds = data[p]['follows'];
  }
}





