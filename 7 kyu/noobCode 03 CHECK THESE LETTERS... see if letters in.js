/*
Write a function that checks if all the letters in the second string are present in the first one at least once, regardless
of how many times they appear:

["ab", "aaa"]    =>  true
["trances", "nectar"]    =>  true
["compadres", "DRAPES"]  =>  true
["parses", "parsecs"]    =>  false
Function should not be case sensitive, as indicated in example #2. Note: both strings are presented as a single argument
in the form of an array.
 */
function letterCheck(arr) {
    let a = arr[0].toLowerCase();
    let b = arr[1].toLowerCase();
    for (let i = 0; i < b.length; i++){
        if (!a.includes(b[i])){
            return false;
        }
    }
    return true;
}