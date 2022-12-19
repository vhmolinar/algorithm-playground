class BST:
  value : int
  left: 'BST'
  right: 'BST'

  def __init__(self, value: int):
    self.value = value
    self.left = None
    self.right = None

  def insert(self, *values: int):
    if len(values) > 1:
      for value in values:
        self.insert(value)
      return
    value = values[0]
    if value < self.value:
      if self.left is None:
        self.left = BST(value)
      else:
        self.left.insert(value)
    else:
      if self.right is None:
        self.right = BST(value)
      else:
        self.right.insert(value)

  def inOrderTraverse(self, array: list):
      if self.left is not None:
        self.left.inOrderTraverse(array)
      array.append(self.value)
      if self.right is not None:
        self.right.inOrderTraverse(array)
      return array

  def preOrderTraverse(self, array: list):
      array.append(self.value)
      if self.left is not None:
        self.left.preOrderTraverse(array)
      if self.right is not None:
        self.right.preOrderTraverse(array)
      return array

  def postOrderTraverse(self, array: list):
    self.rightFirstTraverse(array)
    array.reverse()
    return array

  def rightFirstTraverse(self, array: list):
    array.append(self.value)
    if self.right is not None:
      self.right.rightFirstTraverse(array)
    if self.left is not None:
      self.left.rightFirstTraverse(array)

###


def main():
  tree = BST(10)
  tree.insert(5, 15, 2, 5, 22, 1)

  print(tree.inOrderTraverse([]))
  print(tree.preOrderTraverse([]))
  print(tree.postOrderTraverse([]))

if __name__ == "__main__":
  main()
