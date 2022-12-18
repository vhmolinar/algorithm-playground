def main():
  input = [10, 1, 20, 2, 3, 0, 18, 5, 2, 4]
  expected = [0, 1, 2, 2, 3, 4, 5, 10, 18, 20]
  output = insertion_sort(input)
  assert expected == output

###

def insertion_sort(array):
  sorted = []

  for number in array:
    if not sorted:
      sorted.append(number)
      continue
    insertion_sort_number(array, sorted, number)

  return sorted

###

def insertion_sort_number(array, sorted, number):
  ref_idx = len(sorted) // 2
  ref_el = sorted[ref_idx]

  if ref_el > number:
    left_insert(sorted, number, ref_el, ref_idx)
  else:
    right_insert(sorted, number, ref_el, ref_idx)

###

def left_insert(sorted, number, ref_el, ref_idx):
  while ref_el > number:
    ref_idx -=1
    if ref_idx == -1:
      break
    ref_el = sorted[ref_idx]

  shift(sorted, ref_idx + 1)
  sorted[ref_idx + 1] = number

###

# [ 1, 3, 10]
def right_insert(sorted, number, ref_el, ref_idx):
  while ref_el < number:
    ref_idx += 1
    if ref_idx == len(sorted):
      break
    ref_el = sorted[ref_idx]

  shift(sorted, ref_idx)
  sorted[ref_idx] = number
  pass

###

def shift(sorted, stop_idx):
  sorted.append(0)
  for i in range(len(sorted) - 1, stop_idx, -1):
    sorted[i] = sorted[i - 1]

###

if __name__ == "__main__":
  main()
