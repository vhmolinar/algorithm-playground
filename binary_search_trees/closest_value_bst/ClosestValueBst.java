package closest_value_bst;

public class ClosestValueBst {

  public static void main(String[] args) {
    var tree = generateTree();
    assert findClosestValueInBst(tree, 12) == 13;
  }

  private static BST generateTree() {
    var three_left_one = new BST(1);
    var two_left_two = new BST(2);
    two_left_two.left = three_left_one;
    var two_left_five = new BST(5);
    var one_left_five = new BST(5);
    one_left_five.left = two_left_two;
    one_left_five.right = two_left_five;


    var three_right_fourteen = new BST(14);
    var two_right_thirteen = new BST(13);
    two_right_thirteen.left = three_right_fourteen;
    var two_right_twentytwo = new BST(22);
    var one_right_fifteen = new BST(15);
    one_right_fifteen.left = two_right_thirteen;
    one_right_fifteen.right = two_right_twentytwo;

    var root = new BST(10);
    root.left = one_left_five;
    root.right = one_right_fifteen;

    return root;
  }

  // create two variables one for the min difference and the other for the closest
  // value
  // traverse the tree checking each node value against the two variables
  // decice for which child to keep traversing and stop when we reached a leaf
  // node
  private static int findClosestValueInBst(BST tree, int target) {
    var minDiff = Integer.MAX_VALUE;
    var closestValue = 0;

    var recurringNode = tree;
    var keepTraversing = true;

    while (keepTraversing) {
      var diff = getDiff(recurringNode.value, target);
      if (diff < minDiff) {
        minDiff = diff;
        closestValue = recurringNode.value;
      }

      if (target > recurringNode.value) {
        if (recurringNode.right != null)
          recurringNode = recurringNode.right;
        else
          keepTraversing = false;
      } else {
        if (recurringNode.left != null)
          recurringNode = recurringNode.left;
        else
          keepTraversing = false;
      }
    }

    return closestValue;
  }

  // target 4, value = -2 -> 6
  // target -2, value = -2 > 0
  // target -2, value = 2 >
  private static int getDiff(int value, int target) {
    return Math.abs(target - value);
  }

  static class BST {
    public int value;
    public BST left;
    public BST right;

    public BST(int value) {
      this.value = value;
    }
  }
}
