// Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.


// Input:
// nums = [1,1,2]

// Output:
// 2, nums=[1,2]

// Pseudocode:
    // * for edgecase, if arr.length = 0, return 0
    // * create two different markers (i + j) that start at the first and second index.
    // * while j is < arr.length, check if j value is equal to i value.
    // * if not, increase i and copy value of arr[j] to arr[i]
    // *increase j++
    // * if they are equal, just increase j++
    // return i+1 (for total number of unique elements in the array)

    // NOTE:
        // Whenever we encounter a duplicate element, we move j to the next non-duplicate element. 
        // When we see a unique element, we reassign it to the position next to the last non-duplicate number we have encountered.

function removeDuplicates(nums) {
    if (nums.length <= 0) return 0;
    let i = 0
    let j = i + 0
    while (j < nums.length) {
        if (nums[i] !== nums[j]) {
            i++;
            nums[i] = nums[j]
            j++;
        } else {
            j++
        }
    }
    return i + 1
}

removeDuplicates([1,1,2])