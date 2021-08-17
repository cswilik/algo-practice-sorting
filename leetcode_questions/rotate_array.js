// Rotate array - given array, rotate it to the right 'k' amount of steps
// k is non-negative.


// My solution. So in the actual directions, it does not say you *can't* create a new array...
// So this does work.
var rotate = function(nums, k) {
    let results = [];
    let mid = nums.length - k
    let left = nums.slice(0, mid)
    let right = nums.slice(mid)
    results = right.concat(left);
    return results;
};

rotate([1,2,3,4,5,6,7], 3)


// However, to do this without creating a new array:

var rotate = function(nums, k) {
    let rotatePoint = k % nums.length
    for(i = rotatePoint; i > 0; i --) {
        let val = nums.pop()
        nums.unshift(val)
    }
    return nums
}

rotate([1,2,3,4,5,6,7], 3)


// I like my version better!!!! haha.

