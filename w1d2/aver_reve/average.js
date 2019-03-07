function average(list) {
  var sum = 0;

  for (var num = 0; num < list.length; num++) {
    sum += list[num];
  }

  return sum / list.length;
}

console.log(average([3, 5, 7]));
