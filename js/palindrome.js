/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  let number = x;
  let result = 0;
  while (number > 0) {
    const last_digit = number % 10;
    result = (result * 10) + last_digit;
    number = Math.floor(number / 10);
  }
  return result === x;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));