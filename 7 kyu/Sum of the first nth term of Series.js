/*
Your task is to write a function which returns the sum of following series upto nth term(parameter).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
 */
function SeriesSum(n)
{
    let sum = 0;
    let denom = 1;
    for (i = 1; i <= n; i++){
        sum = sum + 1 / denom;
        denom = denom + 3;
    }
    return sum.toFixed(2);
}