
function binarySearch(numArray, target) {
    let startIndex = 0
    let endIndex = numArray.length -1 
    while (startIndex <= endIndex) {
        let middle = Math.floor((startIndex + endIndex )/ 2)
        if(numArray[middle] < target) {
            console.log("your target is larger, searching again")
            startIndex = middle + 1
        }
        if (numArray[middle] > target) {
            console.log("your target is smaller, searching again")
            endIndex = middle - 1

        }
        if (numArray[middle] === target) {
            return console.log("Congrats! Target found!" + middle + target)
        }
        else {
            console.log("Target was not found")
        }
       
    }
    
}

binarySearch([1,2,4,6,8,10,16,20],17)