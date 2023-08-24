from linked_list_node import LinkedListNode


class LinkedList:
    def __init__(self) -> None:
        self._head = None

    @property
    def head(self):
        return self._head

    def insertFirst(self, value):
        newNode = LinkedListNode(value)
        if not self.head:
            self.head = newNode

    def __repr__(self) -> str:
        if not self.head:
            return 'No nodes.'
        result = str(self.head)
        current_node = self.head.next
        while current_node:
            result += ' -> '
            result += str(current_node)
        return result


if __name__ == '__main__':
    llist1 = LinkedList()
    print(llist1)
