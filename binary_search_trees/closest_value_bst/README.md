# Find closest value in bst


## Challenge Description:


You're given a Node class that has a name and an array of optional children nodes. When put together, nodes form an acyclic tree-like structure.

Implement the breadthFirstSearch method on the Node class, which takes in an empty array, traverses the tree using the Breadth-first Search approach (specifically navigating the tree from left to right), stores all of the nodes' names in the input array, and returns it.

If you're unfamiliar with Breadth-first Search, we recommend watching the Conceptual Overview section of this question's video explanation before starting to code.


## My proposed solution
- create two variables one for the min difference and the other for the closest value
- traverse the tree checking each node value against the two variables
- decice for which child to keep traversing and stop when we reached a leaf node
