// valid Anagram algo using freq counter objects - two solutions.

// function validAnagram(str1, str2){
//     console.log(str1, str2)
//     if (str1.lenth !== str2.lenth) return false;
//     let obj1 = {}
//     let obj2 = {}
//     for(let char of str1) {
//         obj1[char] = (obj1[char] || 0) + 1
//     }
//     for(let char of str2) {
//         obj2[char] = (obj2[char] || 0) + 1
//     }
//     for(let key in obj1) {
//         if (!(key in obj2)) return false;
//         if (obj1[key] !== obj2[key]) return false;
//     }
//     return true;
// }

function validAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;
    let obj = {}
    for(let char of str1) {
        obj[char] = (obj[char] || 0) + 1
    }
    for(let i=0; i< str2.length; i++) {
        if (!obj[str2[i]]) return false;
        else obj[str2[i]] -= 1
    }
    return true;
}

validAnagram(" ", " ") //true
validAnagram('aaz', 'zza')  // false
validAnagram('anagram', 'nagaram') //true
validAnagram('rat', 'car') // false
validAnagram('awesome', 'awesom') // false
validAnagram('qwerty', 'ytrewq') // true