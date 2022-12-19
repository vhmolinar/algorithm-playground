function reverse(head) {
  let iterableNode = head;
  let previousNode = null;

  while (iterableNode.next) {
    const currentNode = iterableNode;
    iterableNode = iterableNode.next; // moves forward

    if (previousNode == null) {
      previousNode = currentNode;
      previousNode.next = null; // head becomes tail
    } else {
      currentNode.next = previousNode; // invert the order
      previousNode = currentNode;
    }
  }

  iterableNode.next = previousNode;
  return iterableNode;
}
