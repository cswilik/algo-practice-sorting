// Merge Sort 
    // a combonation of merging and sorting. decomposes an array to array length of 0 or 1 and then merges them.


// merge helper method
// pseudocode 
    // * create an empty array + take a look at the smallest values in each input array (i & j both == 0) (suggest using a while loop)
    // * while there are still values we haven't looked at:
        //  * if value in first array is smaller than the value of second array, push value in the 1st array into our results array
        // and move to next value in 1st array.
        //  * if larger, take value in 2nd array and put in the results array. Then move to next value in second array.
        //  * Once all values exhausted, push in all remaining values from left over array
function mergeHelperMethod(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i ++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while (j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return mergeHelperMethod(left, right)
}




mergeSort(3,6,8,2,1,4,7,5)

// mergeHelperMethod([1,3,5], [2,4,6])

// Merge Sort Example
// Pseudocode
    // * Break up array into halves (.slice()) until arrays of 0 or 1 elements
         //  * recursively call sort untill smallest element
         //  * base case = arr.length <= 1
    //  * Once you have smaller sorted arrays, merge those with other sorted arrays until back at full length
    //  * Return the merged + sorted array 
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return mergeHelperMethod(left, right)
}