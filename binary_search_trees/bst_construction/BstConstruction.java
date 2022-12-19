package binary_search_trees.bst_construction;

import java.util.ArrayList;
import java.util.List;

public class BstConstruction {

  public static void main(String[] args) {
    testCase1();
    testCase2();
    testCase3();
    testCase4();
    testCase5();
    testCase6();
  }

  static void testCase6() {
    var tree = new BST(10);
    tree.insert(5);
    tree.insert(15);
    tree.insert(13);
    tree.insert(22);
    tree.insert(16);
    tree.insert(5);
    tree.insert(2);
    tree.insert(1);
    tree.print();
  }

  static void testCase5() {
    var tree = new BST(1);
    tree.insert(-2);
    tree.insert(-3);
    tree.insert(-4);
    tree.remove(1);
    assert !tree.contains(1);
  }

  static void testCase4() {
    var tree = new BST(2);
    tree.insert(1);
    tree.insert(4);
    tree.insert(3);
    tree.insert(5);
    tree.insert(6);
    tree.remove(2);
    assert !tree.contains(2);
  }

  static void testCase3() {
    var tree = new BST(1);
    tree.insert(2);
    tree.insert(3);
    tree.insert(4);
    tree.insert(5);
    tree.remove(1);
    assert !tree.contains(1);
  }

  static void testCase2() {
    var tree = new BST(10);
    tree.insert(5);
    tree.insert(15);
    tree.insert(2);
    tree.insert(5);
    tree.insert(13);
    tree.insert(22);
    tree.insert(1);
    tree.insert(14);
    tree.insert(12);
    tree.remove(10);
    assert tree.contains(15);

  }

  static void testCase1() {
    var tree = new BST(10);
    tree.insert(5);
    tree.insert(15);
    assert tree.contains(10);
    assert tree.contains(5);
    assert tree.contains(15);
    tree.remove(10);
    tree.remove(5);
    tree.remove(15);
    assert !tree.contains(10);
    assert !tree.contains(5);
    assert tree.contains(15);
  }

  static class BST {
    public int value;
    public BST left;
    public BST right;

    public BST(int value) {
      this.value = value;
    }

    public BST insert(int value) {
      if (value < this.value) {
        if (this.left == null) {
          this.left = new BST(value);
          return this.left;
        } else {
          return this.left.insert(value);
        }
      } else if (value >= this.value) {
        if (this.right == null) {
          this.right = new BST(value);
          return this.right;
        } else {
          return this.right.insert(value);
        }
      }
      return this;
    }

    public boolean contains(int value) {
      if (value == this.value)
        return true;

      if (value > this.value && this.right != null) {
        return this.right.contains(value);
      } else if (value < this.value && this.left != null) {
        return this.left.contains(value);
      }

      return false;
    }

    public BST remove(int value) {
      if (right == null && left == null)
        return this;

      if (this.value == value) {
        var newRoot = recursivelyRemove(value);
        this.value = newRoot.value;
        this.right = newRoot.right;
        this.left = newRoot.left;
        return this;
      }

      return recursivelyRemove(value);
    }

    public BST recursivelyRemove(int value) {
      if (this.value > value) {
        this.left = left.recursivelyRemove(value);
      } else if (this.value < value) {
        this.right = right.recursivelyRemove(value);
      } else {
        if (this.left == null)
          return this.right;
        else if (this.right == null)
          return this.left;

        var min = this.right.inOrderSucessor();
        this.value = min.value;
        this.right = this.right.recursivelyRemove(min.value);
      }
      return this;
    }

    private BST inOrderSucessor() {
      if (left != null)
        return left.inOrderSucessor();
      return this;
    }

    public void print() {
      var lines = new ArrayList<List<String>>();
      var level = new ArrayList<BST>();
      var next = new ArrayList<BST>();

      level.add(this);
      var nn = 1;
      var widest = 0;

      while (nn != 0) {
        var line = new ArrayList<String>();

        nn = 0;
        for (var n : level) {
          if (n == null) {
            line.add(null);

            next.add(null);
            next.add(null);
          } else {
            var strValue = Integer.toString(n.value);
            line.add(strValue);
            if (strValue.length() > widest)
              widest = strValue.length();

            next.add(n.left);
            next.add(n.right);

            if (n.left != null)
              nn++;
            if (n.right != null)
              nn++;
          }
        }

        if (widest % 2 == 1)
          widest++;

        lines.add(line);

        var tmp = level;
        level = next;
        next = tmp;
        next.clear();
      }

      var perpiece = lines.get(lines.size() - 1).size() * (widest + 4);
      for (var i = 0; i < lines.size(); i++) {
        var line = lines.get(i);
        var hpw = (int) Math.floor(perpiece / 2f) - 1;

        if (i > 0) {
          for (var j = 0; j < line.size(); j++) {

            // split node
            var c = ' ';
            if (j % 2 == 1) {
              if (line.get(j - 1) != null) {
                c = (line.get(j) != null) ? '┴' : '┘';
              } else {
                if (j < line.size() && line.get(j) != null)
                  c = '└';
              }
            }
            System.out.print(c);

            // lines and spaces
            if (line.get(j) == null) {
              for (int k = 0; k < perpiece - 1; k++) {
                System.out.print(" ");
              }
            } else {

              for (int k = 0; k < hpw; k++) {
                System.out.print(j % 2 == 0 ? " " : "─");
              }
              System.out.print(j % 2 == 0 ? "┌" : "┐");
              for (int k = 0; k < hpw; k++) {
                System.out.print(j % 2 == 0 ? "─" : " ");
              }
            }
          }
          System.out.println();
        }

        // print line of numbers
        for (var j = 0; j < line.size(); j++) {

          String f = line.get(j);
          if (f == null)
            f = "";
          var gap1 = (int) Math.ceil(perpiece / 2f - f.length() / 2f);
          var gap2 = (int) Math.floor(perpiece / 2f - f.length() / 2f);

          // a number
          for (var k = 0; k < gap1; k++) {
            System.out.print(" ");
          }
          System.out.print(f);
          for (int k = 0; k < gap2; k++) {
            System.out.print(" ");
          }
        }
        System.out.println();
        perpiece /= 2;
      }
    }
  }
}
