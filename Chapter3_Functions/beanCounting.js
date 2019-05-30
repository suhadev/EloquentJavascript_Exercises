/* 
Write a function countBs that takes a string as its only argument and returns
a number that indicates how many uppercase “B” characters there are in the
string.
Next, write a function called countChar that behaves like countBs , except
it takes a second argument that indicates the character that is to be counted
(rather than counting only uppercase “B” characters). Rewrite countBs to
make use of this new function.
*/


function countBs(stringToCount) {
    let noOfBs = 0
    for(let i = 0; i <= stringToCount.length; i++) {
        if(stringToCount[i] === 'B') {
            noOfBs ++
        }
    }
    return noOfBs
}

function countChar(stringToCount,charToCheck) {
    let noOfChars = 0
    for(let i = 0; i <= stringToCount.length; i++) {
        if(stringToCount[i] === charToCheck) {
            noOfChars ++
        }
    }
    return noOfChars
}