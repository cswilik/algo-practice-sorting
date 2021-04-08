// Add up all the numbers in the arr and return that number

// Pseudocode
    // So intially we need a counter (total) set to 0
    // Our base case is if the arr is <=0, because we have nothing more to add
    // set our total to the first element in the arr
    // Then, the total will equal the total plus the function with arr minus -1
    // after it goes thru, return our total


function sum(arr) {
    let total = 0
    if (arr.length <= 0) return 0;
    total = arr[0]
    total = total + (sum(arr.slice(1)))
    return total

}

sum([1,2,3,4])