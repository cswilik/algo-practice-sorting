// Write a recursive function to count the number of items in a list

function numCount(arr) {
    count = 0
    if (arr.length === 0) return 0;
    if (arr.length !==0 ) {
        count = 1
        count = count + numCount(arr.slice(1))
    }
    return count
}

numCount([1,2,3,4])