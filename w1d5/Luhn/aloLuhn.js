//var num = '79927398713';
//console.log(typeof num)

function check(num){
  var arr = num.split('');
  for(var i = arr.length - 2; i >= 0; i--){
    if(i % 2 !== 0){
      arr[i] = arr[i] * 2;
      if(arr[i] > 9){
        //var newEle = arr[i].toString().split('');
        arr[i] = Math.floor(arr[i] / 10) + arr[i] % 10;
        //console.log(newEle)
      }
    }
  }

  //console.log(arr)

  arr = arr.map(Number);
  //var sum = arr.reduce(function(a, b) { return a + b; }, 0);
  var sum = 0;
  for(var j of arr){
    sum += j;
  }

  if(sum % 10 === 0){
    return true;
  }
  //const sum = arr.reduce((partial_sum, a) => partial_sum + a);

  return false;

}
//console.log(check(num));

module.exports = check;
