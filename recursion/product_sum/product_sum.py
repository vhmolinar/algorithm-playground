def product_sum(array):
    return product_sum_rec(array, 2)

def product_sum_rec(array: list, level: int) -> int:
    sum: int = 0
    for el in array:
        if type(el) is int:
            sum += el
        else:
            sum += level * product_sum_rec(el, level + 1)
    return sum

if __name__ == "__main__":
  assert product_sum([5, 2, [7, -1], 3, [6, [-13, 8], 4]]) == 12
