// Quick Sort
    // Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted.
    // select one element ('pivot') + finding index where the pivot should end up in a sorted array.
    // Once positioned, quick sort can be applied to either side of the pivot vis recursion.

// Pivot/Partition Helper Method
    // * 1st need to implement a function responsible for arranging elements in an array on either side of the pivot
    // * Giving an array, this method should designate an element as the pivot.
    // * Then, rearrange elements in the array so that all values less than the pivot are moved to the left, and greater are moved to the right.
    //  * The order of elements doesn't matter.
    //  * When complete, the function should return the index of the pivot
// Pseudocode
    //  * it will help to accept 3 args = (arr, start = 0, end = arr.length -1)
    //  * Grab pivot from start of array
    //  * Store current pivot index in a variable (this will keep track of where the pivot should end up).
    //  * Loop through arr from start to end
        //  * If pivot > current element, increase pivot index variable and then swap current element w element at pivot index.
    //  * Return pivot index


    function pivotHelper(arr, start=0, end=arr.length -1) {
        let pivot = arr[start]
        let pivotIdx = start
        for(let i = start + 1; i < arr.length; i ++) {
            if (pivot > arr[i]) {
                pivotIdx ++;
                [arr[pivotIdx], arr[i]] = [arr[i], arr[pivotIdx]]
            }
        }
        let temp = arr[start] 
        arr[start] = arr[pivotIdx] 
        arr[pivotIdx] = temp 
        return pivotIdx
    }

    // pivotHelper([5,2,3,6]
    //  returns 2 (correct index for 5!)

    // QuickSort Example 
    // Pseudocode
        //  * add two default arguments for left and right 
        //  * call the pivot helper method on the array
        //  * When the helper returns the updated index, recursively call the pivot helper on subarray to the left of that index
        //  * and then to the right
        //  * Base Case is when your subarray has less than two elements.

    function quickSort(arr, left = 0, right = arr.length - 1) {
        if (left < right) {
            let pivotIdx = pivotHelper(arr, left, right)
            quickSort(arr, left, pivotIdx -1)
            quickSort(arr, pivotIdx + 1, right)
        }
        return arr;
    }

    quickSort([5,2,3,6])
    
