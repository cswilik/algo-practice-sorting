// Intersection of Two Arrays II
    // Given two integer arrays nums1 and nums2, return an array of their intersection.
    // Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.
    // Examples:
        //   Input: nums1 = [1,2,2,1], nums2 = [2,2]
        //   Output: [2,2]

        // Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
        // Output: [4,9]
        // Explanation: [9,4] is also accepted.


// Okay, this is the beginning of my solution, but I think I thought I needed to find a part of each of the array that was corresponding.
// I didn't understand that I needed to find the common elements in each, no matter their order in original array.
function intersectNums(nums1, nums2) {
    intersectionNums = []
    for(i=0; i< nums1.length, i++;) {
        for(j=0; j < nums2.length, j++;) {
            if (nums1[i] !== nums2[j]) {
                
            } 

        }
    }
    
}

intersectNums([4,9,5], [9,4,9,8,4])

// Solution 
// My explanation of whats happening here:
    //  * we create a new empty array to hold our intersecting numbers.
    //  * we loop over the 2nd array and for each iteration:
        //  * we check if 1st array includes element at nums2[i]
        //  * if it does, then we push that element into our new array.
        //  * we also remove it from the 1st array because it has been accounted for
    // After we loop through, return the array we created with intersecting pieces.
var intersect = function(nums1, nums2) {
    let res = [];
    for (let i = 0; i < nums2.length; i++){
        if (nums1.includes(nums2[i])){
            res.push(nums2[i]);
            nums1.splice(nums1.indexOf(nums2[i]), 1);
        }
    }
    return res;
};

intersect([4,9,5,4], [9,4,9,8,4])

// Additional Solution/Faster Solution
    //  * This is closer to what i was attempting to achieve. 
    //  * I realized I should have just gone with a while loop and would have been closer to this idea
    //  * important think to note is that these are first sorted. 
var intersect = function(nums1, nums2) {
    let i = 0, j = 0;
    let a = [];
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    while(i < nums1.length && j < nums2.length){
        if(nums1[i] == nums2[j]){
            a.push(nums1[i]);
            i++; j++;
        }else if(nums1[i] > nums2[j]){
            j++;
        }else if(nums1[i] < nums2[j]){
            i++;
        }
    }
    return a;
};

intersect([4,9,5,4], [9,4,9,8,4])
[4,4,5,9] [4,4,8,9,9]
