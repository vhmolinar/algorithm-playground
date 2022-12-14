import java.util.ArrayList;
import java.util.List;

public class RiverSizes {
  public static List<Integer> riverSizes(int[][] matrix) {
    var rivers = new ArrayList<Integer>();

    for (var i = 0; i < matrix.length; i++) {
      for (var j = 0; j < matrix[0].length; j++) {
        var el = matrix[i][j];
        if (el == 0) continue;
        var riverSize = dfs(matrix, i, j);
        rivers.add(riverSize);
      }
    }
    return rivers;
  }

  private static int dfs(int[][] matrix, int x, int y) {
    if (x < 0
        || x >= matrix.length
        || y < 0
        || y >= matrix[0].length
        || matrix[x][y] == 0)
      return 0;

    matrix[x][y] = 0;

    var riverSize = 1;
    riverSize += dfs(matrix, x, y + 1);
    riverSize += dfs(matrix, x, y - 1);
    riverSize += dfs(matrix, x + 1, y);
    riverSize += dfs(matrix, x - 1, y);
    return riverSize;
  }

}
