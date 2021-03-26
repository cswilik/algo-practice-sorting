// Insertion Sort
    // Builds up a sort by gradually creating  sorted portion on the left.

// Insertion Sort Example
// Pseudocode
    // *Start by picking second element in an array (loop at index 1) and set as var
    // *compare with element prior and swap them if necessary
    // *continue if next element is incorrect, iterate through the sorted portion to find its correct spot
    // *repeat and return sorted array

    // ***I tend to use 'let' but in this case, j needs to be defined as 'var' for scope reasons)***

function insertionSort(arr) {
    let currentVal;
    for(let i= 1; i < arr.length; i++) {
        currentVal = arr[i]
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

insertionSort([2,9,1,76,4])

