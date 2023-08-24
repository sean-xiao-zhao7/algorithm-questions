from linked_list_node import LinkedListNode


class LinkedList:
    def __init__(self) -> None:
        self._head = None
        self._size = 0
        self._tail = None
        self._current_node = None

    @property
    def head(self):
        return self._head

    @head.setter
    def head(self, node):
        self._head = node

    @property
    def tail(self):
        return self._tail

    @tail.setter
    def tail(self, node):
        self._tail = node

    @property
    def size(self):
        return self._size

    @size.setter
    def size(self, value):
        self._size = value

    def insertFirst(self, value):
        """
        Insert a single node at the beginning (left most) of the list.
        """
        newNode = LinkedListNode(value)
        if not self.head:
            self.head = newNode
            self.tail = self.head
        else:
            temp = self.head
            self.head = newNode
            self.head.next = temp
        self.size += 1

    def insertLast(self, value):
        """
        Insert a single node at the end (right most) of the list.
        """
        if not self.head:
            self.insertFirst(value)
        else:
            newNode = LinkedListNode(value)
            self.tail.next = newNode
            self.tail = newNode
        self.size += 1

    def getFirst(self):
        """
        Return a single node at the beginning (left most) of the list.
        """
        if self.head:
            return self.head
        else:
            return False

    def getLast(self):
        """
        Return a single node at the end (right most) of the list.
        """
        if self.tail:
            return self.tail
        else:
            return False

    def removeFirst(self):
        """
        Remove and return the first (left most) node.
        """
        if not self.head:
            return False
        else:
            temp = self.head
            self.head = self.head.next
            return temp

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

    def __iter__(self):
        return self

    def __next__(self):
        if self.head:
            value = self.head
            self.head = self.head.next
            return value
        else:
            raise StopIteration


if __name__ == '__main__':
    llist1 = LinkedList()
    llist1.insertFirst(1)
    llist1.insertFirst(2)
    llist1.insertLast(0)
    llist1.insertLast(-1)
    llist1.insertFirst(3)
    llist1.insertLast(-2)
    for node in llist1:
        print(node)
