// Radix Sort
    //  A special sorting algo that works only on lists of numbers
    //  It is NOT a comparison sort
    //  It exploits the fact that info about the SIZE of a number is encoded in the number of digits
        // If it has more digits, its bigger!

// Helper Methods

// getDigit Helper Method
    // gitDigit(num, place)
    // returns digit in 'num' at the given 'place' value
    // place starts from the RIGHT hand side
    // getDigit(12345, 3) // 2  
// Pseudo-ish Code
    // * Math.pow(10,i) 10 to the 2nd power == 100
    // *  so we have 7323/100 = 73.23
    // *  Math.floor(73.23) = 73!
    // *  73 % 10 = 3 (this is the number we want)

function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

getDigit(7323, 2)

// getCount Helper Method
    // getCount(num)
    // returns the number of digits in 'num'
    // getCount(25) // 2 or getCount(345) // 3
// Psuedo-ish Code
    // Math.log10 means 10 to what power equals num
    // Then we floor it to get rid of the decimal point and anything to the right of it
    // So, Math.log10 of 21388 === 4.33etc.. so we floor that and get 4
    //  add 1 and we get 5! The amount of digits!

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

digitCount(21388)

// mostDigits Helper Method
    // mostDigits(nums)
    // given an array of numbers, returns the number of digits in the largest numbers in the list
    // it uses digitCount!
    // mostDigits([1234, 5, 76]) // 4
// Pseudo-ish Code
    // set a variable to hold the max
    // Math.max takes in 2 nums and returns the largest
    // compare the current max and then next num in the list
function mostDigits(nums) {
    let maxDigits = 0
    for(let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]))
    }
    return maxDigits;
}

mostDigits([23,567, 89, 12234324, 90])

// Radix Sort Pseudocode
    //  * function that accepts a list of numbers
    //  * Figure out how many digits the largest number has (mostDigits)
    //  * Loop from k= 0 up to this largest num of digits
    //  * For each iteration:
            //  * Create bucket (an empty array) for each digit (0 to 9)
            //  * Place each number in the corresponding bucket based on its kth digit
    //  * Replace our existing array with the values in the buckets, starting w 0 up until 9.
    //  * Return list

function radixSort(nums) {
    let maxDigit = mostDigits(nums)
    for(k= 0; k < maxDigit; k++) {
        let digitBuckets = Array.from({length: 10}, () => []);
        for(let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]);
        
        }
        nums = [].concat(...digitBuckets)
    }
    return nums;
}

radixSort([23, 345, 5467, 12, 2345, 9852])