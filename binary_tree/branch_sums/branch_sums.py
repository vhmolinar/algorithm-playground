# This is the class of the input root. Do not edit it.
class BinaryTree:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
pass

# create an array to store the sum of each branch values
# create a function to perform a dfs prioritizing the left nodes
#   the function will receive the array as argument and will store
#   the branch sum at the end of the array as soon as it reaches the leaf node
# return the array

# T: O(N)
# S: O(N)
def branch_sums(root: BinaryTree):
    output = []
    dfs_sum(root, output, 0)
    return output

def dfs_sum(node: BinaryTree, output: list, sum: int):
    if node.left is not None:
        dfs_sum(node.left, output, sum + node.value)
    if node.right is not None:
        dfs_sum(node.right, output, sum + node.value)

    if node.left is None and node.right is None:
        branch_sum: int = sum + node.value
        output.append(branch_sum)

def create_tree() -> BinaryTree:
  lll_node: BinaryTree = BinaryTree(8)
  llr_node: BinaryTree = BinaryTree(9)

  ll_node: BinaryTree = BinaryTree(4)
  ll_node.left = lll_node
  ll_node.right = llr_node

  lrl_node: BinaryTree = BinaryTree(10)
  lr_node: BinaryTree = BinaryTree(5)
  lr_node.left = lrl_node

  l_node: BinaryTree = BinaryTree(2)
  l_node.left = ll_node
  l_node.right = lr_node

  rl_node: BinaryTree = BinaryTree(6)
  rr_node: BinaryTree = BinaryTree(7)
  r_node: BinaryTree = BinaryTree(3)
  r_node.left = rl_node
  r_node.right = rr_node

  root: BinaryTree = BinaryTree(1)
  root.left = l_node
  root.right = r_node

  return root

if __name__ == "__main__":
  root: BinaryTree = create_tree()
  assert branch_sums(root) == [15, 16, 18, 10, 11]
