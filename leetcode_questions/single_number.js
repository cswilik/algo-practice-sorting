// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?


// Pseudocode:
    // * create an empty object/hashmap
    //  * loop over the array, for each element, add it as a key
    //  * if it already exist or is equal to 0, + 1
    //  * now, loop over the hashmap, if the key === 1, return that value


// solution:
var singleNumber = function(nums) {
    numCount = {};
    for(i=0; i < nums.length; i++) {
        numCount[nums[i]] = (numCount[nums[i]] || 0) + 1
    }
    for (let val in numCount) {
        if (numCount[val] === 1) return val
    }
};