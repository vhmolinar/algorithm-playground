# T: O(n)
# S: O(1)
def is_monotonic(array):
  direction: str = None
  last_number: int = None
  for i in range(0, len(array), 1):
    number = array[i]
    if last_number is not None:
      if number != last_number:
        curr_direction = 'increasing' if number > last_number else 'decreasing'
        if direction is None:
            direction = curr_direction
        elif direction != curr_direction:
            return False
    last_number = number
  return True

if __name__ == "__main__":
  assert is_monotonic([-1, -5, -10, -1100, -900, -1101, -1102, -9001]) == False
  assert is_monotonic([1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 8, 9, 10, 11]) == True
