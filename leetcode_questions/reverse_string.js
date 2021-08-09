var reverseString = function (s) {
  // input = array or string elements
  // loop through array, 2 pointers @ beginning + end
  // edge case: if " " we need to account for that somehow - its showing up in helper method as undefined
  //  using a swapHelper method, swap the two elements, pointA ++; pointB --
  // use a swap helper function to swap the two elements
  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    [s[i++], s[j--]] = [s[j], s[i]];
  }
  return s;
};

let s = ["h", "e", "l", "l", "o"]
reverseString(s)