// Bubble Sort
    // largest item "swaps" till the end, loops through again.
   

    // swap method 1:
function swapOne(arr, idx1, idx2) {
    let temp = arr[idx1] 
    arr[idx1] = arr[idx2]
    arr[idx2] = temp
}

    // swap method 2:
const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

// Bubble Sort Example
// Pseudocode:
    // *create a var that will check if there are no more swaps to break loop and return array
    // *start a loop at the end of the array that moves towards the beginning.
    // *set var to true
    // *create inner loop (j) that moves towards end of array until hits i(or i-1)
    // check if value at j is larger than value at next index(j + 1)
    // if it is larger, we need to swap values and set var to false.
    // after looping through inner loop, check if var is true-if so, break loop and...
    // return our sorted array
function bubbleSort(arr) {
    let noSwaps;
    for(let i= arr.length; i > 0; i--) {
        noSwaps = true
        for(let j= 0; j < i-1; j++) {
            if (arr[j] > arr[j + 1]) {
                
                swap(arr, j, j+1);
                
                noSwaps = false
            }
        }
        if (noSwaps) break;
    }
    return arr
}

bubbleSort([1,2,4,3,8,9,5])