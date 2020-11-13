/*
As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).
 */
var gimme = function (inputArray) {
    let min = Math.min(...inputArray);
    let max = Math.max(...inputArray);
    for (i = 0; i < inputArray.length; i++){
        if (min !== inputArray[i] && max !== inputArray[i]){
            return i;
        }
    }
}