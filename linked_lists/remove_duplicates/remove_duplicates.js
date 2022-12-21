class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  let lastNode = null;
  let currentNode = linkedList;

  while(currentNode != null) {
    if (lastNode != null && lastNode.value == currentNode.value) {
      lastNode.next = currentNode.next;
    } else {
      lastNode = currentNode;
    }

    currentNode = currentNode.next;
  }

  return linkedList;
}
