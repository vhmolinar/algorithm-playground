# T: O(n*m)
# S: O(n*m)
def numberOfWaysToTraverseGraph(width: int, height: int):
    matrix = [[0 for x in range(width)] for y in range(height)]
    for i in range(0, height):
        for j in range(0, width):
            up_ways: int = 0 if i == 0 else 1 if i == 1 else matrix[i - 1][j]
            left_ways: int = 0 if j == 0 else 1 if j == 1 else matrix[i][j - 1]
            ways: int = up_ways + left_ways
            matrix[i][j] = ways
    return matrix[height - 1][width - 1]

def main():
  assert numberOfWaysToTraverseGraph(2, 3) == 3
  assert numberOfWaysToTraverseGraph(4, 3) == 10

if __name__ == "__main__":
  main()
