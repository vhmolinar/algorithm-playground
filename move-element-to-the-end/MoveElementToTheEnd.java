import java.util.Arrays;
import java.util.List;

public class MoveElementToTheEnd {

  public static void main(String[] args) {
    var res = moveElementToEnd(Arrays.asList(2, 1, 2, 2, 2, 3, 4, 2), 2);
    var expected = Arrays.asList(4, 1, 3, 2, 2, 2, 2, 2);

    assert Arrays.equals(res.toArray(), expected.toArray()) : String.format("Expected %s but got %s", expected.toString(), res.toString());
  }

  public static List<Integer> moveElementToEnd(List<Integer> array, int toMove) {
    var start = 0;
    var end = array.size();

    for (; start < array.size() -1; start++) {
      var current = array.get(start);
      if (current.compareTo(toMove) != 0) {
        continue;
      }
      Integer lastAvailable = null;
      do {
        end -= 1;
        lastAvailable = array.get(end);
      } while(end > 0 && lastAvailable.compareTo(toMove) == 0);

      if (end <= start) break;

      array.set(start, lastAvailable);
      array.set(end, current);
    }

    return array;
  }
}
