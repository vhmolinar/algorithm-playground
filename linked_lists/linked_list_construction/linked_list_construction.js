// This is an input class. Do not edit.
class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

// Feel free to add new properties and methods to the class.
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  setHead(node) {
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }

    this.insertBefore(this.head, node)
  }

  setTail(node) {
    if (!this.tail) {
      this.setHead(node);
      return;
    }

    this.insertAfter(this.tail, node);
  }

  insertBefore(node, nodeToInsert) {
    if (node === nodeToInsert) return;

    this.remove(nodeToInsert);

    if (node.prev == null) {
      this.head = nodeToInsert;
      this.head.next = node;
      node.prev = nodeToInsert;
    } else {
      nodeToInsert.prev = node.prev;
      node.prev.next = nodeToInsert;
      node.prev = nodeToInsert;
      nodeToInsert.next = node;
    }
  }

  insertAfter(node, nodeToInsert) {
    this.remove(nodeToInsert);

    if (node.next != null) {
      node.next.prev = nodeToInsert;
      nodeToInsert.next = node.next;
    }

    node.next = nodeToInsert;
    nodeToInsert.prev = node;

    if (nodeToInsert.next == null) {
      this.tail = nodeToInsert;
    }
  }

  insertAtPosition(position, nodeToInsert) {
    let idx = 1;
    let node = this.head;
    while (node != null) {
      if (idx++ == position) {
        break;
      }
      node = node.next;
    }
    if (node)
      this.insertBefore(node, nodeToInsert);
    else
      this.setHead(nodeToInsert)
  }

  removeNodesWithValue(value) {
    let node = this.head;
    const nodes = [];
    while (node != null) {
      if (node.value == value) {
        nodes.push(node);
      }
      node = node.next;
    }
    nodes.forEach((node) => this.remove(node));
  }

  remove(node) {
    if (node === this.head) {
      this.head = node.next;
      if (this.head)
        this.head.prev = null;
      else
        this.tail = null;
    } else if (node === this.tail) {
      this.tail = node.prev;
      if (this.tail)
        this.tail.next = null;
    }

    if (node.prev)
      node.prev.next = node.next;
    if (node.next)
      node.next.prev = node.prev;

    node.prev = null;
    node.next = null;
  }

  containsNodeWithValue(value) {
    let node = this.head;
    while (node != null && node.value != value) {
      node = node.next;
    }
    return node != null;
  }

  printTraverse() {
    let node = this.head;
    let printable = '';
    while (node != null) {
      if (node.prev != null)
        printable += '-> ';
      printable += node.value;
      if (node.next != null)
        printable += ' <';
      node = node.next;
    }
    console.log(printable);
  }
}

function test() {
  const list = new DoublyLinkedList();
  const node_5 = new Node(5);
  list.setHead(node_5);
  const node_4 = new Node(4);
  list.setHead(node_4);
  const node_3 = new Node(3);
  list.setHead(node_3);
  const node_2 = new Node(2);
  list.setHead(node_2);
  const node_1 = new Node(1);
  list.setHead(node_1);
  list.setHead(node_4);
  const node_6 = new Node(6);
  list.setTail(node_6);

  list.printTraverse();
  list.insertBefore(node_6, new Node(3));
  list.printTraverse();
  list.insertAfter(node_6, new Node(3));
  list.printTraverse();
  list.insertAtPosition(1, new Node(3));
  list.printTraverse();
  list.removeNodesWithValue(3);
  list.printTraverse();
  list.remove(node_2);
  list.printTraverse();
}

test();
