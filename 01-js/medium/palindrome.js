/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

const cleanString = (str) => {
  let result = ''
  for(let char of str) {
    if(/[a-zA-Z]/.test(char)) {
      result += char.toLowerCase();
    }
  }
  return result
}

function isPalindrome(str) {
  str = cleanString(str)
  let checkString = ''
  for(let i=str.length - 1; i >= 0; i--) {
    checkString += str[i];
  }
  return checkString === str;
}

module.exports = isPalindrome;
