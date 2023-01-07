def levenshtein_distance(str1: str, str2: str):
  matrix = []
  columns_qty = len(str1) + 1
  rows_qty = len(str2) + 1

  for i in range(0, rows_qty):
    row = [x for x in range(columns_qty)] if i == 0 else [i if x == 0 else 0 for x in range(columns_qty)]
    matrix.append(row)

    if i == 0:
      continue

    for j in range(1, columns_qty):
      if str2[i - 1] == str1[j - 1]:
        row[j] = matrix[i - 1][j - 1]
      else:
        top_value = matrix[i - 1][j]
        left_value = matrix[i][j - 1]
        diagonal_value = matrix[i - 1][j - 1]
        row[j] = min(top_value, left_value, diagonal_value) + 1

  return matrix[-1][-1]


if __name__ == "__main__":
  assert levenshtein_distance('abc', 'yabd') == 2
  assert levenshtein_distance('', 'abc') == 3
  assert levenshtein_distance('biting', 'mitten') == 4
  assert levenshtein_distance('', '') == 0
