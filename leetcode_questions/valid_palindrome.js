var isPalindrome = function(s) {
    // if the string is a palindrome, return true, else, false
    // replace all spaces with no spaces
        // I don't get how regex works but found the appropriate way of doing it. Need to learn about this.
    // I think 2 points one at beginning and end
    // loop through the str, if (i === j), i++ and j--
    // if (i !== j) return false
    
    let str = s.replace(/[^a-zA-Z0-9]/g,"").toLowerCase()
    let i = 0
    let j = str.length - 1
    while (i < j) {
        if (str[i] !== str[j]) return false;
            i++;
            j--;
    }
    return true;
};