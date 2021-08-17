var reverse = function(x) {
    // were taking a number and reversing it. Neg nums stay neg. Can't go over int limit.
    // Seems per example that any "leading zeros" are removed.
    // My initial thought is to turn it into a string, split the elements, reverse them + join back together.
    // Then take the string and turn back to integer.
        // if the now reversed num is larger than limit, return 0;
        // else, use Math.sign(x) to figure out if it needs to be negative or positive and times by int.
    
    let reversed = x.toString().split("").reverse().join("");
    let num = parseInt(reversed)
    if (num > 2**31) return 0;
    return num * Math.sign(x)

    
};