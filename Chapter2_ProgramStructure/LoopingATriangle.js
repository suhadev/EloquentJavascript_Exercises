/*
Write a loop that makes seven calls to console.log to output the following
triangle:
#
##
###
####
#####
######
#######
*/

let temp = ""
for(let i = 1; i <= 7; i++) {
   console.log(temp += '#')
}
