function calculateDayInYear(date) {
  var splitDate = date.split('/');
  var year = Number(splitDate[0]);
  var month = Number(splitDate[1]);
  var day = Number(splitDate[2]);
  var febDays = daysInFeb(year);
  var DAYS_IN_MONTH = [31, febDays, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (year && validMonth(month) && validDay(month, day)) {
    console.log(date, "is day", calculateDayNumber(month, day), "of the year", year);
    return calculateDayNumber(month, day);
  } else {
    console.log("Invalid date");
  }

  function validMonth(month) {
    if (month >= 1 && month <= 12) {
      return month;
    }
  }

  function validDay(month, day) {
    if (day >= 1 && day <= DAYS_IN_MONTH[month - 1]){
      return day;
    }
  }

  function calculateDayNumber(month, day) {
    // console.log('month:', month);
    // console.log('day:', day);
    var dayOfYear = day;

    for (var i = 1; i < month; i++) {
      dayOfYear += DAYS_IN_MONTH[i - 1];
    }

    return dayOfYear;
  }

  function daysInFeb(year) {
    if (isLeapYear(year)){
      return 29;
    }
    else return 28;
  }

  function isLeapYear(year) {
  // var year = 2000
    if (!isMultiple(year, 4)) {
      return false;
    }
    if (!isMultiple(year, 100) && isMultiple(year, 4)) {
      return true;
    }
    if (isMultiple(year, 100) && !isMultiple(year, 400)) {
      return false;
    }
    if (isMultiple(year, 100) && isMultiple(year, 400)) {
      return true;
    }

    // return isMultiple(year, 400) || (!isMultiple(year, 100) && isMultiple(year, 4));
  }


  function isMultiple(numerator, denominator) {
    return numerator % denominator === 0;
  }
  // console.log(isLeapYear(2000))
}

var date = process.argv[2];

if (!date) {
  console.log("Please provide a date in the format YYYY/MM/DD");
} else {
  calculateDayInYear(date);
}

/*
    Below are some simple tests!

    They run the function with a predetermined parameter and compare the output to the value we are expecting to get!

    The console.log will output either 'true' or 'false' based on whether or not the function
    returns a value that matched our expected value.

    You'll know your code works correctly when all of these tests return 'true'
*/
console.log("Tests:");
console.log("---------------");
console.log(calculateDayInYear("1900/3/2") === 61);
console.log(calculateDayInYear("2000/3/2") === 62);
console.log(calculateDayInYear("2012/2/29") === 60);
console.log(calculateDayInYear("2015/12/31") === 365);
// console.log(calculateDayInYear("2019/01/15"));
// console.log(calculateDayInYear("2019/02/01"));
