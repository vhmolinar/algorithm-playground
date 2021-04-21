# Valid subsequence

### Description:  
Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one.  
A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but that are in the same order as they appear in the array. For instance, the numbers 

### Development of my solution:  
As we can clearly see the better solution is also a very much simpler one.  
The point here was that I couldn't realize that in order to identify a subsequence I'd only need to iterate from the original array checking if each element appears in the subsequence input test, thus at the end of the loop checking if the quantity of elements found in order was exactly the length of the subsequence array would be enough.  
Knowing that was enough