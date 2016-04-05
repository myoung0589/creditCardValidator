

// 4556737586899855

// Drop the last digit from the number.
function lastDigit(num) {
  var numString = num.toString();
  var numArray = numString.split("");
  var lastDigit = parseInt(numArray[15]);
  return lastDigit;
}

function dropDigit(num) {
  var numString = num.toString();
  return numString.substring(0,15);
}

// * Reverse the numbers
function reverse(string) {
  return string.split("").reverse().join("");
}

// Multiply the odd positions
function multiplyOddPositions(numString) {
  var numArray = numString.split("");
  var newArray = [];
  for(i=0; i<numArray.length; i++) {
    if(i%2==0 || i%2==2) {
      var numberByTwo = parseInt(numArray[i])*2;
      if(numberByTwo>9) {
        newArray.push(numberByTwo-9);
      } else {
        newArray.push(numberByTwo);
      }
    } else {
      newArray.push(parseInt(numArray[i]));
    }
  }
  return newArray;
}

// * Add all the numbers together
function addAllNums(numArray) {
  var sum=0;
  for(i=0; i<numArray.length; i++) {
    sum+=numArray[i];
  }
  return sum;
}

// check the last digit of the credit card numbner

function checkLastDigit(sum,lastDigit) {
  return (10-(sum%10))==lastDigit;
}

// Check if credit card number is validated

function isCardValid(ccNum) {
  var shortendCcNum = dropDigit(ccNum);
  var reversed = reverse(shortendCcNum);
  var multipliedOdd = multiplyOddPositions(reversed);
  var sumOfNum = addAllNums(multipliedOdd);
  return checkLastDigit(sumOfNum,lastDigit(ccNum));
}
