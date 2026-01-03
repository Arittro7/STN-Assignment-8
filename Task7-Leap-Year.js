/*
Task: Leap Year Checker
-Write a function that determines whether a given year is a leap year.
Example: Happy New Year
*/

function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isLeapYear(2025));
console.log(isLeapYear(2026));
console.log(isLeapYear(2027));
console.log(isLeapYear(2028)); //Leap Year