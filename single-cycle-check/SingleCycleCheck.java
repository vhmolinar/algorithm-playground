import java.util.HashSet;

public class SingleCycleCheck {

  public static void main(String[] args) {
    var test = new SingleCycleCheck();
    test.validate(new int[] { 2, 3, 1, -4, -4, 2 }, true);
  }

  private void validate(int [] input, boolean expected) {
    var actual = hasSingleCycle(input);
    assert actual == expected
      : String.format("Result should be %b, but got %b", expected, actual);
  }

  private boolean hasSingleCycle(int[] array) {
    var currIdx = 0;
    var visitedIdxs = new HashSet<Integer>();
    visitedIdxs.add(currIdx);

    for (var jumpCount = 0; jumpCount < array.length; jumpCount++) {
      var jump = array[currIdx];

      if (jump + currIdx < 0) { // forward to the end of array
        currIdx = goBack(currIdx, jump, array.length);
      } else if (jump + currIdx > array.length - 1) { // backward to the start of array
        currIdx = goForward(currIdx, jump, array.length);
      } else {
        currIdx = currIdx + jump;
      }

      // landed back at starting index
      if (currIdx == 0) break;

      // revisited a position before finishing the jumps
      if (visitedIdxs.contains(currIdx)) return false;

      visitedIdxs.add(currIdx);
    }

    // should check if all the nodes were visited
    return visitedIdxs.size() == array.length;
  }

  private int goBack(int currIdx, int jump, int arrayLength) {
    var jumpConsumption = jump;
    var newIdx = currIdx;
    while (jumpConsumption != 0) {
      if (newIdx == 0)
        newIdx = arrayLength - 1;
      else
        newIdx -=1;
      jumpConsumption += 1;
    }
    return newIdx;
  }

  private int goForward(int currIdx, int jump, int arrayLength) {
    var jumpConsumption = jump;
    var newIdx = currIdx;
    while (jumpConsumption != 0) {
      if (newIdx == arrayLength - 1)
        newIdx = 0;
      else
        newIdx += 1;
      jumpConsumption -=1;
    }
    return newIdx;
  }
}
