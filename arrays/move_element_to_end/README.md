# Move element to the end


## Challenge Description:

You're given an array of integers and an integer. Write a function that moves  all instances of that integer in the array to the end of the array and returns  the array.

The function should perform this in place (i.e., it should mutate the input  array) and doesn't need to maintain the order of the other integers.

Sample Input array = [2, 1, 2, 2, 2, 3, 4, 2] toMove = 2
Sample Output [1, 3, 4, 2, 2, 2, 2, 2]

// the numbers 1, 3, and 4 could be ordered differently


## My proposal
- create two pointers, one to the start and the other to the end
- start iterating the array and if the current value is equal to the parameter
- replace the elements from both pointers and then move each pointer
