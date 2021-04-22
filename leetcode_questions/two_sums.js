// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example
    // Input: nums = [2,7,11,15], target = 9
    // Output: [0,1]
    // Output: Because nums[0] + nums[1] == 9, we return [0, 1].   
    
    // Input: nums = [3,2,4], target = 6
    // Output: [1,2]

    // Input: nums = [3,3], target = 6
    // Output: [0,1]

// Okay, so basically find the two numbers that add up to the target and return the indices of those numbers.

// My initial thought is to do 2 pointers again.
// have results = []
// loop through...
// let y = target - nums[i]
// 2nd loop looking if j == y, if yes, push i + j and return results.
// This was accepted!!! Kinda slow tho...
var twoSum = function(nums, target) {
    let results = [];
    for(let i=0; i<nums.length; i++) {
        let y = target - nums[i];
        for(let j= i+1; j<nums.length; j++) {
            if (nums[j] === y) {
                console.log(nums[i], i, nums[j], j, y)
                 results.push(i, j)
                 return results
            }
        }
    }
};

twoSum([2,7,11,15], 9)

// Alternative (and faster) solution I like, but also found a tad confusing...
    //  Create a hash map
    //  looped through nums, if map contains that key (which is the target - nums[i]), 
    //  return that indices of i plus the value of the of the key(which is its indices)
    //  if that number does not exist in the map, create a key for it plus its index as the value.
var twoSum = function (nums, target) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        console.log("this is the map", map[target - nums[i]])
      if ( map[target - nums[i]] !== undefined) {
        return [i, map[target - nums[i]]];
      }
      map[nums[i]] = i;
      console.log(map)
    }
  };

  twoSum([2,7,11,15], 9)

