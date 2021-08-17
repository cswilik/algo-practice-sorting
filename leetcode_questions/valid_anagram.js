var isAnagram = function(s, t) {
    // we are checking if t is an anagram of s. If it is, we return true, else false.
    // If s.length !== t.length, already false.
    // I think we make an object for holding the letters and their counts of string 's'
        // loop through string t and see if the letter is included in object.
            // if its not, return false
            // if it is, minus one from the object count
        // return true.
    let charCount = {}
    if (s.length !== t.length) {
        return false;
    }
    for(let i=0; i< s.length; i++) {
        if (charCount[s[i]]) {
            charCount[s[i]]++
        } else charCount[s[i]] = 1
    }
    for(let j=0; j<t.length; j++) {
        if (!charCount[t[j]]) return false;
        charCount[t[j]]--;
    }
    return true;
};