# This is an input class. Do not edit.
class LinkedList:
    def __init__(self, value):
        self.value = value
        self.next = None
pass

# based on the value of K we are going to store the last
# K nodes of the linked list, thus when we reach the tail
# we will be able to remove the kth node without performing a backward loop
def remove_kth_node_from_end(head, k):
    array = []
    node = head
    list_size = 0

    while node is not None:
        array.append(node)
        if len(array) > k + 1:
            array.pop(0)
        node = node.next
        list_size += 1

    # removing head
    if list_size == k:
        head.value = head.next.value
        head.next = head.next.next
        return

    array[0].next = array[1].next

def output_as_array(node):
  array = []
  while (node is not None):
    array.append(node.value)
    node = node.next

  return array

if __name__ == "__main__":
  n9 = LinkedList(9)
  n8 = LinkedList(8)
  n8.next = n9
  n7 = LinkedList(7)
  n7.next = n8
  n6 = LinkedList(6)
  n6.next = n7
  n5 = LinkedList(5)
  n5.next = n6
  n4 = LinkedList(4)
  n4.next = n5
  n3 = LinkedList(3)
  n3.next = n4
  n2 = LinkedList(2)
  n2.next = n3
  n1 = LinkedList(1)
  n1.next = n2
  n0 = LinkedList(0)
  n0.next = n1

  remove_kth_node_from_end(n0, 4)
  output_array = output_as_array(n0)
  assert output_array == ([x for x in range(6)] + [x for x in range(7, 10)])


