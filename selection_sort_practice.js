// Selection Sort
    // Similar to Bubble Sort, but puts small values into the sorted position.
    // can reuse sorting functions!

// sorting example
function swap(arr, idx1, idx2) {
    let temp = arr[idx1] 
    arr[idx1] = arr[idx2]
    arr[idx2] = temp
}

// Selection Sort Example
// Pseudocode
    // *store the first index as our smallest value
    // *compare smallest value to the next value in the array until you find a smaller value
    // *if smaller, designate at the new "min" and continue to end of the arr
    // *if min is not that value at(index)you originally began with, swap them
    // *repeat until sorted and return array

function selectionSort(arr) {
    for(let i=0; i < arr.length; i ++) {
        let smallest = i
        for(let j= i+1; j< arr.length; j++) {
            if (arr[j] < arr[smallest]) {
                smallest= j
            }
        }
        if (i!== smallest) {
            console.log(i,smallest)
            swap(arr, i, smallest)
        }
    }
    return arr
}

selectionSort([32,22,10,19,17])

