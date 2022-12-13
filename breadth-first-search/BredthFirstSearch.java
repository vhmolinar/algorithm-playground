import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

public class BredthFirstSearch {

  static class Node {
    String name;
    List<Node> children = new ArrayList<Node>();
    Queue<Node> queue = new LinkedList<>();

    public Node(String name) {
      this.name = name;
    }

    public List<String> breadthFirstSearch(List<String> array) {
      queue.add(this);

      while (!queue.isEmpty()) {
        var visiting = queue.poll();
        array.add(visiting.name);

        for(var child : visiting.children) {
          queue.add(child);
        }
      }

      return array;
    }

    public Node addChild(String name) {
      Node child = new Node(name);
      children.add(child);
      return this;
    }
  }


}
