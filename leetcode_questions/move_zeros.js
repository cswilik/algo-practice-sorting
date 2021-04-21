// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.

// Example
    // Input: nums = [0,1,0,3,12]
    // Output: [1,3,12,0,0]

    // Input: nums = [0]
    // Output: [0]

    // my first thought was to loop through, 
        //  if i === 0, swap with number after it?
        // Okay, this works until you are swapping zero w zero...


// make two pointers at beginning and end of array
// if i is equal to 0:
    //  swap it with last number in array(j) 
    // increase i and substract j

// This works, but it isn't what leetcode wants -- the numbers pushed to front should be put in somewhat of an order.


var moveZeroes = function(nums) {
    let i = 0
    let j = nums.length - 1
    while(i < j) {
        if (nums[i] === 0 && nums[j] !== 0) {
            let temp = nums[j]
            nums[j] = nums[i]
            nums[i] = temp
            i++;
            j--
            console.log("true",nums[i], nums[j])
        } else if (nums[j] === 0) {
            j--;
        } else
        i++;
        console.log("false", nums[i], nums[j]);
    }
    return nums
}

moveZeroes([0,1,0,3,12])
// [12,1,0,3,0]
// I'm getting [12,1,3,0,0] NOT [1,3,12,0,0]



// Solution I found that I like
    // 0 is falsey
    // I was one the right track with 2 pointers and swapping numbers...
const moveZeroes = nums => {
    let i = 0
    let j = 0
    while(i < nums.length) {
        if(nums[i]) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
            j++
        }
        i++
    }
    return nums
}

moveZeroes([0,1,0,3,12])
// [0,1,0,3,12]
//  i j
    // [0,1,0,3,12]
    //  j i
    //   [1,0,0,3,12]
    //      ji
    //      [1,0,0,3,12]
    //         j i
     //     [1,0,0,3,12]
    //         j   i
    //      [1,3,0,0,12]
    //           j i
     //      [1,3,0,0,12]
    //            j    i
         //      [1,3,12,0,0]
    //                j    i