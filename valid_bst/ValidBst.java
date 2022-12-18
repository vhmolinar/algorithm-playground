package valid_bst;

public class ValidBst {

  public static boolean validateBst(BST node) {
    return validateBst(node.right, Integer.MIN_VALUE, Integer.MAX_VALUE);
  }

  private static boolean validateBst(BST node, int minValue, int maxValue) {
    if (!(node.value > minValue && node.value < maxValue))
      return false;
    if (!(node.left != null && validateBst(node.left, minValue, node.value)))
      return false;
    if (!(node.right != null && validateBst(node.right, node.value, maxValue)))
      return false;
    return true;
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
