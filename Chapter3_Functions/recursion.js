/*
Zero is even.
• One is odd.
• For any other number N, its evenness is the same as N - 2.
Define a recursive function isEven corresponding to this description. The
function should accept a single parameter (a positive, whole number) and return
a Boolean.
Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a
way to fix this?
*/


function isEven(numberValue) {
    if(numberValue === 0) {
        return true
    } else if(numberValue === 1) {
        return false
    }
    if(numberValue < 0) {
        return isEven(numberValue + 2)
    }
    return isEven(numberValue - 2)
}