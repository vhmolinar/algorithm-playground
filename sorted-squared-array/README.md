# Sorted Squared Array


## Challenge Description:  
Write a function that takes in a non-empty array of integers that are sorted in ascending order and returns a new array of the same length with the squares of the original integers also in ascending order.

## Development of my solution:  
My first solution was actually prety simple and was built on top of standard methods of javascript library, nothing great.  
In the second one i tried to build an ordered list on my own, but fastly I realized that for the sake of the learning it would not be a good choice.  

So comes the better solution which won't require any sort algorithm. Instead it will work in a single loop using two pointers and a tricky thought:  
As the input array is already ordered, then we can loop the array size checking both initial and final position absolute values and then making the order insertion in the initialized array.

Very fancy!