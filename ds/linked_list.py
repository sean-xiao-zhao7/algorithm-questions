from linked_list_node import LinkedListNode


class LinkedList:
    def __init__(self) -> None:
        self._head = None
        self._size = 0

    @property
    def head(self):
        return self._head

    @head.setter
    def head(self, node):
        self._head = node

    @property
    def size(self):
        return self._size

    @size.setter
    def size(self, value):
        self._size = value

    def insertFirst(self, value):
        newNode = LinkedListNode(value)
        if not self.head:
            self.head = newNode
        else:
            temp = self.head
            self.head = newNode
            self.head.next = temp
        self.size += 1

    def __repr__(self) -> str:
        if not self.head:
            return 'No nodes.'
        result = str(self.head)
        current_node = self.head.next
        while current_node:
            result += ' -> '
            result += str(current_node)
            current_node = current_node.next
        return result


if __name__ == '__main__':
    llist1 = LinkedList()
    llist1.insertFirst(1)
    llist1.insertFirst(2)
    print(llist1.size)
