var arr = ["a", "a", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// function freqCounter(string) {
//     counter = {}
//     for(let i=0; i<string.length; i++) {
//         counter[string[i]] = (counter[string[i]] || 0) + 1
//     }
//     return counter
// }

// freqCounter(arr)


function freqCounter(string) {
    counter = {}
    for(let i=0; i<string.length; i++) {
        if (counter[string[i]]) {
            counter[string[i]]++;
        } else {
            counter[string[i]] = 1
        }
    }
    return counter
}

freqCounter(arr)