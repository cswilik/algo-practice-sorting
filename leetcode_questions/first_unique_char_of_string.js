// Find first non-repeated character of string.
    // when found, return index of that character.
    // if NOT found, return -1


var firstUniqChar = function(s) {
    // Okay so we have a string that we need to loop over and find the first character that is not repeated. 
        //I am going to make an object to hold all the characters and their counts.
        // Then loop over string to find the index of that char with 1 count and return that index.
            //   if NO chars have count of 1, return -1  
        let charCount = {}
        for(let i=0; i<s.length; i++) {
            if (charCount[s[i]]) {
                charCount[s[i]]++;
            } else 
            charCount[s[i]] = 1
        }
        
        for(key in charCount) {
            if (charCount[key] === 1) {
                return s.indexOf(key)
            }
        };
        return -1
            
    };