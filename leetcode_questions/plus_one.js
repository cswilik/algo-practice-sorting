// Plus One
    // Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.
    // The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.
    // You may assume the integer does not contain any leading zero, except the number 0 itself.

// Example:
    // Input: digits = [1,2,3]
    // Output: [1,2,4]
    // Explanation: The array represents the integer 123.  
    // For myself, if the arr is [1,2,9] = [1,3,0]

// My thought process
    // currently its in an array, what if we turned it into a string and then + 1 and then turned back into an array?
    // This does not seem to be working...
// new idea:
    // grab last element in the arr 
    // if it 9, make it equal to 0
    // Okay, this sorta works, but doesn't account for [9,9], I am getting [10,0] which can't be right.
var plusOne = function(digits) {
    let end = digits.length -1
    if (digits.length === 1 && digits[end] === 9) {
        digits[end] = 0
        digits.unshift(1)
    } else if (digits[end] === 9 ) {
        digits[end] = 0
        digits[end - 1] ++
    } else digits[end] ++
    return digits
}

plusOne([1,2,9])
// new idea:
    // loop over the array, starting at the end. If digits[i] === 9, then turn to 0 
    // if its not 0, we need to add one and then break out of the loop and return the digits arr
    // if its all 9s, at this point they are all 0s, so we return the array with a spread operator as 1, ...digits

var plusOne = function(digits) {
    for( i=digits.length -1; i >=0; i -- ) {
      if (digits[i] === 9) {
          digits[i] = 0
      } else { digits[i] ++;
            return digits;
      }

    }
    return [1, ...digits]
}