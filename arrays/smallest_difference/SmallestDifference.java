package arrays.smallest_difference;

import java.util.Arrays;

public class SmallestDifference {
  public static void main(String[] args) {
    var test = new SmallestDifference();
    var arrayOne = new int [] { -1, 5, 10, 20, 28, 3 };
    var arrayTwo = new int [] { 26, 134, 135, 15, 17 };
    var res = test.smallestDifference(arrayOne, arrayTwo);

    System.out.println(Arrays.toString(res));
  }

  public int[] smallestDifference(int[] arrayOne, int[] arrayTwo) {

    Node pointerNode = null;
    Node head = null;

    for (var i = 0; i < Math.max(arrayOne.length, arrayTwo.length); i++) {
      var elOne = i < arrayOne.length ? new Node(arrayOne[i], true) : null;
      var elTwo = i < arrayTwo.length ?new Node(arrayTwo[i], false) : null;

      if (i == 0) {
        pointerNode = createPointerNode(elOne, elTwo);
        head = pointerNode;
        continue;
      }

      if (elOne != null)
        pointerNode = insertionOrdered(pointerNode, elOne);
      if (elTwo != null)
        pointerNode = insertionOrdered(pointerNode, elTwo);
    }

    return findSmallestDiff(head);
  }

  int [] findSmallestDiff(Node head) {
    int smallestDiff = Integer.MAX_VALUE;
    int smallValueOne = 0;
    int smallValueTwo = 0;

    var node = head;
    while (node.next != null) {
      if ((node.firstArray && node.next.firstArray) || (!node.firstArray && !node.next.firstArray)) {
        node = node.next;
        continue;
      }

      var diff = node.next.value - node.value;
      if (diff < smallestDiff) {
        smallestDiff = diff;
        if (node.firstArray) {
          smallValueOne = node.value;
          smallValueTwo = node.next.value;
        } else {
          smallValueOne = node.next.value;
          smallValueTwo = node.value;
        }
      }
      node = node.next;
    }

    return new int[] {smallValueOne, smallValueTwo};
  }

  Node insertionOrdered(Node pointerNode, Node el) {
    if (pointerNode.value < el.value) {
      return rightInsert(pointerNode, el);
    } else {
      return leftInsert(pointerNode, el);
    }
  }

  Node leftInsert(Node pointerNode, Node el) {
    while (pointerNode.before != null) {
      pointerNode = pointerNode.before;
      if (pointerNode.value < el.value) {
        pointerNode.next.before = el;
        el.next = pointerNode.next;
        pointerNode.next = el;
        el.before = pointerNode;
        return el;
      }
    }
    pointerNode.before = el;
    el.next = pointerNode;
    return el;
  }

  Node rightInsert(Node pointerNode, Node el) {
    while (pointerNode.next != null) {
      pointerNode = pointerNode.next;
      if (pointerNode.value > el.value) {
        pointerNode.before.next = el;
        el.before = pointerNode.before;
        pointerNode.before = el;
        el.next = pointerNode;
        return el;
      }
    }

    pointerNode.next = el;
    el.before = pointerNode;
    return el;
  }

  Node createPointerNode(Node elOne, Node elTwo) {
    Node pointerNode;
    if (elOne.value < elTwo.value) {
      pointerNode = elOne;
      elOne.next = elTwo;
      elTwo.before = elOne;
    } else {
      pointerNode = elTwo;
      elTwo.next = elOne;
      elOne.before = elTwo;
    }
    return pointerNode;
  }
}


class Node {
  Integer value;
  Boolean firstArray;
  Node next;
  Node before;

  Node(Integer value, Boolean firstArray) {
    this.value = value;
    this.firstArray = firstArray;
  }
}
