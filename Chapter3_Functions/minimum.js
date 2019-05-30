/* 
Write a function
min that takes two arguments and returns their minimum.
*/

function min(num1, num2) {
    if(num1 > num2) {
        return num1
    } else {
        return num2
    }
}

//Approach 2, Using Math.min function

console.log(Math.min(num1,num2))